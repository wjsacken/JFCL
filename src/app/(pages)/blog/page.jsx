import PaginatedBlog from '@components/PaginatedBlog';
import Pagination from '@components/Pagination';
import Link from "next/link";
import AppData from "@data/app.json";
import PageBanner from "@components/PageBanner";
import Sidebar from "@components/Sidebar";
import PopularPosts from "@components/sections/PopularBlog";
import { getSortedCategoriesData } from "@library/categories";
import { getPaginatedPostsData, getFeaturedPostsData } from "@library/posts";
import PopularsPostsData from "@data/sections/popular-blog.json";
export const metadata = {
  title: {
		default: "Blog",
	},
  description: AppData.settings.siteDescription,
}
async function Blog() {
  const populars = await getAllPupulars();
  const categories = await getAllCategories();
  const postsData = await getAllPosts();

  return (
    <>
      <PageBanner pageTitle={"Blog"} breadTitle={"Blog"} bgImage={"/img/photo/16.jpg"} width="1300" height="300" />

      {/* blog */}
      <section>
          <div className="container mil-p-120-60">
              <div className="mil-background-grid mil-softened"></div>
              <div className="row justify-content-between">
                  <div className="col-lg-7">
                      <PopularPosts posts={populars} />
                      <div className="mil-divider-lg mil-up mil-mb-30"></div>

                      <PaginatedBlog
                        items={postsData.posts}
                      />

                  </div>
                  <div className="col-lg-5">

                      <Sidebar />

                  </div>
              </div>
          </div>
      </section>
      {/* blog end */}

      {/* pagination */}
      <div className="container mil-p-0-120">
          <div className="mil-background-grid mil-softened" />
          
          <Pagination
            currentPage={postsData.currentPage}
            totalItems={postsData.totalPosts}
            perPage={AppData.settings.perPage}
            renderPageLink={(page) => `/blog/page/${page}`}
          />
      </div>
      {/* pagination end */}
    </>
  );
};
export default Blog;
async function getAllPupulars() {
  const popularsData = await getFeaturedPostsData( PopularsPostsData.featured )
  return popularsData
}
async function getAllCategories() {
  const categoriesData = await getSortedCategoriesData()
  return categoriesData
}
async function getAllPosts() {
  const { posts, total } = getPaginatedPostsData( AppData.settings.perPage, 1 );
  return {
    posts: posts,
    totalPosts: total,
    currentPage: 1
  }
}