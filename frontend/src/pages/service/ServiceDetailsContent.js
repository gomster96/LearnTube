import React from 'react';
import { Link } from 'react-router-dom';
import Brand from '../../components/Common/Brand'
import CounterStyleThree from '../../components/Elements/Counter/CounterStyleThree';
import SectionTitle from '../../components/Common/SectionTitle';
import SingleService from '../../components/Service/SingleService';
import SinglePricing from '../../components/Pricing/SinglePricing';
import ProgressBar from '../../components/Elements/Progress/ProgressBar';
import ScrollToTop from '../../components/Common/ScrollTop';

// Service Image
import serviceIcon1 from '../../assets/img/service/style7/1.png';
import serviceIcon2 from '../../assets/img/service/style7/2.png';
import serviceIcon3 from '../../assets/img/service/style7/3.png';

import aboutImg1 from '../../assets/img/about/1.jpg';

// Pricing Image
import silverImg from '../../assets/img/pricing/1.png';
import goldImg from '../../assets/img/pricing/2.png';
import platinumImg from '../../assets/img/pricing/3.png';

// Choose Us Image
import whyChooseUsImg from '../../assets/img/choose/3.png';

const ServiceDetailsContent = () => {
    return (
        <React.Fragment>
            {/* About Section Start */}
            <div className="rs-about pt-120 pb-120 md-pt-80 md-pb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pr-40 md-pr-14 md-mb-50">
                            {/* Section Title Start */}
                            <SectionTitle
                                sectionClass="sec-title4"
                                subtitleClass="sub-text"
                                subtitle="Software Development"
                                titleClass="title"
                                title="We Help to Implement Your Ideas into Automation"
                                effectClass="heading-line"
                            />
                            <SectionTitle
                                sectionClass="sec-title4"
                                descClass="desc desc-big"
                                description="We donec pulvinar magna id leoersi pellentesque impered dignissim rhoncus euismod euismod eros vitae best consulting & financial services theme . "
                                secondDescClass="desc"
                                secondDescription="Business ipsum dolor sit amet nsectetur cing elit. Suspe ndisse suscipit sagittis leo sit met entum is not estibulum dignity sim posuere cubilia durae. Leo sit met entum cubilia crae. At vero eos accusamus et iusto odio dignissimos provident nam libero tempore, cum soluta."
                            />
                            {/* Section Title End */}
                            <div className="btn-part mt-46">
                                <Link to="/contact">
                                    <a className="readon learn-more">Contact Us</a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="images">
                                <img src={aboutImg1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="rs-services style5 pt-120 md-pt-80">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 md-mb-30">
                                    <SingleService
                                        itemClass="services-item"
                                        serviceImage={serviceIcon1}
                                        Title="Expert Peoples"
                                        Text="At vero eos et accusamus etiusto odio praesentium. "
                                    />
                                </div>
                                <div className="col-lg-4 md-mb-30">
                                    <SingleService
                                        itemClass="services-item"
                                        serviceImage={serviceIcon2}
                                        Title="First Growing Process"
                                        Text="At vero eos et accusamus etiusto odio praesentium. "
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <SingleService
                                        itemClass="services-item"
                                        serviceImage={serviceIcon3}
                                        Title="Creative Ideas"
                                        Text="At vero eos et accusamus etiusto odio praesentium. "
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About Section End */}

            {/* Why Choose US Section Start */}
            <div className="rs-about gray-bg pt-120 pb-120 md-pt-80 md-pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pr-46 md-pr-15 md-mb-50">
                            <div className="choose-img">
                                <img className="main" src={whyChooseUsImg} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/* Section Title Start */}
                            <SectionTitle
                                sectionClass="sec-title mb-30"
                                subtitleClass="sub-text choose"
                                subtitle="Why Choose Us"
                                titleClass="title pb-20"
                                title="We Are Increasing Business Success With Technology "
                                descClass="desc"
                                description="Over 25 years working in IT services developing software applications and mobile apps for clients all over the world."
                            />
                            {/* Section Title End */}
                            <div className="row">
                                <div className="col-lg-10">
                                    {/* Skill Bar Start */}
                                    <div className="rs-skillbar style1 modify1">
                                        <div className="cl-skill-bar">
                                            <ProgressBar
                                                completed={92}
                                                height={7}
                                                boxbg={"#DFEDFE"}
                                                figurebg={"#03228f"}
                                                ProgressBox="skillbar"
                                                ProgressFigure="skillbar-bar"
                                                ProgressCount="skill-bar-percent"
                                                ProgressLabel="skillbar-title"
                                                label="Software Development"
                                                ProgressParent="main-div"
                                            />
                                            <ProgressBar
                                                completed={80}
                                                height={7}
                                                boxbg={"#DFEDFE"}
                                                figurebg={"#03228f"}
                                                ProgressBox="skillbar"
                                                ProgressFigure="skillbar-bar"
                                                ProgressCount="skill-bar-percent"
                                                ProgressLabel="skillbar-title"
                                                label="Cyber Security"
                                                ProgressParent="main-div"
                                            />
                                            <ProgressBar
                                                completed={95}
                                                height={7}
                                                boxbg={"#DFEDFE"}
                                                figurebg={"#03228f"}
                                                ProgressBox="skillbar"
                                                ProgressFigure="skillbar-bar"
                                                ProgressCount="skill-bar-percent"
                                                ProgressLabel="skillbar-title"
                                                label="Artificial Intelligence"
                                                ProgressParent="main-div"
                                            />
                                            <ProgressBar
                                                completed={78}
                                                height={7}
                                                boxbg={"#DFEDFE"}
                                                figurebg={"#03228f"}
                                                ProgressBox="skillbar"
                                                ProgressFigure="skillbar-bar"
                                                ProgressCount="skill-bar-percent"
                                                ProgressLabel="skillbar-title"
                                                label="Web Development"
                                                ProgressParent="main-div"
                                            />
                                        </div>
                                    </div>
                                    {/* Skill Bar End */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Why Choose US Section End */}

            {/* Counter Section Start */}
            <CounterStyleThree />
            {/* Counter Section Start */}

            {/* price table start */}
            <div className="rs-pricing style2 pt-120 pb-144 md-pt-80 md-pb-80">
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
                        <div className="col-lg-4 md-mb-50">
                            <SinglePricing
                                itemClass="pricing-table new-style"
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

                        <div className="col-lg-4 md-mb-50">
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
                                itemClass="pricing-table new-style"
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
            {/* price table end */}

            {/* brand-area-start */}
            <Brand />
            {/* brand-area-end */}

            {/* scrolltop-start */}
            <ScrollToTop />
            {/* scrolltop-end */}
        </React.Fragment>

    );
}

export default ServiceDetailsContent;