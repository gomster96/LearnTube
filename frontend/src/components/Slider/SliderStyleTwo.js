import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const SliderStyleTwo = () => {

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
            <div className="rs-slider style1">
                <Slider {...sliderSettings}>
                    <div className="slider-content slide1">
                        <div className="container">
                            <div className="sl-sub-title white-color">World Leading University</div>
                            <h1 className="sl-title white-color">Educavo University</h1>
                            <div className="sl-btn">
                                <Link className="readon2 banner-style" to="/about">Discover More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="slider-content slide2">
                        <div className="container">
                            <div className="sl-sub-title white-color">World Leading University</div>
                            <h1 className="sl-title white-color">Educavo University</h1>
                            <div className="sl-btn">
                                <Link className="readon2 banner-style" to="/about">Discover More</Link>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </React.Fragment>
    );
}

export default SliderStyleTwo;