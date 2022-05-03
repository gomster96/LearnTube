import React from 'react';
import { Link } from 'react-router-dom';


import bgImg from '../../assets/img/banner/home6/bg.png';

import shapeImg1 from '../../assets/img/bg/home6/icon/1.png';
import shapeImg2 from '../../assets/img/bg/home6/icon/2.png';
import shapeImg3 from '../../assets/img/bg/home6/icon/3.png';
import spine1 from '../../assets/img/banner/home6/spine-sm.png';
import spine2 from '../../assets/img/banner/home6/spine.png';

const bgStyle = {
    backgroundImage: `url(${bgImg})`,
    'background-size': 'cover',
    'background-position': 'center',
}



const BannerStyleSeven = () => {
    return (
        <React.Fragment>
            {/* <!-- banner section start --> */}
            <div id="rs-banner" className="rs-banner style6" style={bgStyle}>
                <div className="container">
                    <div className="banner-content text-center">
                        <h1 className="banner-title white-color">Educavo Remote Training</h1>
                        <div className="desc white-color mb-50">Learn At your Own Pace Develope Your Career</div>
                        <div className="banner-btn">
                            <Link className="readon2 orange banner-style" to="/about">Get Started Now</Link>
                        </div>
                    </div>
                    <div className="shape-img left">
                        <img
                            src={shapeImg1}
                            alt=""
                        />
                    </div>
                    <div className="shape-img center">
                        <div className="inner">
                            <img
                                src={shapeImg2}
                                alt=""
                            />
                            <div className="spiner one">
                                <img
                                    className="spine-r"
                                    src={spine1}
                                    alt=""
                                />
                                <img
                                    className="spine"
                                    src={spine2}
                                    alt=""
                                />
                            </div>
                            <div className="spiner two">
                                <img
                                    className="spine-r"
                                    src={spine1}
                                    alt=""
                                />
                                <img
                                    className="spine"
                                    src={spine2}
                                    alt=""
                                />
                            </div>
                            <div className="spiner three">
                                <img
                                    className="spine-r"
                                    src={spine1}
                                    alt=""
                                />
                                <img
                                    className="spine"
                                    src={spine2}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="shape-img right">
                        <img
                            src={shapeImg3}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            {/* <!-- banner section end --> */}
        </React.Fragment>
    );
}

export default BannerStyleSeven;