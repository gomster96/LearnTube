import React from "react";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import SectionTitle from '../../components/Common/SectionTitle';

import bgImage from '../../assets/img/cta/cta-bg.jpg';

const Cta = (props) => {

    const { ctaClass, ctaTitle, ctaDescription, btnText, btnLink } = props;

    useEffect(() => {
        AOS.init();
    })

    return (
        <div className={ctaClass ? ctaClass : 'rs-cta'}>
            <div className="cta-img">
                <img
                    src={bgImage}
                    alt="Bg Image"
                />
            </div>
            <div className="cta-content text-center">
                {/* Section Title Start */}
                <SectionTitle
                    sectionClass="sec-title mb-40 md-mb-20"
                    titleClass="title mb-16 md-mb-10"
                    title={ctaTitle ? ctaTitle : 'Admission Open for 2020'}
                    descClass="desc"
                    description={ctaDescription ? ctaDescription : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eius to mod tempor incididunt ut labore et dolore magna aliqua. Ut enims ad minim veniam. Aenean massa. Cum sociis natoque penatibus et magnis.'}
                    animateName="fade-up"
                    animateDuration="1200"
                />
                {/* Section Title End */}
                <div className="btn-part" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
                    <Link className="readon2" to={btnLink ? btnLink : '/contact'}>{btnText ? btnText : 'Apply Now'}</Link>
                </div>
            </div>
        </div>
    );
}

export default Cta;