import React from 'react';
import Slider from "react-slick";
import SectionTitle from '../Common/SectionTitle';
import SingleTestimonial from './SingleTestimonial';


import quote from '../../assets/img/testimonial/quote.png';
import author1 from '../../assets/img/testimonial/1.jpg';
import author2 from '../../assets/img/testimonial/2.jpg';
import author3 from '../../assets/img/testimonial/3.jpg';
import author4 from '../../assets/img/testimonial/4.jpg';
import author5 from '../../assets/img/testimonial/5.jpg';

const Testimonial = () => {

    const testimonialSettings = {
        dots: true,
        centerMode: false,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            }
        ]
    };

	return(
        <React.Fragment>
            <div className="rs-testimonial main-home gray-bg pt-120 pb-120 md-pt-80 md-pb-80">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title2 text-center mb-45"
                        subtitleClass="sub-text"
                        subtitle="Testimonial"
                        titleClass="title testi-title"
                        title=" What Saying Our Customers"
                        effectClass="heading-line"
                    />
                    <Slider {...testimonialSettings}>
                        <SingleTestimonial 
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={author1}
                            Title="David Warner" 
                            Designation="Web Developer" 
                            Description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt Neque porro quisquam est, qui dolorem
                            ipsum..."
                        />
                        <SingleTestimonial 
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={author2}
                            Title="Mitchel Starc" 
                            Designation="App Developer" 
                            Description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt Neque porro quisquam est, qui dolorem
                            ipsum..."
                        />
                        <SingleTestimonial 
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={author3}
                            Title="Steve Smith" 
                            Designation="Web Designer" 
                            Description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt Neque porro quisquam est, qui dolorem
                            ipsum..."
                        />
                        <SingleTestimonial 
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={author4}
                            Title="Bret Lee" 
                            Designation="Client Manager" 
                            Description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt Neque porro quisquam est, qui dolorem
                            ipsum..."
                        />
                        <SingleTestimonial 
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={author5}
                            Title="Shan Warne" 
                            Designation="Digital Marketar" 
                            Description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt Neque porro quisquam est, qui dolorem
                            ipsum..."
                        />
                    </Slider>
                </div>
            </div>
        </React.Fragment>
	)
}

export default Testimonial