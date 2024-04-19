"use client";

import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectsMasonry = ({ projects, categories }) => {
    // Isotope
    const isotope = useRef();
    const [filterKey, setFilterKey] = useState("*");
    
    useEffect(() => {
        //setTimeout(() => {
            isotope.current = new Isotope(".mil-portfolio-grid", {
                itemSelector: ".mil-grid-item",
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-sizer'
                },
                transitionDuration: '0.5s',
            });
        //}, 500);
    }, []);

    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
            ? isotope.current.arrange({ filter: `*` })
            : isotope.current.arrange({ filter: `.${filterKey}` });
        }
    }, [filterKey]);
    
    const handleFilterKeyChange = (key, e) => {
        e.preventDefault();
        setFilterKey(key);
        const filterLinks = document.querySelectorAll(".mil-filter a");
        filterLinks.forEach((filter) => {
            const filterValue = filter.getAttribute("data-filter");
            if (filterValue == key) {
                filter.classList.add("mil-current");
            } else {
                filter.classList.remove("mil-current");
            }
        });
    };

    return (
      <>
        {/* filter */}
        <div className="mil-filter">
        </div>
        {/* filter end */}
        
        {/* projects row */}
        <div className="row">
            <div className="col-lg-12">
                
                <div className="mil-portfolio-grid mil-up">
                <div className="grid-sizer" />

                {projects.map((item, key) => (
                <div className={`mil-grid-item ${item.category_slug}`} key={`projects-item-${key}`}>

                    <Link href={`${item.link}`} className={item.orientation == "vertical" ? "mil-portfolio-item-2 mil-long-item mil-mb-30" : "mil-portfolio-item-2 mil-square-item mil-mb-30"}>
                        <div className="mil-project-descr">
                            <h3 className="mil-upper mil-mb-30">{item.title}</h3>
                            <div className="mil-link mil-upper">Read more <div className="mil-arrow mil-light"><Image src="/img/icons/1.svg" width="20" height="20" alt="arrow" /></div></div>
                        </div>

                        <div className="mil-category">{item.category}</div>
                    </Link>

                </div>
                ))}
                </div>
                
            </div>
        </div>
        {/* projects row end */}
      </>
    );
};
export default ProjectsMasonry;
  