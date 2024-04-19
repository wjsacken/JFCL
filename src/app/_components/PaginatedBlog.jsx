import Link from "next/link";
import Date from '@library/date';
import Image from "next/image";

const PaginatedBlogPosts = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
      <Link href={`/blog/${item.id}`} className="mil-blog-card mil-mb-60" key={`blog-post-${index}`}>
          <div className="mil-cover mil-square mil-up">
              <Image src={item.image} alt={item.title} width="355" height="355"/>
              <div className="mil-date"><Date dateString={item.date} /></div>
          </div>
          <div className="mil-description">
              <span className="mil-suptitle mil-upper mil-up mil-mb-30">{item.category}</span>
              <h4 className="mil-upper mil-up mil-mb-30">{item.title}</h4>
              <p className="mil-up mil-mb-30">{item.short}</p>
              <span className="mil-link mil-upper mil-up">Read <span className="mil-arrow"><Image src="/img/icons/1.svg" width="20" height="20" alt="arrow" /></span></span>
          </div>
      </Link>
      ))}
    </>
  );
};
export default PaginatedBlogPosts;
  