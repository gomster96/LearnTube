import React from 'react';
import { Link, useLocation } from 'react-router-dom';
const MenuItems = (props) => {
    const { parentMenu, secondParentMenu } = props;
    const location = useLocation();

    return (
        <React.Fragment>
            <li className={parentMenu === 'main' ? 'rs-mega-menu menu-item-has-children current-menu-item' : 'rs-mega-menu menu-item-has-children'}><Link to="/">Main</Link></li>
            <li className={parentMenu === 'dashboard' ? 'rs-mega-menu menu-item-has-children current-menu-item' : 'rs-mega-menu menu-item-has-children'}><Link to="/dashboard">Dashboard</Link>
                {/* <ul className="mega-menu">
                    <li className="mega-menu-container"> */}
                        {/* <div className="single-megamenu">
                            <ul className="sub-menu">
                                <li>
                                    <Link to="/" className={location.pathname === "/" ? "active-menu" : ""}>Main Demo</Link>
                                </li>
                                <li>
                                    <Link to="/home-2" className={location.pathname === "/home-2" ? "active-menu" : ""}>Online Course</Link>
                                </li>
                                <li>
                                    <Link to="/home-3" className={location.pathname === "/home-3" ? "active-menu" : ""}>University 01</Link>
                                </li>
                                <li>
                                    <Link to="/home-4" className={location.pathname === "/home-4" ? "active-menu" : ""}>E-Learning</Link>
                                </li>
                                <li>
                                    <Link to="/home-5" className={location.pathname === "/home-5" ? "active-menu" : ""}>Distance Learning</Link>
                                </li>
                            </ul>
                        </div> */}
                        {/* <div className="single-megamenu">
                            <ul className="sub-menu">
                                <li>
                                    <Link to="/home-6" className={location.pathname === "/home-6" ? "active-menu" : ""}>Personal Demo</Link>
                                </li>
                                <li>
                                    <Link to="/home-7" className={location.pathname === "/home-7" ? "active-menu" : ""}>Online Training</Link>
                                </li>
                                <li>
                                    <Link to="/home-8" className={location.pathname === "/home-8" ? "active-menu" : ""}>Online Learning</Link>
                                </li>
                                <li>
                                    <Link to="/home-10" className={location.pathname === "/home-10" ? "active-menu" : ""}>University 02</Link>
                                </li>
                                <li>
                                    <Link to="/home-12" className={location.pathname === "/home-12" ? "active-menu" : ""}>Freelancing Course</Link>
                                </li>
                            </ul>
                        </div> */}
                        {/* <div className="single-megamenu">
                            <ul className="sub-menu">
                                <li>
                                    <Link to="/home-14" className={location.pathname === "/home-14" ? "active-menu" : ""}>Courses Archive</Link>
                                </li>
                                <li>
                                    <Link to="/home-9" className={location.pathname === "/home-9" ? "active-menu" : ""}>Coming Soon</Link>
                                </li>
                                <li>
                                    <Link to="/home-11" className={location.pathname === "/home-11" ? "active-menu" : ""}>Coming Soon</Link>
                                </li>
                                <li>
                                    <Link to="/home-13" className={location.pathname === "/home-13" ? "active-menu" : ""}>Coming Soon</Link>
                                </li>
                                <li>
                                    <Link to="/home-15" className={location.pathname === "/home-15" ? "active-menu" : ""}>Coming Soon</Link>
                                </li>
                            </ul>
                        </div> */}
                    {/* </li>
                </ul> */}
            </li>
            {/* <li className={parentMenu === 'about' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link to="#">About</Link>
                <ul className="sub-menu">
                    <li>
                        <Link to="/about" className={location.pathname === "/about" ? "active-menu" : ""}>About One</Link>
                    </li>
                    <li>
                        <Link to="/about-2" className={location.pathname === "/about-2" ? "active-menu" : ""}>About Two</Link>
                    </li>
                </ul>
            </li> */}
            <li className={parentMenu === 'course' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link to="/course">Courses</Link>
            </li>
            <li className={parentMenu === 'learntube' ? 'rs-mega-menu menu-item-has-children current-menu-item' : 'rs-mega-menu menu-item-has-children'}>
                <Link to="/learntube-studio">LearnTube Studio</Link>
            </li>
            {/* <li className={parentMenu === 'pages' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link to="#">Pages</Link>
                <ul className="sub-menu">
                    <li>  
                        <Link to="#" className={secondParentMenu === 'team' ? 'menu-item-has-children active-menu' : 'menu-item-has-children'}>Team</Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/team" className={location.pathname === "/team" ? "active-menu" : ""}>Team One</Link>
                            </li>
                            <li>
                                <Link to="/team-2" className={location.pathname === "/team-2" ? "active-menu" : ""}>Team Two</Link>
                            </li>
                            <li>
                                <Link to="/team/team-single" className={location.pathname === "/team/team-single" ? "active-menu" : ""}>Team Single</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#" className={secondParentMenu === 'event' ? 'menu-item-has-children active-menu' : 'menu-item-has-children'}>Event</Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/event" className={location.pathname === "/event" ? "active-menu" : ""}>Event One</Link>
                            </li>
                            <li>
                                <Link to="/event-2" className={location.pathname === "/event-2" ? "active-menu" : ""}>Event Two</Link>
                            </li>
                            <li>
                                <Link to="/event-3" className={location.pathname === "/event-3" ? "active-menu" : ""}>Event Three</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#" className={secondParentMenu === 'gallery' ? 'menu-item-has-children active-menu' : 'menu-item-has-children'}>Gallery</Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/gallery" className={location.pathname === "/gallery" ? "active-menu" : ""}>Gallery One</Link>
                            </li>
                            <li>
                                <Link to="/gallery-2" className={location.pathname === "/gallery-2" ? "active-menu" : ""}>Gallery Two</Link>
                            </li>
                            <li>
                                <Link to="/gallery-3" className={location.pathname === "/gallery-3" ? "active-menu" : ""}>Gallery Three</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#" className={secondParentMenu === 'shop' ? 'menu-item-has-children active-menu' : 'menu-item-has-children'}>Shop</Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/shop" className={location.pathname === "/shop" ? "active-menu" : ""}>Shop</Link>
                            </li>
                            <li>
                                <Link to="/shop/shop-single" className={location.pathname === "/shop/shop-single" ? "active-menu" : ""}>Shop Single</Link>
                            </li>
                            <li>
                                <Link to="/shop/cart" className={location.pathname === "/shop/cart" ? "active-menu" : ""}>Cart</Link>
                            </li>
                            <li>
                                <Link to="/shop/checkout" className={location.pathname === "/shop/checkout" ? "active-menu" : ""}>Checkout</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#" className={secondParentMenu === 'others' ? 'menu-item-has-children active-menu' : 'menu-item-has-children'}>Others</Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/faq" className={location.pathname === "/faq" ? "active-menu" : ""}>FAQ</Link>
                            </li>
                            <li>
                                <Link to="/error" className={location.pathname === "/error" ? "active-menu" : ""}>404 Page</Link>
                            </li>
                            <li>
                                <Link to="/login" className={location.pathname === "/login" ? "active-menu" : ""}>Login</Link>
                            </li>
                            <li>
                                <Link to="/register" className={location.pathname === "/register" ? "active-menu" : ""}>Register</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li> */}
            {/* <li className={parentMenu === 'blog' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link to="#">Blog</Link>
                <ul className="sub-menu">
                    <li>
                        <Link to="/blog" className={location.pathname === "/blog" ? "active-menu" : ""}>Blog</Link>
                    </li>
                    <li>
                        <Link to="#" className={secondParentMenu === 'blogSidebar' ? 'menu-item-has-children active-menu' : 'menu-item-has-children'}>Blog Sidebar</Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/blog/blog-left-sidebar" className={location.pathname === "/blog/blog-left-sidebar" ? "active-menu" : ""}>Blog Left Sidebar</Link>
                            </li>
                            <li>
                                <Link to="/blog/blog-right-sidebar" className={location.pathname === "/blog/blog-right-sidebar" ? "active-menu" : ""}>Blog Right Sidebar</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#" className={secondParentMenu === 'blogSingle' ? 'menu-item-has-children active-menu' : 'menu-item-has-children'}>Single Post</Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/blog/single-post-left-sidebar" className={location.pathname === "/blog/single-post-left-sidebar" ? "active-menu" : ""}>Post Left Sidebar</Link>
                            </li>
                            <li>
                                <Link to="/blog/single-post-right-sidebar" className={location.pathname === "/blog/single-post-right-sidebar" ? "active-menu" : ""}>Post Right Sidebar</Link>
                            </li>
                            <li>
                                <Link to="/blog/single-post-full-width" className={location.pathname === "/blog/single-post-full-width" ? "active-menu" : ""}>Full Width Post</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li> */}
            {/* <li className={parentMenu === 'contact' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link to="#">
                    Contact
                </Link>
                <ul className="sub-menu">
                    <li>
                        <Link to="/contact" className={location.pathname === "/contact" ? "active-menu" : ""}>Contact One</Link>
                    </li>
                    <li>
                        <Link to="/contact-2" className={location.pathname === "/contact-2" ? "active-menu" : ""}>Contact Two</Link>
                    </li>
                    <li>
                        <Link to="/contact-3" className={location.pathname === "/contact-3" ? "active-menu" : ""}>Contact Three</Link>
                    </li>
                    <li>
                        <Link to="/contact-4" className={location.pathname === "/contact-4" ? "active-menu" : ""}>Contact Four</Link>
                    </li>
                </ul>
            </li> */}
        </React.Fragment>
    );
}

    
          
            
    

          
    
    
  
export default MenuItems;