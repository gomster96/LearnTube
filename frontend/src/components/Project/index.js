import React from 'react';
import Slider from "react-slick";
import SectionTitle from '../Common/SectionTitle';
import SingleProject from './SingleProject';


import projectImg1 from '../../assets/img/project/1.jpg';
import projectImg2 from '../../assets/img/project/2.jpg';
import projectImg3 from '../../assets/img/project/3.jpg';
import projectImg4 from '../../assets/img/project/4.jpg';
import projectImg5 from '../../assets/img/project/5.jpg';
import projectImg6 from '../../assets/img/project/6.jpg';

function Project() {

    const sliderSettings = {
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    };

	return(
        <React.Fragment>
            <div id="rs-portfolio" className="rs-project style1 pt-110 md-pt-80 mb--150">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title2 text-center mb-44 md-mb-30"
                        subtitleClass="sub-text white-color"
                        subtitle="Project"
                        titleClass="title white-color"
                        title="We Are Offering All Kinds of IT Solutions Services"
                    />
                    <Slider {...sliderSettings}>
                        <SingleProject 
                            itemClass="project-item"
                            projectImage={projectImg1} 
                            Title="Innovative Interfaces" 
                            Category="IT Technology" 
                            projectURL="innovative-interfaces" 
                            categoryURL="it-technology"
                        />
                        <SingleProject 
                            itemClass="project-item"
                            projectImage={projectImg2} 
                            Title="Project Design" 
                            Category="IT Technology" 
                            projectURL="project-design" 
                            categoryURL="it-technology"
                        />
                        <SingleProject 
                            itemClass="project-item"
                            projectImage={projectImg3} 
                            Title="Product Engineering" 
                            Category="IT Technology" 
                            projectURL="product-engineering" 
                            categoryURL="it-technology"
                        />
                        <SingleProject 
                            itemClass="project-item"
                            projectImage={projectImg4} 
                            Title="Growth Strategies" 
                            Category="IT Technology" 
                            projectURL="growth-strategies" 
                            categoryURL="it-technology"
                        />
                        <SingleProject 
                            itemClass="project-item"
                            projectImage={projectImg5} 
                            Title="Innovative Interfaces" 
                            Category="IT Technology" 
                            projectURL="innovative-interfaces" 
                            categoryURL="it-technology"
                        />
                        <SingleProject 
                            itemClass="project-item"
                            projectImage={projectImg6} 
                            Title="Platform Integration" 
                            Category="IT Technology" 
                            projectURL="platform-integration" 
                            categoryURL="it-technology"
                        />
                    </Slider>
                </div>
            </div>
        </React.Fragment>
	)
}

export default Project