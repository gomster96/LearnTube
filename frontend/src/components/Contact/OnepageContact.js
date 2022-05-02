import React from 'react';
import SectionTitle from '../Common/SectionTitle';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const OnepageContactPart = (props) => {
    const { contactSectionClass, contactSectionTitleClass, contactSubTitleClass, contactBoxClass, submitBtnClass } = props;
    return (
        <div id="rs-contact" className={contactSectionClass ? contactSectionClass : 'rs-contact pt-120 md-pt-80'}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 md-mb-60">
                        <ContactInfo 
                            contactBoxClass = {contactBoxClass}
                        />
                    </div>
                    <div className="col-lg-8 pl-70 lg-pl-50 md-pl-14">
                        <div className="contact-widget onepage-style">
                            <SectionTitle
                                sectionClass="sec-title2 mb-40"
                                subtitleClass={contactSubTitleClass ? contactSubTitleClass : 'sub-text contact mb-14'}
                                subtitle="Get In Touch"
                                titleClass={contactSectionTitleClass ? contactSectionTitleClass : 'title testi-title'}
                                title="Fill The Form Below"
                            />

                            {/* Contact Form */}
                            <ContactForm 
                                submitBtnClass= {submitBtnClass}
                            />
                            {/* Contact Form */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="map-canvas pt-120 md-pt-80">
                <iframe src="https://maps.google.com/maps?q=rstheme&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
            </div>
        </div>
    );
}

export default OnepageContactPart;