import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/Common/SectionTitle';

const Cta = () => {

    return (
        <div className="rs-cta main-home">
            <div className="partition-bg-wrap">
                <div className="container">
                    <div className="row">
                        <div className="offset-lg-6 col-lg-6 pl-70 md-pl-14">
                            <SectionTitle
                                sectionClass="sec-title3 mb-40"
                                titleClass="title white-color mb-16"
                                title="20% Offer Running - Join Today"
                                descClass="desc white-color pr-100 md-pr-0"
                                description="We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of your moment, so blinded by desire those who fail in their duty through weakness. These cases are perfectly simple and easy every pleasure is to be welcomed and every pain avoided."
                            />
                            <div className="btn-part">
                                <Link className="readon orange-btn transparent" to="/register">Register Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cta;