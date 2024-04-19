import React from 'react';
import FilteredBlog from '@components/FilteredBlog';
import AppData from "@data/app.json";
import PageBanner from "@components/PageBanner";
import Sidebar from "@components/Sidebar";
import { generateJsonPostsData } from "@library/posts";

export const metadata = {
  title: {
    default: "Search",
  },
  description: AppData.settings.siteDescription,
}

async function fetchPosts() {
  try {
    const response = await fetch(process.cwd() + '/src/data/.json/posts.json');
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    const generatedPosts = await generateJsonPostsData();
    const fetchedPosts = await fetchPosts();
    this.setState({ posts: fetchedPosts || generatedPosts });
  }

  render() {
    const { posts } = this.state;

    return (
      <>
        <PageBanner pageTitle={"Search: %s"} breadTitle={"Search"} bgImage={"/img/photo/12.jpg"} />
        <section>
          <div className="container mil-p-120-60">
            <div className="mil-background-grid mil-softened"></div>
            <div className="row justify-content-between">
              <div className="col-lg-7">
                <FilteredBlog posts={posts} />
              </div>
              <div className="col-lg-5">
                <Sidebar />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Search;
