import React from 'react';
import { Link } from 'react-router-dom';

import bannerImg from '../../assets/img/banner/home12/1.png';

import shapeImg1 from '../../assets/img/banner/home12/dotted-shape.png';
import shapeImg2 from '../../assets/img/banner/home12/intro-box.png';

import bgImg from '../../assets/img/banner/home12/banner-home12.jpg';

const bgStyle = {
    backgroundImage: `url(${bgImg})`
}

const BannerStyleEight = () => {
    return (
        <React.Fragment>
            {/* <!-- banner section start --> */}
            <div id="rs-banner" className="rs-banner style10" style={bgStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pl-60 relative order-last">
                            <div className="img-part">
                               <img className="up-down-new" src={bannerImg} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 pr-0">
                            <div className="banner-content">
                                <div className="sl-sub-title">Freelancer Courses</div>
                                <h1 className="sl-title">We Proudly Teaching Online Courses With Online Experts.</h1>
                                <div className="banner-btn">
                                    <Link className="readon green-banner" to="/about">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-intro-box">
                    <div className="shape-img">
                        <img className="up-down-new" src={shapeImg1} alt="" />
                    </div>
                    <div className="intro-img">
                        <img className="spine2" src={shapeImg2} alt="" />
                    </div>
                </div>
            </div>
            {/* <!-- banner section end --> */}
        </React.Fragment>
    );
}

export default BannerStyleEight;