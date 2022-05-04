import React, { Component } from 'react';
import SinglePricing from './SinglePricing';
import SectionTitle from '../../components/Common/SectionTitle';

// Pricing Image
import silverImg from '../../assets/img/pricing/1.png';
import goldImg from '../../assets/img/pricing/2.png';
import platinumImg from '../../assets/img/pricing/3.png';

const PricingMain = () => {
    return (
        <div className="rs-pricing style2 gray-color pt-120 pb-144 md-pt-80 md-pb-80">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title2 text-center mb-44"
                    subtitleClass="sub-text style-bg"
                    subtitle="Pricing"
                    titleClass="title title2"
                    title="Our Pricing Plan"
                />
                <div className="row">
                    <div className="col-lg-4">
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

                    <div className="col-lg-4 md-pb-30 md-pt-30">
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

                    <div className="col-lg-4">
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
        </div>
    );

}

export default PricingMain;