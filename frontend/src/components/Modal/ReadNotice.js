import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";

const ReadNotice = (props) => {
  let userId = 1;
  const instructorId = props.instructorId;
  const notices = props.notices;
  const i = props.noticeIdx;

  const data = { ...props };
  //   console.log("모달 notices ", notices[i].title);
  //   console.log("모달 ", i);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(!isOpen);

  const [isNoticeUpdateOpen, setNoticeUpdateOpen] = useState(false);
  const updateNotice = () => setNoticeUpdateOpen(!isNoticeUpdateOpen);
  const cancleUpdateNotice = () => setNoticeUpdateOpen(!isNoticeUpdateOpen);

  const [noticeTitle, setNoticeTitle] = useState("");
  const [noticeContent, setNoticeContent] = useState("");

  const [noticeIdx, setNoticeIdx] = useState(0);
  //console.log("i", i);

  const clickModalHandler = (i) => {
    setNoticeIdx(i);
  };

  const noticeCancelHandler = () => {
    setNoticeTitle("");
    setNoticeContent("");
  };

  const noticeTitleHandler = (e) => {
    console.log(e.target.value);
    setNoticeTitle(e.target.value);
  };

  const noticeContentHandler = (e) => {
    console.log(e.target.value);
    setNoticeContent(e.target.value);
  };

  return (
    <>
      {notices[i] ? (
        <>
          <Modal
            title={props.title}
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
                    <div
                      className="sec-title text-center mb-10"
                      style={{ paddingBottom: "0.7rem" }}
                    >
                      <h2 className="title mt-3 mb-10">
                        Notice{notices.title}
                      </h2>
                      <hr></hr>
                    </div>
                    <div className="styled-form">
                      <div id="form-messages"></div>
                      <form id="contact-form" method="post" action="#">
                        <div className="row clearfix">
                          <h4
                            className="title mt-3 mb-10"
                            style={{ paddingBottom: "1rem" }}
                          >
                            {notices[i].title}
                          </h4>
                          <div
                            className="form-group col-lg-12 mb-25"
                            style={{ paddingBottom: "7rem" }}
                          >
                            <div className="my-2" style={{ fontSize: "20px" }}>
                              {notices[i].content}
                            </div>
                          </div>
                        </div>
                        <br></br>
                        {notices.modDate ? (
                          <p className="text-muted">
                            최종 수정시간:
                            {notices.modDate.split("T")[0] +
                              " " +
                              notices.modDate.split("T")[1].split(":")[0] +
                              ":" +
                              notices.modDate.split("T")[1].split(":")[1]}
                          </p>
                        ) : null}
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
            key={notices.id}
            onClick={() => {
              openModal();
              clickModalHandler(i);
            }}
          >
            <i className="fa fa-list" style={{ zIndex: "0" }}></i>
            {notices[i].title}
          </div>
        </>
      ) : null}
    </>
  );
};

export default ReadNotice;
