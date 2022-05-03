import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import ContactForm from '../../components/Contact/ContactForm';


const VideoStyleThree = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div className="rs-video-wrap style2 inner pb-120 md-pb-80">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='YLN1Argi7ik' onClose={() => { openModal(); }} />
            <div className="container">
                <div className="content-wrap">
                    <div className="row y-middle no-gutter">
                        <div className="col-lg-6">
                            <div className="video-item">
                                <div className="video-icon">
                                    <a className="popup-video" onClick={() => { openModal(); }}><i className="fa fa-play"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="rs-requset">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default VideoStyleThree;