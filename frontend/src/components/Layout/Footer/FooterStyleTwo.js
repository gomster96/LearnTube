import React from 'react';
import { Link } from 'react-router-dom';

import defaultLogo from '../../../assets/img/logo/logo.png';
import defaultBG from '../../../assets/img/bg/footer-bg.png';

const FooterStyleTwo = (props) => {
    const { footerClass, footerTopClass, footerLogo, footerBG, footerColor } = props;

    const footerBGStyle = {
        backgroundImage: `url(${footerBG})`,
        backgroundColor: `url(${footerColor})`
    }
    const defaultBGStyle = {
        backgroundImage: `url(${defaultBG})`,
        backgroundColor: '#273c66'
    }


    return (
        <footer id="rs-footer" className={footerClass ? footerClass : 'rs-footer'} style={footerBG && footerColor ? footerBGStyle : defaultBGStyle}>
            <div className={footerTopClass ? footerTopClass : "footer-top"}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12 col-sm-12 footer-widget md-mb-50">
                            <h4 className="widget-title">Explore</h4>
                            <ul className="site-map">
                                <li><Link to="/course">eLearning School</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/course">Courses</Link></li>
                                <li><Link to="/contact">Become A Teacher</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 footer-widget md-mb-50">
                            <h4 className="widget-title">Categories</h4>
                            <ul className="site-map">
                                <li><Link to="/course">All Courses</Link></li>
                                <li><Link to="/course-categories">Web Development</Link></li>
                                <li><Link to="/course-categories">Genarel Education</Link></li>
                                <li><Link to="/course-categories">Digital Marketing</Link></li>
                                <li><Link to="/course-categories">Web Design</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 footer-widget md-mb-50">
                            <h4 className="widget-title">Resources</h4>
                            <ul className="site-map">
                                <li><Link to="/contact">Become A Teacher</Link></li>
                                <li><Link to="/team/team-single">Instructor/Student Profile</Link></li>
                                <li><Link to="/course">Courses</Link></li>
                                <li><Link to="/shop/checkout">Checkout</Link></li>
                                <li><Link to="/faq">Faq</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 footer-widget">
                            <h4 className="widget-title">Address</h4>
                            <ul className="address-widget address2">
                                <li>
                                    <i className="flaticon-location"></i>
                                    <div className="desc">503 Old Buffalo Street Northwest #205 New York-3087</div>
                                </li>
                                <li>
                                    <i className="flaticon-call"></i>
                                    <div className="desc">
                                        <a href="tel:(123)-456-7890">(123)-456-7890</a>
                                        <a href="tel:(123)-456-7890">(123)-456-7890</a>
                                    </div>
                                </li>
                                <li>
                                    <i className="flaticon-email"></i>
                                    <div className="desc">
                                        <a href="mailto:infoname@gmail.com">infoname@gmail.com</a>
                                        <a href="#">www.yourname.com</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row y-middle">
                        <div className="col-lg-4 md-mb-20">
                            <div className="footer-logo">
                                <Link to="/" as="/">
                                    <img src={footerLogo ? footerLogo : defaultLogo} alt="Logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 md-mb-20">
                            <div className="copyright text-center md-text-left">
                                <p>© 2021 All Rights Reserved. Designed By <a href="https://rstheme.com/" target="_blank">RSTheme</a></p>
                            </div>
                        </div>
                        <div className="col-lg-4 text-right md-text-left">
                            <ul className="footer-social">
                                <li>
                                    <Link to="#">
                                        <i className="fa fa-facebook-f"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="fa fa-twitter"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="fa fa-pinterest"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="fa fa-google-plus"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="fa fa-instagram"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterStyleTwo;