import React from 'react';
import SubscribeForm from '../../Elements/Subscribe/SubscribeForm';
import SectionTitle from '../SectionTitle';

import bgImg from '../../../assets/img/bg/newsletter-bg.jpg';

const bgStyle = {
    backgroundImage:`url(${bgImg})`
}

const NewsletterTwo = (props) => {
    const { sectionClass, wrapperClass, subtitleClass, titleClass, title, subtitle } = props;

    return (
        <div className={sectionClass ? sectionClass : 'rs-newsletter style1 mb--124 sm-mb-0 sm-pb-70'}>
            <div className="container">
                <div className={wrapperClass ? wrapperClass : 'newsletter-wrap'} style={bgStyle}>
                    <div className="row y-middle">
                        <div className="col-lg-6 col-md-12 md-mb-30">
                            <SectionTitle
                                sectionClass="sec-title"
                                subtitleClass={subtitleClass ? subtitleClass : 'sub-title white-color'}
                                subtitle={subtitle ? subtitle : 'Newsletter'}
                                titleClass={titleClass ? titleClass : 'title mb-0 white-color'}
                                title={title ? title : 'Subscribe Us to join Our Community'}
                            />
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="newsletter-form">
                                <SubscribeForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsletterTwo;