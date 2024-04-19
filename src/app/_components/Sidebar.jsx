import { Suspense } from "react";

import Link from "next/link";
import Date from '@library/date';
import Image from "next/image";

import { getSortedPostsData } from "@library/posts";
import { getSortedAuthorsData } from "@library/authors";

async function Sidebar() {
  const posts = await getAllRecentPosts();
  const authors = await getAllAuthors();

  return (
    <>
        {/* sidebar */}
        <div className="mil-sidebar-frame">
            <div className="mil-divider-lg mil-up mil-mb-30"></div>

            <h6 className="mil-upper mil-up mil-mb-30">Recent Posts</h6>
            <ul className="mil-list mil-list-type-2 mil-dark mil-up mil-mb-30">
                {posts.slice(0, 4).map((item, key) => (
                <li key={`sidebar-posts-item-${key}`}>
                    <div className="mil-text-sm mil-mb-10"><Link href={`/blog/${item.id}`}>{item.title}</Link></div>
                    <div className="mil-additional-text mil-text-xs mil-upper mil-mb-15"><Date dateString={item.date} /></div>
                </li>
                ))}
            </ul>
            <div className="mil-divider-lg mil-up mil-mb-30"></div>

            <h6 className="mil-upper mil-up mil-mb-30">Authors</h6>

            <ul className="mil-list mil-dark mil-mb-30">
                {authors.map((item, key) => (
                <li className="mil-text-sm mil-up mil-mb-10" key={`sidebar-author-item-${key}`}>
                    <Link href={`/blog/author/${item.id}`}><Image width="300" height="60" src={item.avatar} alt={item.title} className="mil-pub-author" />
                    </Link>
                </li>
                ))}
            </ul>

        </div>
        {/* sidebar end */}
    </>
  );
};
export default Sidebar;

async function getAllArchives() {
    const archivesData = await getSortedArchivesData()

    if ( !archivesData ) {
        return [];
    } else {
        return archivesData
    }
}

async function getAllTags() {
    const tagsData = await getSortedTagsData()

    if ( !tagsData ) {
        return [];
    } else {
        return tagsData
    }
}

async function getAllAuthors() {
    const authorsData = await getSortedAuthorsData()

    if ( !authorsData ) {
        return [];
    } else {
        return authorsData
    }
}

async function getAllRecentPosts() {
    const postsData = await getSortedPostsData()

    if ( !postsData ) {
        return [];
    } else {
        return postsData
    }
}