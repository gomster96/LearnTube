import React, { Component } from 'react';
import SectionTitle from '../../components/Common/SectionTitle';
import SinglePricing from '../../components/Pricing/SinglePricing';

// Pricing Image
import silverImg from '../../assets/img/pricing/1.png';
import goldImg from '../../assets/img/pricing/2.png';
import platinumImg from '../../assets/img/pricing/3.png';

const Pricing = () => {
    return (
        <main className="rs-pricing white-bg pt-252 pb-144 md-pt-222 md-pb-54">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title2 text-center mb-44"
                    subtitleClass="sub-text"
                    subtitle="Pricing"
                    titleClass="title testi-title"
                    title="Our Pricing Plan"
                    effectClass="heading-line"
                />
                <div className="row">
                    <div className="col-lg-4 md-mb-74">
                        <SinglePricing
                            itemClass="pricing-table"
                            badge="Silver"
                            pricingImage={silverImg}
                            currency="$"
                            price="29.99"
                            period="Monthly Package"
                            buttonClass="readon buy-now"
                            buttonText="Buy Now"
                            buttonURL="#"

                            // Feature List (1 to 4 item)
                            featureText1="Powerful Admin Panel"
                            ability1="yes"

                            featureText2="1 Native Android App"
                            ability2="yes"

                            featureText3="Multi-Language Support"
                            ability3="no"

                            featureText4="Support via E-mail and Phone"
                            ability4="no"
                        />
                    </div>

                    <div className="col-lg-4 md-mb-74">
                        <SinglePricing
                            itemClass="pricing-table primary-bg"
                            badge="Gold"
                            pricingImage={goldImg}
                            currency="$"
                            price="39.99"
                            period="Monthly Package"
                            buttonClass="readon buy-now"
                            buttonText="Buy Now"
                            buttonURL="#"

                            // Feature List (1 to 4 item)
                            featureText1="Powerful Admin Panel"
                            ability1="yes"

                            featureText2="1 Native Android App"
                            ability2="yes"

                            featureText3="Multi-Language Support"
                            ability3="yes"

                            featureText4="Support via E-mail and Phone"
                            ability4="no"
                        />
                    </div>

                    <div className="col-lg-4 md-mb-74">
                        <SinglePricing
                            itemClass="pricing-table"
                            badge="Platinum"
                            pricingImage={platinumImg}
                            currency="$"
                            price="79.99"
                            period="Monthly Package"
                            buttonClass="readon buy-now"
                            buttonText="Buy Now"
                            buttonURL="#"

                            // Feature List (1 to 4 item)
                            featureText1="Powerful Admin Panel"
                            ability1="yes"

                            featureText2="1 Native Android App"
                            ability2="yes"

                            featureText3="Multi-Language Support"
                            ability3="yes"

                            featureText4="Support via E-mail and Phone"
                            ability4="yes"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Pricing;