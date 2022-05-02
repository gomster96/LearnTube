import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import ContactForm from '../../components/Contact/ContactForm';
import SectionTitle from '../../components/Common/SectionTitle';

const VideoStyleOne = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div className="rs-video-wrap md-pt-80">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='YLN1Argi7ik' onClose={() => { openModal(); }} />
            <div className="container">
                <div className="content-wrap">
                    <div className="row margin-0 y-middle">
                        <div className="col-lg-6 padding-0">
                            <div className="video-item">
                                <div className="video-icon">
                                    <a className="popup-video" onClick={() => { openModal(); }}><i className="fa fa-play"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 padding-0">
                            <div className="rs-requset">
                                <SectionTitle
                                    sectionClass="sec-title2 mb-34"
                                    subtitleClass="sub-text style-bg"
                                    subtitle="Query"
                                    titleClass="title testi-title"
                                    title="Request Free Consultation"
                                />
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default VideoStyleOne;