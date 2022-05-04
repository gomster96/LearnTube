import { useEffect } from 'react';
import AOS from 'aos';

const SingleTestimonialTwo = (props) => {
    const { itemClass, animateName, animateDelay } = props;

    useEffect(() => {
        AOS.init();
    })

    return (
        <div className={itemClass ? itemClass : 'testi-wrap mb-50'} data-aos={animateName ? animateName : 'fade-up'} data-aos-delay={animateDelay ? animateDelay : ''}>
            <div className="img-part">
                <img
                    src={props.testiImage}
                    alt={props.name}
                />
            </div>
            <div className="content-part pt-12">
                <div className="desc">{props.description}</div>
                <div className="info">
                    <h5 className="name">{props.name}</h5>
                    <div className="designation">{props.designation}</div>
                </div>
            </div>
        </div>
    )
}

export default SingleTestimonialTwo