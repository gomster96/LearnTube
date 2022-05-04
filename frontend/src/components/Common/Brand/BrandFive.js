import React from 'react';
import Slider from "react-slick";

import brandLogo1 from '../../../assets/img/brand/style2/1.png';
import brandLogo2 from '../../../assets/img/brand/style2/2.png';
import brandLogo3 from '../../../assets/img/brand/style2/3.png';
import brandLogo4 from '../../../assets/img/brand/style2/4.png';


const BrandFive = () => {

    const sliderSettings = {
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
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
        <div className="rs-partner pt-94 pb-94  md-pt-80 md-pb-70">
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
                </Slider>
            </div>
        </div>
    );
}

export default BrandFive;