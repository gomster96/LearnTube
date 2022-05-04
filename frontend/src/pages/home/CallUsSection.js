import React  from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/Common/SectionTitle';
import CounterDefault from '../../components/Elements/Counter/CounterDefault';

const CallUs = () => {

    return (
        <div className="rs-call-us relative pt-120 md-pt-70 md-pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 hidden-md">
                        <div className="image-part">
                            <img src="assets/img/about/contact-here.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 pb-120 md-pb-80">
                        <div className="rs-contact-box text-center">
                            <div className="address-item mb-26">
                                <div className="address-icon">
                                    <i className="fa fa-phone"></i>
                                </div>
                            </div>
                            <SectionTitle
                                sectionClass="sec-title3 text-center"
                                subtitleClass="sub-text"
                                subtitle="CALL US 24/7"
                                titleClass="title"
                                title="(+123) 456-9989"
                                descClass="desc"
                                description="Have any idea or project for in your mind call us or schedule a appointment. Our representative will reply you shortly."
                            />
                            <div className="btn-part mt-40">
                                <Link className="readon lets-talk" to="/contact">Let's Talk</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* counter area start */}
            <CounterDefault />
            {/* counter area end */}
        </div>
    );
}

export default CallUs;