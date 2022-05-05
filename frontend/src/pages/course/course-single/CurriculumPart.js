import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";
import axios from "axios";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from "react-accessible-accordion";
// import { Button, Modal } from "react-bootstrap";
const CurriculumPart = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [noticeIdx, setNoticeIdx] = useState(0);
    const [contents, setContents] = useState([]);

    const initClassRoomData = {
        classId: "",
        className: "",
        classDescription: "",
        closeDate: "",
        isOpened: "",
        entryCode: "",
        isActive: "",
        classRoomRegDate: "",
        instructor: {
            userId: "",
            name: "",
            email: "",
        },
        lectures: [
            {
                lectureId: "",
                lectureNum: "",
                modDate: "",
                contents: [],
            },
        ],
        notices: [],
    };
    const [classRoomData, setClassRoomData] = useState(initClassRoomData);
    useEffect(() => {
        const fetchClassRoom = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/classroom?userId=1&classId=1");
                console.log(response.data);
                setClassRoomData(response.data);
                console.log("cla > ", classRoomData.lectures[0].contents[0].contentName);
                // setContents(classRoomData.lectures[0].contents[0]);
                // console.log("set : ", contents);
            } catch (err) {
                console.log("err >> ", err);
            }
        };
        fetchClassRoom();
    }, []);

    const clickModalHandler = (params) => {
        console.log("hello ", params);
        setNoticeIdx(params);
        console.log("not: ", noticeIdx);
    };

    return (
        <>
            {classRoomData ? (
                <div className="content">
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
                                {Array.isArray(classRoomData.notices)
                                    ? classRoomData.notices.map((notices, i) => (
                                          <div className="content">
                                              <div className="clearfix">
                                                  <Modal
                                                      isOpen={isOpen}
                                                      onClose={() => {
                                                          openModal();
                                                      }}
                                                      onRequestClose={() => setIsOpen(false)}
                                                      style={{
                                                          overlay: {
                                                              zIndex: "100",
                                                              position: "fixed",
                                                              top: 0,
                                                              left: 0,
                                                              right: 0,
                                                              bottom: 0,
                                                              backgroundColor: "rgb(0, 0, 0, 0.55)",
                                                          },
                                                          content: {
                                                              position: "absolute",
                                                              top: "20%",
                                                              left: "30%",
                                                              right: "30%",
                                                              bottom: "20%",
                                                              background: "#fff",
                                                              overflow: "auto",
                                                              WebkitOverflowScrolling: "touch",
                                                              outline: "none",
                                                              padding: "0px",
                                                          },
                                                      }}
                                                  >
                                                      <div className="">
                                                          <div className="register-section ">
                                                              <div className="container">
                                                                  <div className="py-3 px-5">
                                                                      <div className="sec-title text-center mb-10" style={{ paddingBottom: "0.7rem" }}>
                                                                          <h2 className="title mt-3 mb-10">Notice</h2>
                                                                          <hr></hr>
                                                                      </div>
                                                                      <div className="styled-form">
                                                                          <div id="form-messages"></div>
                                                                          <form id="contact-form" method="post" action="#">
                                                                              <div className="row clearfix">
                                                                                  <h4 className="title mt-3 mb-10" style={{ paddingBottom: "1rem" }}>
                                                                                      {classRoomData.notices[noticeIdx].title}
                                                                                  </h4>
                                                                                  <div className="form-group col-lg-12 mb-25" style={{ paddingBottom: "7rem" }}>
                                                                                      <div className="my-2" style={{ fontSize: "20px" }}>
                                                                                          {classRoomData.notices[noticeIdx].content}
                                                                                      </div>
                                                                                  </div>
                                                                              </div>
                                                                              <br></br>
                                                                              <p className="text-muted">
                                                                                  {/* 생성일:{" "}
                                                                                  {classRoomData[i].notices[noticeIdx].modDate.split("T")[0] +
                                                                                      " " +
                                                                                      classRoomData[i].notices[noticeIdx].modDate.split("T")[1]} */}
                                                                              </p>
                                                                              <hr></hr>
                                                                              <div className="row d-flex justify-content-end ms-3 me-1 mt-3">
                                                                                  <button
                                                                                      type="submit"
                                                                                      className="createbtn text-center pt-2"
                                                                                      onClick={() => {
                                                                                          openModal();
                                                                                      }}
                                                                                  >
                                                                                      <span className="txt">확인</span>
                                                                                  </button>
                                                                              </div>
                                                                          </form>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </Modal>
                                                  <div
                                                      className="pull-left popup-videos play-icon "
                                                      key={classRoomData.notices[i].id}
                                                      onClick={() => {
                                                          openModal();
                                                          clickModalHandler(i);
                                                      }}
                                                  >
                                                      <i className="fa fa-list" style={{ zIndex: "0" }}></i> {classRoomData.notices[i].title}
                                                  </div>
                                                  <div className="pull-right">
                                                      <div className="minutes"></div>
                                                  </div>
                                              </div>
                                          </div>
                                      ))
                                    : null}
                            </AccordionItemPanel>
                        </AccordionItem>
                        {/* 강의 */}
                        {Array.isArray(classRoomData.lectures)
                            ? classRoomData.lectures.map((lectures, i) => (
                                  <AccordionItem className="accordion-item" uuid="c">
                                      <AccordionItemHeading>
                                          <AccordionItemButton>
                                              <button> {classRoomData.lectures[i].lectureNum}강</button>
                                          </AccordionItemButton>
                                      </AccordionItemHeading>
                                      <AccordionItemPanel className="card-body acc-content">
                                          {Array.isArray(classRoomData.lectures)
                                              ? classRoomData.lectures[i].contents.map((contents, j) => (
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
                                                                    <i className="fa fa-play"></i>
                                                                    {classRoomData.lectures[i].contents[j].contentName}
                                                                </Link>
                                                            </div>
                                                            <div className="pull-right">
                                                                <div className="minutes" style={{ paddingTop: "10px" }}>
                                                                    마감일: {classRoomData.lectures[i].contents[j].closeDate}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                              : null}

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
                              ))
                            : null}
                    </Accordion>
                </div>
            ) : null}
        </>
    );
};

export default CurriculumPart;
