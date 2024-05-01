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
                <div className="container mt-lg-5 mil-p-0-30">
                    <div className="mil-background-grid mil-softened" />

                    <div className="row justify-content-between align-items-center flex-sm-row-reverse">
                        <div className="col-lg-5">

                            <div className="mil-mb-10">
                                <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                                <h2 className="mil-upper mil-up mil-mb-30 problem" dangerouslySetInnerHTML={{__html : Data.title}} />
                                <p className="mil-up mil-mb-40" dangerouslySetInnerHTML={{__html : Data.description}} />
                                <a onClick={() => setOpen(true)} className="mil-link mil-upper mil-up has-popup-video" style={{ "cursor" : "pointer" }}>
                                    {Data.button.label} 
                                    <span className="mil-arrow"><Image src="/img/icons/2.svg" width="20" height="20" alt="arrow" /></span>
                                </a>
                            </div>

                        </div>
                        <div className="col-lg-6">

                            <div className="mil-illustration mil-up mil-mb-90">
                                <div className="mil-image-frame1">
                                    <Image src={Data.image.url} alt={Data.image.alt} width="605" height="605" className="mil-scale" data-value-1="1" data-value-2="1.3" />
                                </div>
                                
                            </div>

                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-lg-12 mil-mb-80">
                            <p>Wallace & Graham has a large number of attorneys, paralegals, interns, and staff who are passionately pursuing our clients’ Camp Lejeune water contamination cases.  We have had daily involvement in the cases for months prior to the Camp Lejeune Justice Act was passed on August 10, 2022, and continuing to the present day.  This litigation – which is generally thought to be one of the largest mass tort cases in United States history – is centered in North Carolina, as the harm occurred at the Marine base in Jacksonville, North Carolina – Camp Lejeune, and further will be heard exclusively in the Eastern District of North Carolina.  Our firm has decades of experience in chemical exposure and cancer litigation – in a civil and workers’ compensation/occupational cases.  We remain extremely honored that W&G founding partner, Mona Lisa Wallace, was appointed by the judges in the Eastern District of NC as one of six (1/6) Co-Leads in this national litigation.</p><br/>
                            <p>Our firm holds monthly Webinars to provide our clients with case updates and is available on a daily basis to answer any and all questions our clients may have about their claim.  Please contact our team at any time to discuss your claim via <a href='mailto:justiceforcamplejeune@wallacegraham.com'>justiceforcamplejeune@wallacegraham.com</a>.</p><br/>
                            <p>Please visit the official website for the <a href='https://camplejeunecourtinfo.com/' target='_blank'>Camp Lejeune Plaintiff Leadership website</a> to have access to the most up to date information.</p>
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