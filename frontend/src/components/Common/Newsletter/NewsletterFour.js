import React from 'react';
import SubscribeForm from '../../Elements/Subscribe/SubscribeForm';
import SectionTitle from '../SectionTitle';

import bgImg from '../../../assets/img/bg/home7/bg.png';

const bgStyle = {
    backgroundImage:`url(${bgImg})`,
    'background-size': 'cover',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
   ' border-radius': '5px',
}

const NewsletterFour = (props) => {
    const { sectionClass, wrapperClass, titleClass, title, bottomSubTitleClass, bottomSubTitle } = props;

    return (
        <div className={sectionClass ? sectionClass : 'rs-newsletter style2'} style={bgStyle}>
            <div className="container">
                <div className={wrapperClass ? wrapperClass : 'newsletter-wrap'}>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className='content-part md-mb-30'>                            
                                <SectionTitle
                                    sectionClass="sec-title"
                                    titleClass={titleClass ? titleClass : 'title mb-10 white-color'}
                                    title={title ? title : 'Subscribe To Our Newsletter!'}
                                    bottomSubTitleClass={bottomSubTitleClass ? bottomSubTitleClass : 'sub-title white-color'}
                                    bottomSubTitle={bottomSubTitle ? bottomSubTitle : 'Subscribe Newsletter '}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
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

export default NewsletterFour;