import React from 'react';
import Slider from "react-slick";
import SectionTitle from '../../components/Common/SectionTitle';
import SingleTestimonial from '../../components/Testimonial/SingleTestimonial';


import quote from '../../assets/img/testimonial/main-home/test-2.png';
import author1 from '../../assets/img/testimonial/style5/1.png';
import author2 from '../../assets/img/testimonial/style5/2.png';
import author3 from '../../assets/img/testimonial/style5/3.png';

const Testimonial = () => {

    const testimonialSettings = {
        dots: true,
        centerMode: false,
        infinite: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            }
        ]
    };

    return (
        <React.Fragment>
            <div className="rs-testimonial main-home pt-100 pb-100 md-pt-70 md-pb-70">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title3 mb-50 md-mb-30 text-center"
                        subtitleClass="sub-title primary"
                        subtitle="Testimonial"
                        titleClass="title white-color"
                        title="What Students Saying"
                        effectClass="heading-line"
                    />
                    <Slider {...testimonialSettings}>
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={author1}
                            Title="David Warner"
                            Designation="Web Developer"
                            Description="Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That’s how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you’ll definitely get the 5-star treatment from the Lorem Ipsum Company."
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={author2}
                            Title="Mitchel Starc"
                            Designation="App Developer"
                            Description="Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That’s how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you’ll definitely get the 5-star treatment from the Lorem Ipsum Company."
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={author3}
                            Title="Steve Smith"
                            Designation="Web Designer"
                            Description="Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That’s how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you’ll definitely get the 5-star treatment from the Lorem Ipsum Company."
                        />
                    </Slider>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Testimonial