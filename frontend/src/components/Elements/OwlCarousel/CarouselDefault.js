import React from 'react';
import Slider from "react-slick";

const CarouselDefault = () => {

    const sliderSettings = {
        dots: true,
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
            <Slider {...sliderSettings}>
                <div className="col-12">
                    <div className="project-wrapper">
                        <div className="project-img">
                            <a href="#"><img src="assets/img/project/01.jpg" alt="" /></a>
                            <div className="project-text">
                                <span>business strategy</span>
                                <h3><a href="#">Financial Solutions</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="project-wrapper">
                        <div className="project-img">
                            <a href="#"><img src="assets/img/project/02.jpg" alt="" /></a>
                            <div className="project-text">
                                <span>business strategy</span>
                                <h3><a href="#">Financial Solutions</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="project-wrapper">
                        <div className="project-img">
                            <a href="#"><img src="assets/img/project/03.jpg" alt="" /></a>
                            <div className="project-text">
                                <span>business strategy</span>
                                <h3><a href="#">Financial Solutions</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="project-wrapper">
                        <div className="project-img">
                            <a href="#"><img src="assets/img/project/01.jpg" alt="" /></a>
                            <div className="project-text">
                                <span>business strategy</span>
                                <h3><a href="#">Financial Solutions</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="project-wrapper">
                        <div className="project-img">
                            <a href="#"><img src="assets/img/project/02.jpg" alt="" /></a>
                            <div className="project-text">
                                <span>business strategy</span>
                                <h3><a href="#">Financial Solutions</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="project-wrapper">
                        <div className="project-img">
                            <a href="#"><img src="assets/img/project/03.jpg" alt="" /></a>
                            <div className="project-text">
                                <span>business strategy</span>
                                <h3><a href="#">Financial Solutions</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </React.Fragment>

    );
}
export default CarouselDefault;