import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";
import axios from "axios";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const CurriculumPart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(!isOpen);
  const [noticeData, setNoticeData] = useState({});
  const [noticeSeq, setNoticeSeq] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  useEffect(() => {
    const fetchNotices = async () => {
      axios
        .get("http://localhost:8080/api/notice?classId=16")
        .then((response) => {
          console.log(response.data);
          setNoticeData(response.data);
          //   console.log("this is userData 0");
          //   console.log(noticeData[0]);
        })
        .catch((Error) => {
          console.log(Error);
        });
    };
    fetchNotices();
  }, []);

  return (
    <div className="content">
      {noticeData ? (
        <>
          {/* {noticeData.map((notices, i) => (
                <h6>{noticeData[i].title}</h6>
            ))} */}
          <Accordion className="accordion-box" preExpanded={"a"}>
            <AccordionItem className="accordion-item" uuid="a">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <button>공지</button>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="card-body acc-content current">
                {noticeData.map((notices, j) => (
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                  >
                    <h2>{noticeData[j].title}</h2>
                    <h6>{noticeData[j].modDate}</h6>
                    <h5>{noticeData[j].content}</h5>

                    <button onClick={() => setModalIsOpen(false)}>
                      Modal Open
                    </button>
                  </Modal>
                ))}
                {noticeData.map((notices, i) => (
                  <div className="content">
                    <div className="clearfix">
                      <div
                        className="pull-left popup-videos play-icon "
                        onClick={() => setModalIsOpen(true)}
                      >
                        <i className="fa fa-list"></i>
                        {noticeData[i].title}
                      </div>
                      <div className="pull-right">
                        <div className="minutes"></div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* <div className="content">
                            <div className="clearfix">
                                <ModalVideo channel='youtube' isOpen={isOpen} videoId='YLN1Argi7ik' onClose={() => { openModal(); }} />
                                <div className="pull-left">
                                    <Link className="popup-videos play-icon" onClick={() => { openModal(); }}><i className="fa fa-play"></i>What is UI/ UX Design?</Link>
                                </div>
                                <div className="pull-right">
                                    <div className="minutes">35 Minutes</div>
                                </div>
                            </div>
                        </div> */}
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion-item" uuid="b">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <button>1강</button>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="card-body acc-content">
                <div className="content">
                  <div className="clearfix">
                    <ModalVideo
                      channel="youtube"
                      isOpen={isOpen}
                      videoId="YLN1Argi7ik"
                      onClose={() => {
                        openModal();
                      }}
                    />
                    <div className="pull-left">
                      <Link
                        className="popup-videos play-icon"
                        onClick={() => {
                          openModal();
                        }}
                      >
                        <i className="fa fa-play"></i>What is UI/ UX Design?
                      </Link>
                    </div>
                    <div className="pull-right">
                      <div className="minutes">35 Minutes</div>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <div className="clearfix">
                    <ModalVideo
                      channel="youtube"
                      isOpen={isOpen}
                      videoId="YLN1Argi7ik"
                      onClose={() => {
                        openModal();
                      }}
                    />
                    <div className="pull-left">
                      <Link
                        className="popup-videos play-icon"
                        onClick={() => {
                          openModal();
                        }}
                      >
                        <i className="fa fa-play"></i>What is UI/ UX Design?
                      </Link>
                    </div>
                    <div className="pull-right">
                      <div className="minutes">35 Minutes</div>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <div className="clearfix">
                    <ModalVideo
                      channel="youtube"
                      isOpen={isOpen}
                      videoId="YLN1Argi7ik"
                      onClose={() => {
                        openModal();
                      }}
                    />
                    <div className="pull-left">
                      <Link
                        className="popup-videos play-icon"
                        onClick={() => {
                          openModal();
                        }}
                      >
                        <i className="fa fa-play"></i>What is UI/ UX Design?
                      </Link>
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
                  <button>2강</button>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="card-body acc-content">
                <div className="content">
                  <div className="clearfix">
                    <ModalVideo
                      channel="youtube"
                      isOpen={isOpen}
                      videoId="YLN1Argi7ik"
                      onClose={() => {
                        openModal();
                      }}
                    />
                    <div className="pull-left">
                      <Link
                        className="popup-videos play-icon"
                        onClick={() => {
                          openModal();
                        }}
                      >
                        <i className="fa fa-play"></i>What is UI/ UX Design?
                      </Link>
                    </div>
                    <div className="pull-right">
                      <div className="minutes">35 Minutes</div>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <div className="clearfix">
                    <ModalVideo
                      channel="youtube"
                      isOpen={isOpen}
                      videoId="YLN1Argi7ik"
                      onClose={() => {
                        openModal();
                      }}
                    />
                    <div className="pull-left">
                      <Link
                        className="popup-videos play-icon"
                        onClick={() => {
                          openModal();
                        }}
                      >
                        <i className="fa fa-play"></i>What is UI/ UX Design?
                      </Link>
                    </div>
                    <div className="pull-right">
                      <div className="minutes">35 Minutes</div>
                    </div>
                  </div>{" "}
                  {/* ) : null} */}
                </div>
                {/* <div className="content">
                            <div className="clearfix">
                                <ModalVideo channel='youtube' isOpen={isOpen} videoId='YLN1Argi7ik' onClose={() => { openModal(); }} />
                                <div className="pull-left">
                                    <Link className="popup-videos play-icon" onClick={() => { openModal(); }}><i className="fa fa-play"></i>What is UI/ UX Design?</Link>
                                </div>
                                <div className="pull-right">
                                    <div className="minutes">35 Minutes</div>
                                </div>
                            </div>
                        </div> */}
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </>
      ) : null}
    </div>
  );
};

export default CurriculumPart;
