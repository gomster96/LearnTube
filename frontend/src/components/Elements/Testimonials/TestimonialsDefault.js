import React from 'react';
import Slider from "react-slick";

const TestimonialDefault = () => {

    function TestiNextArrow(props) {
        const { className, onClick } = props;
        return (
            <button type='button' onClick={onClick} className={className}><i><FontAwesomeIcon icon={['fas', 'chevron-right']} /></i></button>
        );
    }

    function TestiPrevArrow(props) {
        const { className, onClick } = props;
        return (
            <button type='button' onClick={onClick} className={className}> <i><FontAwesomeIcon icon={['fas', 'chevron-left']} /></i></button>
        );
    }

    const testimonialSettings = {
        className: "testimonial-active",
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: true,
        nextArrow: <TestiNextArrow />,
        prevArrow: <TestiPrevArrow />,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <div className="testimonial-area">
            <Slider {...testimonialSettings}>
                <div className="testimonial-wrapper col">
                    <div className="testimonial-text">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantie totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi artectbeatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sipernatur aut
                                        odit aut fugit sed quia consequunture</p>
                        <h4>Kane Willumsons</h4>
                        <span>SR Developer</span>
                    </div>
                </div>
                <div className="testimonial-wrapper col">
                    <div className="testimonial-text">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantie totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi artectbeatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sipernatur aut
                                        odit aut fugit sed quia consequunture</p>
                        <h4>Kane Willumsons</h4>
                        <span>SR Developer</span>
                    </div>
                </div>
                <div className="testimonial-wrapper col">
                    <div className="testimonial-text">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantie totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi artectbeatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sipernatur aut
                                        odit aut fugit sed quia consequunture</p>
                        <h4>Kane Willumsons</h4>
                        <span>SR Developer</span>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default TestimonialDefault;