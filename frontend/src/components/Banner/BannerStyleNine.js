import React from 'react';
import Tilty from 'react-tilty';

import bgImg from '../../assets/img/banner/home14/border.png';
import bannerImg from '../../assets/img/banner/home14/img.png';

import featureIcon1 from '../../assets/img/features/icon/1.png';
import featureIcon2 from '../../assets/img/features/icon/2.png';
import featureIcon3 from '../../assets/img/features/icon/3.png';

const bgStyle = {
    backgroundImage: `url(${bgImg})`
}

const BannerStyleEight = () => {
    return (
        <React.Fragment>
            {/* <!-- banner section start --> */}
            <div id="rs-banner" className="rs-banner style12" style={bgStyle}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 md-mb-50">
                            <div className="banner-content">
                                <span className="sub-text">Build Your Future </span>
                                <h2 className="title">Choose <span>2500+</span> Online <span>Video</span> Courses With New Additions</h2>
                                <p className="desc">Take your learning organisation to the next level.</p>
                                <div className="search-widget">
                                    <div className="search-wrap">
                                        <input type="search" placeholder="Search here what do you  went to learn?" name="s" className="search-input" value="" />
                                        <button type="submit" value="Search"><i className="flaticon-search"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pl-100 md-pl-14 hidden-md">
                            <div className="banner-img">
                                <Tilty
                                    reverse="false"
                                    perspective="10000"
                                    speed="3000"
                                >
                                    <img src={bannerImg} alt="Image" />
                                </Tilty>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section start */}
                <div id="rs-features" className="rs-features style4 pt-50 md-pt-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="features-wrap">
                                    <div className="icon-part">
                                        <img src={featureIcon3} alt="Image" />
                                    </div>
                                    <div className="content-part">
                                        <h4 className="title">
                                            <span className="watermark">2500+ Online Courses</span>
                                        </h4>
                                        <p className="dese">
                                            Enjoy a fresh topics
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="features-wrap">
                                    <div className="icon-part">
                                        <img src={featureIcon2} alt="" />
                                    </div>
                                    <div className="content-part">
                                        <h4 className="title">
                                            <span className="watermark">Expert Instruction</span>
                                        </h4>
                                        <p className="dese">
                                            Find the right instructor
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="features-wrap">
                                    <div className="icon-part">
                                        <img src={featureIcon1} alt="" />
                                    </div>
                                    <div className="content-part">
                                        <h4 className="title">
                                            <span className="watermark">Lifetime access</span>
                                        </h4>
                                        <p className="dese">
                                            Learn on your schedule
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Features Section End */}
            </div>
            {/* <!-- banner section end --> */}
        </React.Fragment>
    );
}

export default BannerStyleEight;