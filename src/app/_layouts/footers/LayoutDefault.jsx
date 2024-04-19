"use client";

import Link from "next/link";
import AppData from "@data/app.json";
import { usePathname } from 'next/navigation';
import Image from "next/image";
const DefaultFooter = () => {
  const asPath = usePathname();

  return (
    <>
    {/* footer */}
    <footer className="mil-relative bgGrey">
        <div className="container mil-p-120-90">
            <div className="row align-items-end siteFoot">
                <div className="col-lg-4" style={{textAlign: "center"}}>
                    <Link href="/" className="mil-logo">
                        <Image src={AppData.header.logo.image} alt={AppData.header.logo.alt} width="300" height="48" style={{"width": "300px"}} />
                    </Link>
                    <br />
                    <a href="tel:800-849-5291" className="mil-light" style={{fontSize: "20px", top: "20px", position: "relative" }}>
                        <Image src="/img/icons/phone-call.svg" alt="call" width="20" height="20" ></Image> 800-849-5291
                    </a><br/>
                    <a href="mailto:JusticeForCampLejeune@wallacegraham.com" className="mil-light" style={{fontSize: "14px", top: "20px", position: "relative" }}>
                        <Image src="/img/icons/mail-alt-1.svg" alt="email" width="20" height="20" style={{top:"5px", position:"relative"}}></Image> JusticeForCampLejeune@wallacegraham.com
                    </a><br/>
                    <p className="mil-light" style={{position:"relative", top:"30px"}}>525 N. Main St.<br/>Salisbury, NC 28144</p>
                </div>
                <div className="col-lg-4">                   
                </div>
                <div className="col-lg-4" style={{textAlign: "center"}}>
                    <Link href="/" className="mil-logo">
                        <Image src={AppData.footer.logo.image} alt={AppData.footer.logo.alt} width="100" height="64" style={{"width": "100px"}} />
                    </Link>
                    <br />
                    <a href="tel:866-772-996" className="mil-light" style={{fontSize: "20px", top: "20px", position: "relative" }}>
                        <Image src="/img/icons/phone-call.svg" width="20" height="20"  alt="call"></Image> 866-772-9960
                    </a><br/>
                    <a href="mailto:attorneys@rhinelawfirm.com" className="mil-light" style={{fontSize: "14px", top: "20px", position: "relative" }}>
                        <Image src="/img/icons/mail-alt-1.svg" alt="email" width="20" height="20"  style={{top:"5px", position:"relative"}}></Image> attorneys@rhinelawfirm.com
                    </a><br/>
                    <p className="mil-light" style={{position:"relative", top:"30px"}}>1612 Military Cutoff Road Suite 300<br/>Wilmington, NC 28403</p>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="mil-footer-bottom">
                <p className="mil-light-soft mil-mb-15">{AppData.footer.copy}</p>
                <ul className="mil-light-soft mil-mb-15">
                    {AppData.footer.menu.map((item, index) => (
                    <li key={`menu-item-${item}`} ><a href={item.link}>{item.label}</a></li>
                    ))}
                </ul>
            </div>

        </div>
    </footer>
    {/* footer end */}
    </>
  );
};
export default DefaultFooter;
