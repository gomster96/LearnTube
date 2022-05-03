import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import AOS from 'aos';
import Tilty from 'react-tilty';
import SectionTitle from '../../components/Common/SectionTitle';

// About Images
import shapeImg1 from '../../assets/img/about/icon-shape.png';
import shapeImg2 from '../../assets/img/about/dot-shape.png';
import videoImage from '../../assets/img/about/about-video-bg2.png';

const AboutWork = () => {

    useEffect(() => {
        AOS.init();
    })

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div className="rs-about video-style pt-120 pb-100 md-pt-90 md-pb-70">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='YLN1Argi7ik' onClose={() => { openModal(); }} />
            <div className="container relative">
                <div className="icon-shape">
                    <Tilty perspective={1200} reverse={true}>
                        <img
                            className="shape"
                            src={shapeImg1}
                            alt="shape1"
                        />
                    </Tilty>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="img-part media-icon">
                            <img
                                className="video-img"
                                src={videoImage}
                                alt="Video Image"
                            />
                            <a className="popup-videos" onClick={() => { openModal(); }}><i className="fa fa-play"></i></a>
                            <div className="dot-shape">
                                <Tilty>
                                    <img
                                        className=""
                                        src={shapeImg2}
                                        alt="shape1"
                                    />
                                </Tilty>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content gray-bg">
                            {/* Section Title Start */}
                            <SectionTitle
                                sectionClass="sec-title mb-46 md-mb-30"
                                subtitleClass="sub-title primary"
                                subtitle="How We Works"
                                titleClass="title"
                                title={<>Develope Your Skills <br /> Shine Your Life</>}
                                descClass="desc pr-36"
                                description="Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed eius to mod tempors incididunt ut labore et dolore magna this aliqua  enims ad minim."
                                animateName="fade-up"
                                animateDuration="1200"
                            />
                            {/* Section Title End */}
                            <div className="btn-part zIndex1" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
                                <Link className="readon2" to="/about">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutWork;