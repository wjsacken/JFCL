"use client";

import { useState } from 'react';
import Data from "@data/sections/about.json";
import Link from "next/link";
import Image from "next/image";

import ModalVideo from 'react-modal-video'
import 'react-modal-video/css/modal-video.css'

const AboutSection = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            {/* about */}
            <section>
                <div className="container mil-p-0-30">
                    <div className="mil-background-grid mil-softened" />

                    <div className="row justify-content-between align-items-center flex-sm-row-reverse">
                        <div className="col-lg-5">

                            <div className="mil-mb-90">
                                <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                                <h2 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                                <p className="mil-up mil-mb-40" dangerouslySetInnerHTML={{__html : Data.description}} />
                                <a onClick={() => setOpen(true)} className="mil-link mil-upper mil-up has-popup-video" style={{ "cursor" : "pointer" }}>
                                    {Data.button.label} 
                                    <span className="mil-arrow"><Image src="/img/icons/2.svg" alt="arrow" /></span>
                                </a>
                            </div>

                        </div>
                        <div className="col-lg-6">

                            <div className="mil-illustration mil-up mil-mb-90">
                                <div className="mil-image-frame">
                                    <Image src={Data.image.url} alt={Data.image.alt} className="mil-scale" data-value-1="1" data-value-2="1.3" />
                                </div>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <ModalVideo channel='youtube' isOpen={isOpen} videoId={Data.button.link.replace("https://www.youtube.com/watch?v=", "")} onClose={() => setOpen(false)} />
            {/* about end */}
        </>
    );
};

export default AboutSection;