import React from 'react';
import { Link } from 'react-router-dom';
import FooterBottom from './FooterBottom';


import Newsletter from '../../Common/Newsletter';

import footerLogo1 from '../../../assets/img/logo/logo.png';

const Footer = (props) => {
    const { footerLogo, footerClass } = props;
    return (
        <footer className={footerClass ? footerClass : 'rs-footer'}>
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-4">
                            <div className="footer-logo">
                                <Link to="/" ><img src={footerLogo ? footerLogo : footerLogo1} alt="Logo" /></Link>
                            </div>
                            <div className="textwidget pb-30">
                                <p>Sedut perspiciatis unde omnis iste natus error sitlutem acc usantium doloremque denounce with illo inventore veritatis</p>
                            </div>
                            <ul className="footer-social md-mb-30">
                                <li>
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-pinterest"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 pl-44 md-pl-14 md-mb-30">
                            <h3 className="widget-title">IT Services</h3>
                            <ul className="site-map">
                                <li><Link to="/course-categories">Software Development</Link></li>
                                <li><Link to="/course-categories">Web Development</Link></li>
                                <li><Link to="/course-categories">Analytic Solutions</Link></li>
                                <li><Link to="/course-categories">Cloud and DevOps</Link></li>
                                <li><Link to="/course-categories">Product Design</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 md-mb-30">
                            <h3 className="widget-title">Contact Info</h3>
                            <ul className="address-widget">
                                <li>
                                    <i className="fa fa-map-marker"></i>
                                    <div className="desc">374 FA Tower, William S Blvd 2721, IL, USA</div>
                                </li>
                                <li>
                                    <i className="fa fa-phone"></i>
                                    <div className="desc">
                                        <a href="tel:(+880)155-69569">(+880)155-69569</a>
                                    </div>
                                </li>
                                <li>
                                    <i className="fa fa-envelope-open"></i>
                                    <div className="desc">
                                        <a href="mailto:support@rstheme.com">support@rstheme.com</a>
                                    </div>
                                </li>
                                <li>
                                    <i className="fa fa-clock-o"></i>
                                    <div className="desc">
                                        Opening Hours: 10:00 - 18:00
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <h3 className="widget-title">Newsletter</h3>
                            <p className="widget-desc">We denounce with righteous and in and dislike men who are so beguiled and demo realized.</p>
                            <p>
                                {/* newsletter-area-start */}
                                <Newsletter />
                                {/* newsletter-area-end */}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <FooterBottom />
        </footer>
    );
}

export default Footer;