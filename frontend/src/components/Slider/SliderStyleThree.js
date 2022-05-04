import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

import repairImg from '../../assets/img/slider/style2/house-repair.png';

const SliderStyleThree = () =>  {

    const sliderSettings = {
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }
        ]
    };

    return (
        <React.Fragment>
            <div className="rs-slider style2">
                <Slider {...sliderSettings}>
                    <div className="slider-content slide1">
                        <div className="container">
                            <div className="content-part">
                                <div className="sl-img">
                                    <img src={repairImg} alt="slider" />
                                </div>
                                <h1 className="sl-title">We specialize in </h1>
                                <h1 className="sl-title2 mb-mb-10">Repair Gadgates</h1>
                                <div className="sl-desc">
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum quis nostrud. 
                                </div>
                                <div className="sl-btn">
                                    <Link className="readon buy-now sl-btn" to="/about">Get started now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="slider-content slide2">
                        <div className="container">
                            <div className="content-part">
                                <div className="sl-img">
                                    <img src={repairImg} alt="slider" />
                                </div>
                                <h1 className="sl-title">We specialize in </h1>
                                <h1 className="sl-title2 mb-mb-10">Repair Gadgates</h1>
                                <div className="sl-desc">
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum quis nostrud. 
                                </div>
                                <div className="sl-btn">
                                    <Link className="readon buy-now sl-btn" to="/about">Get started now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </React.Fragment>
    );
}

export default SliderStyleThree;