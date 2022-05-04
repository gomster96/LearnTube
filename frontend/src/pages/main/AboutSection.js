import React from "react";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import Tilty from 'react-tilty';
import SectionTitle from '../../components/Common/SectionTitle';

import animateBall from '../../assets/img/about/image-center-circle.png';
import mainImage from '../../assets/img/about/about3.png';

function About() {

    useEffect(() => {
        AOS.init();
    })

    return (
        <div id="rs-about" className="rs-about style1 pt-100 pb-100 md-pt-70 md-pb-70">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 pl-60 order-last md-pl-14 md-mb-60">
                        <div className="img-part">
                            <Tilty perspective={1200} reverse={true}>
                                <img
                                    src={mainImage}
                                    alt="Main Image"
                                />
                                <img
                                    className="shape top-center rotateme"
                                    src={animateBall}
                                    alt="Rotating Ball"
                                />
                            </Tilty>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        {/* Section Title Start */}
                        <SectionTitle
                            sectionClass="sec-title mb-26"
                            subtitleClass="sub-title primary"
                            subtitle="About Us"
                            titleClass="title"
                            title={<>Welcome to LearnTube</>}
                            descClass="desc pr-36"
                            description="learnTube란 뭘까? 어떻게 쓰는 거지?"
                            animateName="fade-up"
                            animateDuration="1200"
                        />
                        {/* Section Title End */}
                        <div className="btn-part" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
                            <Link className="readon2" to="/about">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;