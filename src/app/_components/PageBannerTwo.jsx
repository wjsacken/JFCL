"use client";

import { useEffect } from "react";
import { ScrollAnimation } from "@common/scrollAnims";
import Image from "next/image";

const PageBannerTwo = ({ subTitle, title, bgImage }) => {
  useEffect(() => {
    ScrollAnimation();
  }, []);
  
  return (
    <>    
        {/* banner */}
        <section className="mil-banner mil-banner-sm">
            <Image src={bgImage} className="mil-bg-img mil-scale" width="1300" height="300"  data-value-1=".4" data-value-2="1.4" alt="image" style={{"objectPosition": "top"}} />

            <div className="mil-overlay mil-overlay-interior" />
            <div className="container">
                <div className="mil-background-grid mil-top-space"></div>
                <div className="mil-banner-content">
                    <div className="mil-mb-90">
                        <span className="mil-suptitle mil-upper mil-light mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : subTitle}} />
                        <h1 className="mil-light mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : title}} />
                    </div>
                </div>
            </div>
        </section>
        {/* banner end */}
    </>
  );
};
export default PageBannerTwo;
