import React from "react";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import ContactForm from "@components/ContactForm";

import Link from "next/link";

export const metadata = {
    title: {
        default: "Contact",
    },
    description: AppData.settings.siteDescription,
}

const Contact = () => {
  return (
    <>
        <PageBanner pageTitle={"We’d love to talk"} breadTitle={"Contact"} bgImage={"/img/photo/line.jpg"} />

        <section className="mil-relative">
            <div className="container mil-p-120-30">
                <div className="mil-background-grid mil-softened"></div>
                <div className="row justify-content-between">
                    <div className="col-lg-4">

                        <div className="mil-mb-90">
                            <h2 className="mil-upper mil-up mil-mb-30">Have a Question?</h2>
                            <p className="mil-up mil-mb-30">Feel free to send us a message with any questions you may have and we will be happy to help.</p>
                            <div className="mil-divider-lg mil-up mil-mb-30"></div>
                            <h3 className="mil-up mil-mb-10">Wallace & Graham</h3>
                            <a href="tel:800-849-5291" className="mil-mb-30">
                                <img src="/img/icons/phone-call1.svg" width="20" style={{top:"5px", position:"relative"}}></img> 800-849-5291
                            </a>
                            <br/>
                            <a href="mailto:JusticeForCampLejeune@wallacegraham.com">
                                <img src="/img/icons/mail.svg" style={{top:"5px", position:"relative"}}></img> Email
                            </a>
                            <h3 className="mil-up mt-xxl-4 mil-mb-10">Rhine Law Firm</h3>
                            <a href="tel:866-772-996" className="mil-mb-30">
                                <img src="/img/icons/phone-call1.svg" width="20"></img> 866-772-9960
                            </a><br/>
                            <a href="mailto:attorneys@rhinelawfirm.com">
                                <img src="/img/icons/mail.svg" style={{top:"5px", position:"relative"}}></img> Email
                            </a>
                            
                        </div>

                    </div>
                    <div className="col-lg-7">

                        <ContactForm />

                    </div>
                </div>
            </div>
        </section>
        {/* contact end */}
    </>
  );
};
export default Contact;
