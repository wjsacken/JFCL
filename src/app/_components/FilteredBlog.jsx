"use client";

import Link from "next/link";
import Date from '@library/date';
import Image from "next/image";

import { useSearchParams } from 'next/navigation'

function FilteredBlogPosts( { posts } ) {
    const searchParams = useSearchParams()
    const query = searchParams.get('key')

    let searchResults = posts.filter((post) => {
        if (post.title.includes(query)) {
            return post;
        } else if (post.tags.includes(query)) {
            return post;
        } else if (post.categories.includes(query)) {
            return post;
        } else if (post.short.includes(query)) {
            return post;
        } else if (post.content.includes(query)) {
            return post;
        }
    });

    return (
        <>
            { searchResults.length > 0 &&
                <>
                    {searchResults.map((item, index) => (
                    <Link href={`/blog/${item.id}`} className="mil-blog-card mil-mb-60" key={`blog-post-${index}`}>
                        <div className="mil-cover mil-square mil-up">
                            <Image src={item.image} alt={item.title} />
                            <div className="mil-date"><Date dateString={item.date} /></div>
                        </div>
                        <div className="mil-description">
                            <span className="mil-suptitle mil-upper mil-up mil-mb-30">{item.category}</span>
                            <h4 className="mil-upper mil-up mil-mb-30">{item.title}</h4>
                            <p className="mil-up mil-mb-30">{item.short}</p>
                            <span className="mil-link mil-upper mil-up">Read <span className="mil-arrow"><Image src="/img/icons/1.svg" alt="arrow" /></span></span>
                        </div>
                    </Link>
                    ))}
                </>
            }
        </>
    );
};
export default FilteredBlogPosts;