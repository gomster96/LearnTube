import React, { useEffect, useState, useRef } from "react";
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
import { faBorderNone } from "@fortawesome/free-solid-svg-icons";

// import { Button, Modal } from "react-bootstrap";
const CurriculumPart = (props) => {
  const data = { ...props };
  // const [noticeData, setNoticeData] = useState([]);

  // setNoticeData(props.classRoomData.notices);

  // console.log("classRoomData : ", data.classRoomData);
  // console.log("noticeData: ", noticeData);

  const inputRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(!isOpen);

  const [isNoticeCreateOpen, setNoticeCreateOpen] = useState(false);
  const createNotice = () => setNoticeCreateOpen(!isNoticeCreateOpen);
  const cancleCreateNotice = () => setNoticeCreateOpen(!isNoticeCreateOpen);

  const [isNoticeUpdateOpen, setNoticeUpdateOpen] = useState(false);
  const updateNotice = () => setNoticeUpdateOpen(!isNoticeUpdateOpen);
  const cancleUpdateNotice = () => setNoticeUpdateOpen(!isNoticeUpdateOpen);

  const [noticeIdx, setNoticeIdx] = useState(0);
  console.log("hello classId ", data.classRoomData.classId);

  const clickModalHandler = (params) => {
    console.log("hello ", params);
    setNoticeIdx(params);
    console.log("noticeIdx: ", params);
    console.log("notice id ", data.classRoomData.notices[params].id);
  };

  const [noticeTitle, setNoticeTitle] = useState("");
  const [noticeContent, setNoticeContent] = useState("");

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

  const noticeCreateHandler = (e) => {
    // console.log(e.target.value);
    // setNoticeData({
    //   ...noticeData,
    //   title: noticeTitle,
    //   content: noticeContent,
    // });

    console.log(noticeTitle);
    console.log(noticeContent);

    const body = {
      classId: data.classRoomData.classId,
      title: noticeTitle,
      content: noticeContent,
    };

    const async = async () => {
      await axios
        .post("http://localhost:8080/api/notice", JSON.stringify(body), {
          headers: {
            "Content-Type": `application/json`,
          },
        })
        .then((res) => console.log(res));

      console.log("create!!");
    };
    async();
  };

  const noticeUpdateHandler = (e) => {
    //console.log(e);
    // console.log(noticeTitle);
    // console.log(noticeContent);
    console.log(data.classRoomData);
    console.log("update notice id ", data.classRoomData.notices[noticeIdx].id);
    let body = {
      noticeId: data.classRoomData.notices[noticeIdx].id,
      title: noticeTitle
        ? noticeTitle
        : data.classRoomData.notices[noticeIdx].title,
      content: noticeContent
        ? noticeContent
        : data.classRoomData.noties[noticeIdx].content,
    };
    const async = async () => {
      await axios
        .post("http://localhost:8080/api/notice/update", JSON.stringify(body), {
          headers: {
            "Content-Type": `application/json`,
          },
        })
        .then((res) => console.log(res));
      console.log("update !!");
    };
    async();
  };

  const noticeDeleteHandler = (e) => {
    // console.log(e.target.value);
    console.log("notice id ", data.classRoomData.notices[e].id);
    let body = {
      noticeId: data.classRoomData.notices[e].id,
    };
    if (window.confirm("정말 삭제하시겠습니까?") == true) {
      axios
        .post("http://localhost:8080/api/notice/delete", JSON.stringify(body), {
          headers: {
            "Content-Type": `application/json`,
          },
        })
        .then((res) => console.log(res));
      alert("삭제되었습니다.");
    } else {
      return false;
    }
  };
  return (
    <>
      {data.classRoomData ? (
        <div className="content">
          {/* {noticeData.map((notices, i) => (
                        <h6>{noticeData[i].title}</h6>
                    ))} */}
          <Accordion className="accordion-box" preExpanded={"a"}>
            <AccordionItem className="accordion-item" uuid="a">
              <AccordionItemHeading>
                <AccordionItemButton>
                  {/* 공지 생성 */}
                  <Modal
                    isOpen={isNoticeCreateOpen}
                    onClose={() => {
                      createNotice();
                    }}
                    onRequestClose={() => setNoticeCreateOpen(false)}
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
                        left: "25%",
                        right: "25%",
                        bottom: "100px",
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
                            <div className="sec-title text-center mb-10">
                              <h2 className="title mt-3 mb-10">공지 생성</h2>
                            </div>
                            <div className="styled-form">
                              <div id="form-messages"></div>
                              <form id="contact-form" method="post" action="#">
                                <div className="row clearfix">
                                  <div className="form-group col-lg-12 mb-25">
                                    <div className="my-4">
                                      공지 제목
                                      <span
                                        className="ms-1"
                                        style={{ color: "red" }}
                                      >
                                        *
                                      </span>
                                    </div>
                                    <input
                                      type="text"
                                      id="title"
                                      name="title"
                                      value={noticeTitle}
                                      onChange={noticeTitleHandler}
                                      placeholder="제목을 입력하세요"
                                      required
                                    />
                                  </div>
                                  <div className="form-group col-lg-12">
                                    <div className="my-4">공지 내용</div>

                                    <textarea
                                      type="textarea"
                                      id="description"
                                      name="description"
                                      value={noticeContent}
                                      onChange={noticeContentHandler}
                                      placeholder="설명을 입력하세요"
                                      refs={inputRef}
                                      style={{
                                        position: "relative",
                                        borderRadius: "0px",
                                        padding: "6px 30px",
                                        width: "100%",
                                        color: "#222222",
                                        fontSize: "16px",
                                        transition: "all 500ms ease",
                                        border: "none",
                                        boxShadow: "0 0 30px #eee",
                                      }}
                                    />
                                  </div>
                                  {/* <div className="form-group col-lg-12">
                                    <div className="my-2">Playlist 태그</div>
                                    <input
                                      type="text"
                                      id="tag"
                                      name="tag"
                                      value=""
                                      placeholder="태그를 입력하세요. 쉼표로 구분됩니다."
                                    />
                                  </div> */}
                                </div>
                                <div className="row d-flex justify-content-end ms-3 me-1 mt-3">
                                  <button
                                    type="submit"
                                    className="canclebtn"
                                    onClick={() => {
                                      cancleCreateNotice();
                                      noticeCancelHandler();
                                    }}
                                  >
                                    <span className="txt">취소</span>
                                  </button>
                                  <button
                                    type="submit"
                                    className="createbtn text-center pt-2"
                                    onClick={() => {
                                      createNotice();
                                      noticeCreateHandler();
                                    }}
                                  >
                                    저장
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Modal>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      공지
                    </div>

                    <div
                      style={{
                        display: "flex",
                        marginRight: "25px",
                      }}
                    >
                      <span
                        onClick={() => {
                          createNotice();
                        }}
                      >
                        <i
                          className="fa fa-plus p-1"
                          id="createNotice"
                          style={{
                            display: "flex",
                            padding: "3px",
                            zIndex: "0",
                          }}
                        ></i>
                      </span>
                    </div>
                  </button>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="card-body acc-content current">
                {Array.isArray(data.classRoomData.notices)
                  ? data.classRoomData.notices.map((notices, i) => (
                      <div className="content">
                        <div className="clearfix">
                          {/* 공지 모달 open */}
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
                                    <div
                                      className="sec-title text-center mb-10"
                                      style={{ paddingBottom: "0.7rem" }}
                                    >
                                      <h2 className="title mt-3 mb-10">
                                        Notice
                                      </h2>
                                      <hr></hr>
                                    </div>
                                    <div className="styled-form">
                                      <div id="form-messages"></div>
                                      <form
                                        id="contact-form"
                                        method="post"
                                        action="#"
                                      >
                                        <div className="row clearfix">
                                          <h4
                                            className="title mt-3 mb-10"
                                            style={{ paddingBottom: "1rem" }}
                                          >
                                            {
                                              data.classRoomData.notices[
                                                noticeIdx
                                              ].title
                                            }
                                          </h4>
                                          <div
                                            className="form-group col-lg-12 mb-25"
                                            style={{ paddingBottom: "7rem" }}
                                          >
                                            <div
                                              className="my-2"
                                              style={{ fontSize: "20px" }}
                                            >
                                              {
                                                data.classRoomData.notices[
                                                  noticeIdx
                                                ].content
                                              }
                                            </div>
                                          </div>
                                        </div>
                                        <br></br>
                                        <p className="text-muted">
                                          수정시간:
                                          {data.classRoomData.notices[
                                            noticeIdx
                                          ].modDate.split("T")[0] +
                                            " " +
                                            data.classRoomData.notices[
                                              noticeIdx
                                            ].modDate
                                              .split("T")[1]
                                              .split(":")[0] +
                                            ":" +
                                            data.classRoomData.notices[
                                              noticeIdx
                                            ].modDate
                                              .split("T")[1]
                                              .split(":")[1]}
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
                            key={data.classRoomData.notices[i].id}
                            onClick={() => {
                              openModal();
                              clickModalHandler(i);
                            }}
                          >
                            <i
                              className="fa fa-list"
                              style={{ zIndex: "0" }}
                            ></i>
                            {data.classRoomData.notices[i].title}
                          </div>
                          <div className="pull-right">
                            <div className="minutes">
                              <div>
                                <span
                                  onClick={() => {
                                    updateNotice();
                                    clickModalHandler(i);
                                  }}
                                >
                                  <i
                                    className="fa fa-edit"
                                    id="editNotice"
                                    style={{
                                      padding: "5px",

                                      zIndex: "0",
                                    }}
                                  ></i>
                                </span>
                                <span
                                  onClick={() => {
                                    noticeDeleteHandler(i);
                                  }}
                                >
                                  <i
                                    className="fa fa-trash"
                                    style={{
                                      padding: "5px",

                                      zIndex: "0",
                                    }}
                                  ></i>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="pull-right">
                            <div
                              className="minutes"
                              style={{ paddingRight: "15px" }}
                            >
                              최종 수정시간:
                              {data.classRoomData.notices[i].modDate.split(
                                "T"
                              )[0] +
                                " " +
                                data.classRoomData.notices[i].modDate
                                  .split("T")[1]
                                  .split(":")[0] +
                                ":" +
                                data.classRoomData.notices[i].modDate
                                  .split("T")[1]
                                  .split(":")[1]}
                            </div>
                          </div>
                          {/* 공지 수정 */}
                          <Modal
                            isOpen={isNoticeUpdateOpen}
                            onClose={() => {
                              updateNotice();
                            }}
                            onRequestClose={() => setNoticeUpdateOpen(false)}
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
                                left: "25%",
                                right: "25%",
                                bottom: "100px",
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
                                    <div className="sec-title text-center mb-10">
                                      <h2 className="title mt-3 mb-10">
                                        공지 수정
                                      </h2>
                                    </div>
                                    <div className="styled-form">
                                      <div id="form-messages"></div>
                                      <form
                                        id="contact-form"
                                        method="post"
                                        action="#"
                                      >
                                        <div className="row clearfix">
                                          <div className="form-group col-lg-12 mb-25">
                                            <div className="my-4">
                                              공지 제목
                                              <span
                                                className="ms-1"
                                                style={{ color: "red" }}
                                              >
                                                *
                                              </span>
                                            </div>
                                            <input
                                              type="text"
                                              id="title"
                                              name="title"
                                              value={
                                                noticeTitle
                                                  ? noticeTitle
                                                  : data.classRoomData.notices[
                                                      noticeIdx
                                                    ].title
                                              }
                                              onChange={noticeTitleHandler}
                                              placeholder="제목을 입력하세요"
                                              required
                                            />
                                          </div>
                                          <div className="form-group col-lg-12">
                                            <div className="my-4">
                                              공지 내용
                                            </div>

                                            <textarea
                                              type="textarea"
                                              id="description"
                                              name="description"
                                              value={
                                                noticeContent
                                                  ? noticeContent
                                                  : data.classRoomData.notices[
                                                      noticeIdx
                                                    ].content
                                              }
                                              onChange={noticeContentHandler}
                                              placeholder="설명을 입력하세요"
                                              refs={inputRef}
                                              style={{
                                                position: "relative",
                                                borderRadius: "0px",
                                                padding: "6px 30px",
                                                width: "100%",
                                                color: "#222222",
                                                fontSize: "16px",
                                                transition: "all 500ms ease",
                                                border: "none",
                                                boxShadow: "0 0 30px #eee",
                                              }}
                                            />
                                          </div>
                                          {/* <div className="form-group col-lg-12">
                                    <div className="my-2">Playlist 태그</div>
                                    <input
                                      type="text"
                                      id="tag"
                                      name="tag"
                                      value=""
                                      placeholder="태그를 입력하세요. 쉼표로 구분됩니다."
                                    />
                                  </div> */}
                                        </div>
                                        <div className="row d-flex justify-content-end ms-3 me-1 mt-3">
                                          <button
                                            type="submit"
                                            className="canclebtn"
                                            onClick={() => {
                                              cancleUpdateNotice();
                                              noticeCancelHandler();
                                            }}
                                          >
                                            <span className="txt">취소</span>
                                          </button>
                                          <button
                                            type="submit"
                                            className="createbtn text-center pt-2"
                                            onClick={() => {
                                              updateNotice();
                                              noticeUpdateHandler(i);
                                            }}
                                          >
                                            저장
                                          </button>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Modal>
                        </div>
                      </div>
                    ))
                  : null}
              </AccordionItemPanel>
            </AccordionItem>
            {/* 강의 */}
            {Array.isArray(data.classRoomData.lectures)
              ? data.classRoomData.lectures.map((lectures, i) => (
                  <AccordionItem className="accordion-item" uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <button
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                            }}
                          >
                            {data.classRoomData.lectures[i].lectureNum}강
                          </div>

                          <div
                            style={{
                              display: "flex",
                              marginRight: "25px",
                            }}
                          >
                            <span onClick={openModal}>
                              <i
                                className="fa fa-plus p-1"
                                style={{
                                  display: "flex",
                                  padding: "3px",
                                  zIndex: "0",
                                }}
                              ></i>
                            </span>
                            <span onClick={openModal}>
                              <i
                                className="fa fa-edit"
                                style={{
                                  display: "flex",
                                  padding: "3px",
                                  zIndex: "0",
                                }}
                              ></i>
                            </span>
                            <span onClick={openModal}>
                              <i
                                className="fa fa-trash"
                                style={{
                                  display: "flex",
                                  padding: "3px",
                                  zIndex: "0",
                                }}
                              ></i>
                            </span>
                          </div>
                        </button>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="card-body acc-content">
                      {Array.isArray(data.classRoomData.lectures)
                        ? data.classRoomData.lectures[i].contents.map(
                            (contents, j) => (
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
                                      {
                                        data.classRoomData.lectures[i].contents[
                                          j
                                        ].contentName
                                      }
                                    </Link>
                                  </div>
                                  <div className="pull-right">
                                    <div
                                      className="minutes"
                                      style={{ paddingTop: "10px" }}
                                    >
                                      마감일:
                                      {data.classRoomData.lectures[i].contents[
                                        j
                                      ].closeDate.split("T")[0] +
                                        " " +
                                        data.classRoomData.lectures[i].contents[
                                          j
                                        ].closeDate
                                          .split("T")[1]
                                          .split(":")[0] +
                                        ":" +
                                        data.classRoomData.lectures[i].contents[
                                          j
                                        ].closeDate
                                          .split("T")[1]
                                          .split(":")[1]}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          )
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
