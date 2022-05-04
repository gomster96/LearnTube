import React from 'react';
import { Link } from 'react-router-dom';

import leftShapeImg from '../../assets/img/banner/left-shape.png';
import rightShapeImg from '../../assets/img/banner/right-shape.png';
import bottomShapeImg from '../../assets/img/banner/bottom-shape.png';
import bannerImg from '../../assets/img/banner/5.png';

const BannerStyleThree = () => {
    return (
        <React.Fragment>
            {/* <!-- banner section start --> */}
            <div id="rs-banner" className="rs-banner style5">
                <div className="container relative">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-content">
                                <div className="sub-title">Personal Life Coaching</div>
                                <h1 className="banner-title">Personal Growth <br />With Educavo</h1>
                                <div className="banner-btn">
                                    <Link to="/contact" className="readon2 banner-style">Hire a Coach Now</Link>
                                </div>
                                <div className="left-shape hidden-md animated pulse infinite">
                                    <img src={leftShapeImg} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-img hidden-md">
                                <img src={bannerImg} alt="Banner Image" />
                            </div>
                            <div className="right-shape hidden-md animated pulse infinite">
                                <img src={rightShapeImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-shape">
                    <img src={bottomShapeImg} alt="" />
                </div>
            </div>
            {/* <!-- banner section end --> */}
        </React.Fragment>
    );
}

export default BannerStyleThree;