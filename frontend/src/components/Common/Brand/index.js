import React from 'react';
import Slider from "react-slick";

import brandNormalLogo1 from '../../../assets/img/brand/1.png';
import brandNormalLogo2 from '../../../assets/img/brand/2.png';
import brandNormalLogo3 from '../../../assets/img/brand/3.png';
import brandNormalLogo4 from '../../../assets/img/brand/4.png';
import brandNormalLogo5 from '../../../assets/img/brand/5.png';
import brandNormalLogo6 from '../../../assets/img/brand/6.png';

const Brand = (props) => {
    const { brandClass } = props;

    const sliderSettings = {
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className={brandClass ? brandClass : 'rs-partner pt-100 pb-100 md-pt-70 md-pb-70 gray-bg'}>
            <div className="container">
                <Slider {...sliderSettings}>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img className="main-logo" src={brandNormalLogo1} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img className="main-logo" src={brandNormalLogo2} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img className="main-logo" src={brandNormalLogo3} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img className="main-logo" src={brandNormalLogo4} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img className="main-logo" src={brandNormalLogo5} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img className="main-logo" src={brandNormalLogo6} alt="" />
                            </a>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Brand;