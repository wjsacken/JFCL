import { getAllPostsIds, getPostData } from "@library/articles";
import { getAuthorData } from "@library/authors";
import Image from "next/image";
import Date from '@library/date';

import Link from "next/link";

import { notFound } from 'next/navigation';

import PageBannerTwo from "@components/PageBannerTwo";
import Sidebar from "@components/Sidebar";

async function PostsDetail( { params } ) {
  const postData = await getSinglePostData(params);
  const authorData = await getSingleAuthorData(postData.author.toLowerCase().replace(' ', '-'));

  return (
    <>
      <PageBannerTwo width="1300" height="300"  title={postData.introTitle} subTitle={postData.categories[0]} bgImage={postData.image} />
      
      {/* blog */}
      <section>
          <div className="container mil-p-120-60">
              <div className="mil-background-grid mil-softened" />

              <div className="row justify-content-between">
                  <div className="col-lg-7">

                      <div className="mil-publication">
                          <ul className="mil-post-top mil-list mil-dark mil-mb-30">
                              <li className="mil-text-sm mil-up mil-mb-10"><Image width="300" height="60" src={authorData.avatar} alt={postData.author} className="mil-pub-author" /></li>
                              <li className="mil-text-sm mil-up mil-mb-10">
                                <span className="mil-additional-text mil-text-sm mil-upper"><Date dateString={postData.date} /></span>
                              </li>
                          </ul>

                          <div className="mil-text mil-up mil-mb-40" dangerouslySetInnerHTML={{__html : postData.contentHtml}} />
                    
                      </div>

                  </div>
                  <div className="col-lg-5">

                    <Sidebar />

                  </div>
              </div>
          </div>
      </section>
      {/* blog end */}
    </>
  );
};
export default PostsDetail;

export async function generateStaticParams() {
  const paths = getAllPostsIds()

  return paths
}

async function getSinglePostData(params) {
  const postData = await getPostData(params.id)
  
  if ( !postData ) {
    notFound()
  } else {
    return postData
  }
}

async function getSingleAuthorData(author_id) {
    const authorData = await getAuthorData(author_id)
    
    return authorData
}