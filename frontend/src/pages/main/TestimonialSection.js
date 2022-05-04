import React from 'react';
import Slider from "react-slick";
import Tilty from 'react-tilty';
import SectionTitle from '../../components/Common/SectionTitle';
import SingleTestimonial4 from '../../components/Testimonial/SingleTestimonial4';


import animBall from '../../assets/img/shape/circle-shape.png';
import author1 from '../../assets/img/testimonial/style4/1.png';
import author2 from '../../assets/img/testimonial/style4/2.png';
import author3 from '../../assets/img/testimonial/style4/3.png';
import author4 from '../../assets/img/testimonial/style4/4.png';

const Testimonial = () => {

    const testimonialSettings = {
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };


    return (
        <React.Fragment>
            <div className="rs-testimonial style4 pt-100 pb-100 md-pt-70 md-pb-70">
                <div className="container relative">
                    <div className="left-top-shape">
                        <Tilty perspective="800" reverse={true}>
                            <img
                                className="rotateme"
                                src={animBall}
                                alt=""
                            />
                        </Tilty>
                    </div>
                    <SectionTitle
                        sectionClass="sec-title mb-60 md-mb-30 text-center"
                        subtitleClass="sub-title primary"
                        subtitle="Student Reviews"
                        titleClass="title mb-0"
                        title="What Our Students Says"
                    />
                    <Slider {...testimonialSettings}>
                        <SingleTestimonial4
                            itemClass="testi-item"
                            authorImg={author1}
                            name="Mahadi Monsura"
                            description="Education is the passport to the future for tomorrow belongs to those who pre pare for it today.Sed ut perspiciatis unde omnis  iste natus error sit vo luptatem accusantium do loremque laudantium,"
                            designation="Student"
                        />
                        <SingleTestimonial4
                            itemClass="testi-item"
                            authorImg={author2}
                            name="William Stone"
                            description="Education is the passport to the future for tomorrow belongs to those who pre pare for it today.Sed ut perspiciatis unde omnis  iste natus error sit vo luptatem accusantium do loremque laudantium,"
                            designation="Parent"
                        />
                        <SingleTestimonial4
                            itemClass="testi-item"
                            authorImg={author3}
                            name="Lara Rose"
                            description="Education is the passport to the future for tomorrow belongs to those who pre pare for it today.Sed ut perspiciatis unde omnis  iste natus error sit vo luptatem accusantium do loremque laudantium,"
                            designation="Student"
                        />
                        <SingleTestimonial4
                            itemClass="testi-item"
                            authorImg={author4}
                            name="Astone Martine"
                            description="Education is the passport to the future for tomorrow belongs to those who pre pare for it today.Sed ut perspiciatis unde omnis  iste natus error sit vo luptatem accusantium do loremque laudantium,"
                            designation="Visitor"
                        />
                    </Slider>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Testimonial