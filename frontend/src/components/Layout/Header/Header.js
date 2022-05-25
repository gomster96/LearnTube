import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import RSMobileMenu from "./RSMobileMenu";
import CanvasMenu from "./CanvasMenu";
import TopHeader from "./TopBar";

import normalLogo from "../../../assets/img/logo/lite-logo.png";
import darkLogo from "../../../assets/img/logo/dark-logo.png";

import productImg1 from "../../../assets/img/shop/1.jpg";
import productImg2 from "../../../assets/img/shop/2.jpg";

const Header = (props) => {
    const {
        headerClass,
        parentMenu,
        secondParentMenu,
        activeMenu,
        headerNormalLogo,
        headerStickyLogo,
        mobileNormalLogo,
        mobileStickyLogo,
        TopBar,
        TopBarClass,
        emailAddress,
        phoneNumber,
        Location,
        CanvasLogo,
        CanvasClass,
    } = props;
    const [menuOpen, setMenuOpen] = useState(false);

    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        // Sticky is displayed after scrolling for 100 pixels
        const toggleVisibility = () => {
            if (window.pageYOffset > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const searchModalAdd = () => {
        document.body.classList.add("modal-open");
    };

    const canvasMenuAdd = () => {
        document.body.classList.add("nav-expanded");
    };

    return (
        <React.Fragment>
            <div className={headerClass ? headerClass : "full-width-header home8-style4 main-home"}>
                <header id="rs-header" className="rs-header">
                    {TopBar ? <TopHeader topBarClass={TopBarClass} emailAddress={emailAddress} phoneNumber={phoneNumber} Location={Location} /> : ""}

                    <div className={isVisible ? "menu-area menu-sticky sticky" : "menu-area menu-sticky"}>
                        <div className="container">
                            <div className="row y-middle">
                                <div className="col-lg-2">
                                    <div className="logo-area hidden-md">
                                        <Link to="/learntube/">
                                            <img className="normal-logo" src={headerNormalLogo ? headerNormalLogo : normalLogo} alt="" />
                                            <img className="sticky-logo" src={headerStickyLogo ? headerStickyLogo : darkLogo} alt="" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-8 text-end">
                                    <div className="rs-menu-area">
                                        <div className="main-menu">
                                            <div className="mobile-menu md-display-block">
                                                <Link to="/learntube/" className="mobile-normal-logo">
                                                    <img className="normal-logo" src={mobileNormalLogo ? mobileNormalLogo : normalLogo} alt="" />
                                                </Link>
                                                <Link to="/learntube/" className="mobile-sticky-logo">
                                                    <img src={mobileNormalLogo ? mobileNormalLogo : darkLogo} alt="logo" />
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="rs-menu-toggle"
                                                    onClick={() => {
                                                        setMenuOpen(!menuOpen);
                                                    }}
                                                >
                                                    <i className="fa fa-bars"></i>
                                                </Link>
                                            </div>
                                            <nav className="rs-menu hidden-md text-start">
                                                <ul className="nav-menu">
                                                    <MenuItems
                                                        parentMenu={parentMenu}
                                                        // secondParentMenu={secondParentMenu}
                                                        // activeMenu={activeMenu}
                                                    />
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 relative text-end hidden-md">
                                    <div className="expand-btn-inner search-icon">
                                        <ul className="expand-items">
                                            <li className="sidebarmenu-search">
                                                <Link to="#" onClick={searchModalAdd} className="rs-search" href="#">
                                                    <i className="flaticon-search"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <a onClick={canvasMenuAdd} id="nav-expander" className="nav-expander" href="#">
                                                    <span className="dot1"></span>
                                                    <span className="dot2"></span>
                                                    <span className="dot3"></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <RSMobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} parentMenu={parentMenu} secondParentMenu={secondParentMenu} />
                    <div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>
                </header>
                <CanvasMenu canvasClass={CanvasClass ? CanvasClass : "right_menu_togle orange_color hidden-md"} canvasLogo={CanvasLogo ? CanvasLogo : darkLogo} />
            </div>
        </React.Fragment>
    );
};

export default Header;
