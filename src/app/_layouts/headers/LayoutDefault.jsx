"use client";

import Link from "next/link";
import AppData from "@data/app.json";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from "next/image";
const DefaultHeader = () => {
  const [toggle, setToggle] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const asPath = usePathname();

  const isPathActive = (path) => {
    return (asPath.indexOf(path) !== -1 && path !== '/') || asPath === path;
  };

  const handleSubMenuClick = (index, e) => {
    e.preventDefault();
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  useEffect(() => {
    // close mobile menu
    setToggle(false);
  }, [asPath])

  return (
    <>
        {/* top bar */}
        <div className="mil-top-panel">
            <div className="container-fluid">
                <div className="mil-top-panel-content">
                    <Link href="/" className="mil-logo">
                        <Image className="wgLogo" src={AppData.header.logo.image} alt={AppData.header.logo.alt} width="300" height="48" style={{ width: "300px", marginRight: "2rem" }} />
                        <Image className="rhineLogo" src={AppData.footer.logo.image} alt={AppData.footer.logo.alt} width="100" height="64" style={{width: "100px", marginRight: "1rem"}} />
                    </Link>
                    <div className={`mil-navigation ${toggle ? "mil-active" : ""}`}>
                        <nav>
                            <ul>
                                {AppData.header.menu.map((item, index) => (
                                <li className={`mil-has-children ${isPathActive(item.link) ? "mil-active" : ""}`} key={`header-menu-item-${index}`}>
                                    <Link href={item.link} onClick={item.children.length > 0  ? (e) => handleSubMenuClick(index, e) : null}>
                                        {item.label}
                                    </Link>
                                    {item.children.length > 0 && (
                                    <ul className={activeSubMenu === index ? 'mil-active' : ''}>
                                        {item.children.map((subitem, subIndex) => (
                                        <li key={`header-submenu-item-${subIndex}`} className={isPathActive(subitem.link) ? "mil-active" : ""}>
                                            <Link href={subitem.link}>
                                                {subitem.label}
                                            </Link>
                                        </li>
                                        ))}
                                    </ul>
                                    )}
                                </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* right buttons */}
                    <div className="mil-top-panel-buttons">
                        <Link href="/contact" className="mil-button mil-sm">Case Evaluation</Link>

                        <div className={`mil-menu-btn ${toggle ? "mil-active" : ""}`} onClick={() => setToggle(!toggle)}>
                            <span></span>
                        </div>
                    </div>
                    {/* right buttons end */}

                </div>

            </div>
        </div>
        {/* top bar end */}
    </>
  );
};
export default DefaultHeader;
