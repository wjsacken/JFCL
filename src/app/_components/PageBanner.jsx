"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from "next/image";

import { useEffect } from "react";
import { ScrollAnimation } from "@common/scrollAnims";

const PageBanner = ({ pageTitle, breadTitle, bgImage }) => {
  const asPath = usePathname();

  let clearBreadTitle;

  if ( breadTitle != undefined ) {
    clearBreadTitle = breadTitle;
  } else {
    const regex = /(<([^>]+)>)/gi;
    clearBreadTitle = pageTitle.replace(regex, "");
  }
  
  useEffect(() => {
    ScrollAnimation();
  }, []);

  return (
    
    <>    
      {/* banner */}
      <section className="mil-banner mil-banner-sm">
          <Image src="/img/photo/16.jpg" className="mil-bg-img mil-scale" data-value-1=".4" data-value-2="1.4" width="1300" height="300" alt="image" style={{"objectPosition": "top"}} />

          <div className="mil-overlay-interior" />

          <div className="container">
              <div className="mil-background-grid mil-top-space" />

              <div className="mil-banner-content mil-center">
                  <div className="mil-mb-90">
                      <h1 className="mil-light mil-upper mil-mb-30" dangerouslySetInnerHTML={{__html : pageTitle}} />
                  </div>
              </div>
          </div>
      </section>
      {/* banner end */}
    </>
  );
};
export default PageBanner;
