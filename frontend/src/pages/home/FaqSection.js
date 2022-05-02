import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';

const FaqSection = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div className="rs-faq-part style1 orange-style pt-100 pb-100 md-pt-70 md-pb-70">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='YLN1Argi7ik' onClose={() => { openModal(); }} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 padding-0">
                        <div className="main-part">
                            <div className="title mb-40 md-mb-14">
                                <h2 className="text-part">Frequently Asked Questions</h2>
                            </div>
                            <div className="faq-content">
                                <Accordion className="accordion-style1" preExpanded={'a'}>
                                    <AccordionItem className="accordion-item" uuid="a">
                                        <AccordionItemHeading className="card-header">
                                            <AccordionItemButton className="card-link">
                                                What are the requirements ?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem className="accordion-item" uuid="b">
                                        <AccordionItemHeading className="card-header">
                                            <AccordionItemButton className="card-link">
                                                Does Educavo offer free courses?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem className="accordion-item" uuid="c">
                                        <AccordionItemHeading className="card-header">
                                            <AccordionItemButton className="card-link">
                                                What is the transfer application process?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem className="accordion-item" uuid="d">
                                        <AccordionItemHeading className="card-header">
                                            <AccordionItemButton className="card-link">
                                                What is distance education?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 padding-0">
                        <div className="img-part media-icon orange-color">
                            <a href="#" className="popup-videos" onClick={() => { openModal(); }}><i className="fa fa-play"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FaqSection;