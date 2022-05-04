import React from 'react';
import Slider from "react-slick";

import brandLogo1 from '../../../assets/img/brand/1.png';
import brandLogo2 from '../../../assets/img/brand/2.png';
import brandLogo3 from '../../../assets/img/brand/3.png';
import brandLogo4 from '../../../assets/img/brand/4.png';
import brandLogo5 from '../../../assets/img/brand/5.png';
import brandLogo6 from '../../../assets/img/brand/6.png';

const BrandThree = (props) => {
    const { brandBg, brandClass } = props;

    const brandBgStyle = {
        backgroundImage: `url(${brandBg ? brandBg : ''})`
    }

    const brandBgDefaultStyle = {
        backgroundColor: 'transparent'
    }

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
        <div className={brandClass ? brandClass : 'rs-partner style2 pt-120 md-pt-80'} style={brandBg ? brandBgStyle : brandBgDefaultStyle}>
            <div className="container">
                <Slider {...sliderSettings}>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img src={brandLogo1} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img src={brandLogo2} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img src={brandLogo3} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img src={brandLogo4} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img src={brandLogo5} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img src={brandLogo6} alt="" />
                            </a>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default BrandThree;