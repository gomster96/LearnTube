import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';

const FaqPart = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div className="content">
            <Accordion className="accordion-box" preExpanded={'a'}>
                <AccordionItem className="accordion-item" uuid="a">
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <button>UI/ UX Introduction</button>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="card-body acc-content current">
                        <div className="content">
                            <div className="clearfix">
                                <ModalVideo channel='youtube' isOpen={isOpen} videoId='YLN1Argi7ik' onClose={() => { openModal(); }} />
                                <div className="pull-left">
                                    <Link className="popup-videos play-icon" onClick={() => { openModal(); }}><i className="fa fa-play"></i>What is UI/ UX Design?</Link>
                                </div>
                                <div className="pull-right">
                                    <div className="minutes">35 Minutes</div>
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="clearfix">
                                <ModalVideo channel='youtube' isOpen={isOpen} videoId='YLN1Argi7ik' onClose={() => { openModal(); }} />
                                <div className="pull-left">
                                    <Link className="popup-videos play-icon" onClick={() => { openModal(); }}><i className="fa fa-play"></i>What is UI/ UX Design?</Link>
                                </div>
                                <div className="pull-right">
                                    <div className="minutes">35 Minutes</div>
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="clearfix">
                                <ModalVideo channel='youtube' isOpen={isOpen} videoId='YLN1Argi7ik' onClose={() => { openModal(); }} />
                                <div className="pull-left">
                                    <Link className="popup-videos play-icon" onClick={() => { openModal(); }}><i className="fa fa-play"></i>What is UI/ UX Design?</Link>
                                </div>
                                <div className="pull-right">
                                    <div className="minutes">35 Minutes</div>
                                </div>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="accordion-item" uuid="b">
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <button>Color Theory</button>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="card-body acc-content">
                        <div className="content">
                            <div className="clearfix">
                                <ModalVideo channel='youtube' isOpen={isOpen} videoId='YLN1Argi7ik' onClose={() => { openModal(); }} />
                                <div className="pull-left">
                                    <Link className="popup-videos play-icon" onClick={() => { openModal(); }}><i className="fa fa-play"></i>What is UI/ UX Design?</Link>
                                </div>
                                <div className="pull-right">
                                    <div className="minutes">35 Minutes</div>
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="clearfix">
                                <ModalVideo channel='youtube' isOpen={isOpen} videoId='YLN1Argi7ik' onClose={() => { openModal(); }} />
                                <div className="pull-left">
                                    <Link className="popup-videos play-icon" onClick={() => { openModal(); }}><i className="fa fa-play"></i>What is UI/ UX Design?</Link>
                                </div>
                                <div className="pull-right">
                                    <div className="minutes">35 Minutes</div>
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="clearfix">
                                <ModalVideo channel='youtube' isOpen={isOpen} videoId='YLN1Argi7ik' onClose={() => { openModal(); }} />
                                <div className="pull-left">
                                    <Link className="popup-videos play-icon" onClick={() => { openModal(); }}><i className="fa fa-play"></i>What is UI/ UX Design?</Link>
                                </div>
                                <div className="pull-right">
                                    <div className="minutes">35 Minutes</div>
                                </div>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="accordion-item" uuid="c">
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <button>Basic Typography</button>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="card-body acc-content">
                        <div className="content">
                            <div className="clearfix">
                                <ModalVideo channel='youtube' isOpen={isOpen} videoId='YLN1Argi7ik' onClose={() => { openModal(); }} />
                                <div className="pull-left">
                                    <Link className="popup-videos play-icon" onClick={() => { openModal(); }}><i className="fa fa-play"></i>What is UI/ UX Design?</Link>
                                </div>
                                <div className="pull-right">
                                    <div className="minutes">35 Minutes</div>
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="clearfix">
                                <ModalVideo channel='youtube' isOpen={isOpen} videoId='YLN1Argi7ik' onClose={() => { openModal(); }} />
                                <div className="pull-left">
                                    <Link className="popup-videos play-icon" onClick={() => { openModal(); }}><i className="fa fa-play"></i>What is UI/ UX Design?</Link>
                                </div>
                                <div className="pull-right">
                                    <div className="minutes">35 Minutes</div>
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="clearfix">
                                <ModalVideo channel='youtube' isOpen={isOpen} videoId='YLN1Argi7ik' onClose={() => { openModal(); }} />
                                <div className="pull-left">
                                    <Link className="popup-videos play-icon" onClick={() => { openModal(); }}><i className="fa fa-play"></i>What is UI/ UX Design?</Link>
                                </div>
                                <div className="pull-right">
                                    <div className="minutes">35 Minutes</div>
                                </div>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>                                            
        </div>
    );
}

export default FaqPart;