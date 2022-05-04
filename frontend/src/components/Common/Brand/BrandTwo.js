import React from 'react';
import Slider from "react-slick";

import brandLogo1 from '../../../assets/img/brand/1.png';
import brandLogo2 from '../../../assets/img/brand/2.png';
import brandLogo3 from '../../../assets/img/brand/3.png';
import brandLogo4 from '../../../assets/img/brand/4.png';
import brandLogo5 from '../../../assets/img/brand/5.png';
import brandLogo6 from '../../../assets/img/brand/6.png';


const BrandTwo = () => {

    const sliderSettings = {
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
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
        <div className="rs-partner style2 modify1">
            <p className="title">Trusted By 5000+ Worldwide Customers:</p>
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
    );
}

export default BrandTwo;