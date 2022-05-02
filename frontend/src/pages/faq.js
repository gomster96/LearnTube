import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import Newsletter from '../components/Common/Newsletter';
import ScrollToTop from '../components/Common/ScrollTop';
import OffWrap from '../components/Layout/Header/OffWrap';
import SiteBreadcrumb from '../components/Common/Breadcumb';
import SearchModal from '../components/Layout/Header/SearchModal';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';

// Image
import favIcon from '../assets/img/fav-orange.png';
import Logo from '../assets/img/logo/dark-logo.png';
import footerLogo from '../assets/img/logo/lite-logo.png';

import bannerbg from '../assets/img/breadcrumbs/inner12.jpg';

const Faq = () => {

    return (
        <React.Fragment>
            <Helmet>
                <link rel="icon" href={favIcon} />
            </Helmet>
            <OffWrap />
            <Header
                parentMenu='pages'
                secondParentMenu='others'
                headerNormalLogo={Logo}
                headerStickyLogo={Logo}
                CanvasLogo={Logo}
                mobileNormalLogo={Logo}
                CanvasClass="right_menu_togle hidden-md"
                headerClass="full-width-header header-style1 home8-style4"
                TopBar='enable'
                TopBarClass="topbar-area home8-topbar"
                emailAddress='support@website.com'
                Location='374 William S Canning Blvd, MA 2721, USA '
            />

            {/* breadcrumb-area-start */}
            <SiteBreadcrumb
                pageTitle="Faq"
                pageName="Faq"
                breadcrumbsImg={bannerbg}
            />
            {/* breadcrumb-area-End */}

            {/* Faq Part Start */}
            <div className="rs-faq-part style1 pt-90 pb-100 md-pt-70 md-pb-80">
                <div className="container">
                    <div className="main-part innerpage">
                        <div className="faq-content mb-50 md-mb-30">
                            <div className="title mb-30 md-mb-14">
                                <h3 className="text-part">Kindergarten</h3>
                            </div>
                            <Accordion className="accordion-style1" preExpanded={'a'}>
                                <AccordionItem className="accordion-item" uuid="a">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                            What do you mean by item and end product?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                        Aenean massa. Cum sociis natoque penatibus et magnis dis partu rient to montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellen of the tesque services Donec quam felis, ultricies nec, pellentesque eu, pretium quis,pede justo, of fringilla vel, aliquet nec, ultricies nec, pellen of the tesque services Donec quam felis, ultricies nec, pellentesque eu
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="b">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                            What does non-exclusive mean?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                        Aenean massa. Cum sociis natoque penatibus et magnis dis partu rient to montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellen of the tesque services Donec quam felis, ultricies nec, pellentesque eu, pretium quis,pede justo, of fringilla vel, aliquet nec, ultricies nec, pellen of the tesque services Donec quam felis, ultricies nec, pellentesque eu
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="c">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                            What are some examples of permitted end products?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                        Aenean massa. Cum sociis natoque penatibus et magnis dis partu rient to montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellen of the tesque services Donec quam felis, ultricies nec, pellentesque eu, pretium quis,pede justo, of fringilla vel, aliquet nec, ultricies nec, pellen of the tesque services Donec quam felis, ultricies nec, pellentesque eu
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="d">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                            What is distance education?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                        Aenean massa. Cum sociis natoque penatibus et magnis dis partu rient to montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellen of the tesque services Donec quam felis, ultricies nec, pellentesque eu, pretium quis,pede justo, of fringilla vel, aliquet nec, ultricies nec, pellen of the tesque services Donec quam felis, ultricies nec, pellentesque eu
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <div className="faq-content mb-50 md-mb-30">
                            <div className="title mb-30 md-mb-14">
                                <h3 className="text-part">Primary School</h3>
                            </div>
                            <Accordion className="accordion-style1" preExpanded={'a'}>
                                <AccordionItem className="accordion-item" uuid="a">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                            What if I have an emergency?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                        Hematology, also spelled haematology, is the branch of medicine concerned with the study of the cause, prognosis, treatment, and prevention of diseases related to blood. It involves treating diseases that affect the production of blood and its components, such as blood cells, hemoglobin, blood proteins, bone marrow, platelets, blood vessels, spleen, and the mechanism of coagulation.
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="b">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                            What if my regular doctor is unavailable?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                        Hematology, also spelled haematology, is the branch of medicine concerned with the study of the cause, prognosis, treatment, and prevention of diseases related to blood. It involves treating diseases that affect the production of blood and its components, such as blood cells, hemoglobin, blood proteins, bone marrow, platelets, blood vessels, spleen, and the mechanism of coagulation.
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="c">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                            What is the transfer application process?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                        Hematology, also spelled haematology, is the branch of medicine concerned with the study of the cause, prognosis, treatment, and prevention of diseases related to blood. It involves treating diseases that affect the production of blood and its components, such as blood cells, hemoglobin, blood proteins, bone marrow, platelets, blood vessels, spleen, and the mechanism of coagulation.
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="d">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                            What should I bring to my first appointment?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                        Hematology, also spelled haematology, is the branch of medicine concerned with the study of the cause, prognosis, treatment, and prevention of diseases related to blood. It involves treating diseases that affect the production of blood and its components, such as blood cells, hemoglobin, blood proteins, bone marrow, platelets, blood vessels, spleen, and the mechanism of coagulation.
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <div className="faq-content mb-50 md-mb-30">
                            <div className="title mb-30 md-mb-14">
                                <h3 className="text-part">High School</h3>
                            </div>
                            <Accordion className="accordion-style1" preExpanded={'a'}>
                                <AccordionItem className="accordion-item" uuid="a">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                            How does the normal heart work?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                        The normal heart is composed of four chambers. The two upper chambers (called atriums or atria) are reservoirs which collect blood as it flows back to the heart. From the atriums, blood flows into the lower two chambers (called ventricles) which pump blood, blood flows into the lower two chambers (called ventricles) which pump blood with each heart beat, into the main arteries.
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="b">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                            What are the heart valves?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                        The normal heart is composed of four chambers. The two upper chambers (called atriums or atria) are reservoirs which collect blood as it flows back to the heart. From the atriums, blood flows into the lower two chambers (called ventricles) which pump blood, with each heart beat, blood flows into the lower two chambers (called ventricles) which pump blood into the main arteries.
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="c">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                            Can a child acquire a heart problem?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                        The normal heart is composed of four chambers. The two upper chambers (called atriums or atria) are reservoirs which collect blood as it flows back to the heart. From the atriums, blood flows into the lower two chambers (called ventricles) which pump blood, with each heart beat, blood flows into the lower two chambers (called ventricles) which pump blood into the main arteries.
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="d">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                            What is heart education?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                        The normal heart is composed of four chambers. The two upper chambers (called atriums or atria) are reservoirs which collect blood as it flows back to the heart. From the atriums, blood flows into the lower two chambers (called ventricles) which pump blood, blood flows into the lower two chambers (called ventricles) which pump blood with each heart beat, into the main arteries.
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <div className="faq-content">
                            <div className="title mb-30 md-mb-14">
                                <h3 className="text-part">College/University</h3>
                            </div>
                            <Accordion className="accordion-style1" preExpanded={'a'}>
                                <AccordionItem className="accordion-item" uuid="a">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                            What are the requirements ?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                        The normal heart is composed of four chambers. The two upper chambers (called atriums or atria) are reservoirs which collect blood as it flows back to the heart. From the atriums, blood flows into the lower two chambers (called ventricles) which pump blood, with each heart beat, blood flows into the lower two chambers (called ventricles) which pump blood into the main arteries.
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="b">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                            Does Educavo offer free courses?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                        The normal heart is composed of four chambers. The two upper chambers (called atriums or atria) are reservoirs which collect blood as it flows back to the heart. From the atriums, blood flows into the lower two chambers (called ventricles) which pump blood, with each heart beat, blood flows into the lower two chambers (called ventricles) which pump blood into the main arteries.
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="c">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                            What is the transfer application process?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                        The normal heart is composed of four chambers. The two upper chambers (called atriums or atria) are reservoirs which collect blood as it flows back to the heart. From the atriums, blood flows into the lower two chambers (called ventricles) which pump blood, with each heart beat, blood flows into the lower two chambers (called ventricles) which pump blood into the main arteries.
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="d">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                            What is distance education?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                        The normal heart is composed of four chambers. The two upper chambers (called atriums or atria) are reservoirs which collect blood as it flows back to the heart. From the atriums, blood flows into the lower two chambers (called ventricles) which pump blood, with each heart beat, blood flows into the lower two chambers (called ventricles) which pump blood into the main arteries.
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
            {/* Faq Part End */}

            <Newsletter
                sectionClass="rs-newsletter style1 orange-color mb--90 sm-mb-0 sm-pb-80"
                titleClass="title mb-0 white-color"
            />

            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={footerLogo}
            />

            {/* scrolltop-start */}
            <ScrollToTop
                scrollClassName="scrollup orange-color"
            />
            {/* scrolltop-end */}

            <SearchModal />
        </React.Fragment>

    );
}


export default Faq;