import React from "react";
import { Link } from "react-router-dom";
import FooterBottom from "./FooterBottom";

import footerLogo1 from "../../../assets/img/logo/logo.png";
import postImg1 from "../../../assets/img/blog/post1.jpg";
import postImg2 from "../../../assets/img/blog/post2.jpg";
import Logo from "../../../assets/img/logo/Learntube-logos_transparent.png";

const Footer = (props) => {
    const { footerLogo, footerClass, footerTopClass } = props;
    return (
        <footer className={footerClass ? footerClass : "rs-footer"}>
            <div className={`footer-top ${footerTopClass}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12 col-sm-12 footer-widget md-mb-50">
                            <div className="footer-logo mb-30">
                                <Link to="/learntube/" as="/learntube/">
                                    <img src={Logo ? Logo : Logo} alt="Logo" />
                                </Link>
                            </div>
                            <div className="textwidget pr-60 md-pr-14">
                                <p>YouTube에서 원하는 영상들만 골라 강의리스트를 완성하고, 강의실 제작자들이 체계적으로 짠 강의들을 골라 수강해보세요!</p>
                            </div>
                            <ul className="footer_social">
                                <li>
                                    <a href="#">
                                        <i className="fa fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-pinterest"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-google-plus"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 footer-widget md-mb-50">
                            <h3 className="widget-title">Address</h3>
                            <ul className="address-widget">
                                <li>
                                    <i className="flaticon-location"></i>
                                    <div className="desc">경상북도 포항시 북구 흥해읍 한동로 558, 한동대학교 뉴턴홀 219호 WALAB</div>
                                </li>
                                <li>
                                    <i className="flaticon-call"></i>
                                    <div className="desc">
                                        <a href="tel:(+880)155-69569">(+880)155-69569</a>
                                    </div>
                                </li>
                                <li>
                                    <i className="flaticon-email"></i>
                                    <div className="desc">
                                        <a href="mailto:support@rstheme.com">moomin@handong.ac.kr</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 pl-50 md-pl-14 footer-widget md-mb-50">
                            <h3 className="widget-title">Category</h3>
                            <ul className="site-map">
                                <li>
                                    <Link to="/learntube/">Main</Link>
                                </li>
                                <li>
                                    <Link to="/learntube/dashboard">Dashboard</Link>
                                </li>
                                <li>
                                    <Link to="/learntube/course">Courses</Link>
                                </li>
                                <li>
                                    <Link to="/learntube/learntube-studio">LearnTube Studio</Link>
                                </li>
                                <li>
                                    <Link to="/learntube/login">Login</Link>
                                    {/* <Link to="/learntube/register">Register</Link> */}
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 footer-widget">
                            <h3 className="widget-title">Recent Classes</h3>
                            <div className="recent-post mb-20">
                                <div className="post-img">
                                    <img src={postImg1} alt="blog image" />
                                </div>
                                <div className="post-item">
                                    <div className="post-desc">
                                        <Link to="/learntube/course/course-single">JAVA 프로그래밍 기초</Link>
                                    </div>
                                    <span className="post-date">
                                        <i className="fa fa-calendar-check-o"></i>
                                        May 15, 2022
                                    </span>
                                </div>
                            </div>
                            <div className="recent-post mb-20">
                                <div className="post-img">
                                    <img src={postImg2} alt="blog image" />
                                </div>
                                <div className="post-item">
                                    <div className="post-desc">
                                        <Link to="../course/course-single">나의 첫 안드로이드 앱</Link>
                                    </div>
                                    <span className="post-date">
                                        <i className="fa fa-calendar-check-o"></i>
                                        April 25, 2022
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterBottom />
        </footer>
    );
};

export default Footer;
