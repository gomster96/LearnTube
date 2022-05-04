import React from 'react';
import SubscribeForm from '../../Elements/Subscribe/SubscribeForm';
import SectionTitle from '../SectionTitle';

import bgImg from '../../../assets/img/bg/newsletter-bg2.jpg';

const bgStyle = {
    backgroundImage:`url(${bgImg})`
}

const NewsletterThree = (props) => {
    const { sectionClass, wrapperClass, titleClass, title, bottomSubTitleClass, bottomSubTitle } = props;

    return (
        <div className={sectionClass ? sectionClass : 'rs-newsletter style2'} style={bgStyle}>
            <div className="container">
                <div className={wrapperClass ? wrapperClass : 'newsletter-wrap'}>
                    <div className="row y-middle">
                        <div className="col-lg-7 md-mb-30">
                            <SectionTitle
                                sectionClass="sec-title"
                                titleClass={titleClass ? titleClass : 'title white-color'}
                                title={title ? title : 'Subscribe to Our Newsletter!'}
                                bottomSubTitleClass={bottomSubTitleClass ? bottomSubTitleClass : 'sub-title white-color'}
                                bottomSubTitle={bottomSubTitle ? bottomSubTitle : 'Subscribe Newsletter'}
                            />
                        </div>
                        <div className="col-lg-5">
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

export default NewsletterThree;