import React from "react";
import { Link } from "react-router-dom";
import postImg1 from "../../../assets/img/blog/post1.jpg";
import postImg2 from "../../../assets/img/blog/post2.jpg";

// import defaultLogo from "../../../assets/img/logo/logo.png";
import defaultBG from "../../../assets/img/bg/footer-bg.png";
import defaultLogo from "../../../assets/img/logo/Learntube-logos_transparent.png";
const FooterStyleTwo = (props) => {
  const { footerClass, footerTopClass, footerLogo, footerBG, footerColor } =
    props;

  const footerBGStyle = {
    backgroundImage: `url(${footerBG})`,
    backgroundColor: `url(${footerColor})`,
  };
  const defaultBGStyle = {
    backgroundImage: `url(${defaultBG})`,
    backgroundColor: "#273c66",
  };

  return (
    <footer
      id="rs-footer"
      className={footerClass ? footerClass : "rs-footer"}
      style={footerBG && footerColor ? footerBGStyle : defaultBGStyle}
    >
      <div className={footerTopClass ? footerTopClass : "footer-top"}>
        <div className="container">
          <div className="row ">
            <div className="col-lg-3 col-md-12 col-sm-12 footer-widget md-mb-50">
              <h4 className="widget-title">Explore</h4>

              <div className="textwidget pr-60 md-pr-14">
                <p className="text-white">
                  YouTube에서 원하는 영상들만 골라 강의리스트를 완성하고, 강의실
                  제작자들이 체계적으로 짠 강의들을 골라 수강해보세요!
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 footer-widget md-mb-50">
              <h4 className="widget-title">Categories</h4>
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
                  <Link to="/learntube/">Login</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 footer-widget">
              <h3 className="widget-title">Recent Classes</h3>
              <div className="recent-post mb-20">
                <div className="post-img">
                  {/* <img src={postImg1} alt="blog image" /> */}
                </div>
                <div className="post-item">
                  <div className="post-desc">
                    <Link to="/learntube/course/course-single">
                      JAVA 프로그래밍 기초
                    </Link>
                  </div>
                  <span className="post-date">
                    <i className="fa fa-calendar-check-o"></i>
                    May 15, 2022
                  </span>
                </div>
              </div>
              <div className="recent-post mb-20">
                <div className="post-img">
                  {/* <img src={postImg2} alt="blog image" /> */}
                </div>
                <div className="post-item">
                  <div className="post-desc">
                    <Link to="../course/course-single">
                      나의 첫 안드로이드 앱
                    </Link>
                  </div>
                  <span className="post-date">
                    <i className="fa fa-calendar-check-o"></i>
                    April 25, 2022
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 footer-widget">
              <h4 className="widget-title">Address</h4>
              <ul className="address-widget">
                <li>
                  <i className="flaticon-location"></i>
                  <div className="desc">
                    경상북도 포항시 북구 흥해읍 한동로 558, 한동대학교 뉴턴홀
                    219호 WALAB
                  </div>
                </li>
                <li>
                  <i className="flaticon-call"></i>
                  <div className="desc">
                    <a href="tel:(+82)054-260-1378">(+82)054-260-1378</a>
                  </div>
                </li>
                <li>
                  <i className="flaticon-email"></i>
                  <div className="desc">
                    <a href="mailto:support@rstheme.com">
                      moomin@handong.ac.kr
                    </a>
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
                <Link to="/learntube/" as="/learntube/">
                  <img src={footerLogo ? footerLogo : defaultLogo} alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 md-mb-20">
              <div className="copyright text-center md-text-left">
                <p>
                  © 2022 All Rights Reserved. Designed By{" "}
                  <a href="#" target="_blank">
                    WALAB
                  </a>
                </p>
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
};

export default FooterStyleTwo;
