import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";

const UpdateNotice = (props) => {
  let userId = 1;
  const instructorId = props.instructorId;
  const notices = props.notices;
  const i = props.i;

  const data = { ...props };
  console.log("data ", data);
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

  const noticeUpdateHandler = (e) => {
    // console.log(data.classRoomData);
    // console.log("update notice id ", notices[i].id);
    let body = {
      noticeId: notices[i].id,
      title: noticeTitle ? noticeTitle : notices[i].title,
      content: noticeContent ? noticeContent : notices[i].content,
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

  return (
    <>
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
                  <h2 className="title mt-3 mb-10">공지 수정</h2>
                </div>
                <div className="styled-form">
                  <div id="form-messages"></div>
                  <form id="contact-form" method="post" action="#">
                    <div className="row clearfix">
                      <div className="form-group col-lg-12 mb-25">
                        <div className="my-4">
                          공지 제목
                          <span className="ms-1" style={{ color: "red" }}>
                            *
                          </span>
                        </div>
                        <input
                          type="text"
                          id="title"
                          name="title"
                          value={noticeTitle ? noticeTitle : notices[i].title}
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
                          value={
                            noticeContent ? noticeContent : notices[i].content
                          }
                          onChange={noticeContentHandler}
                          placeholder="설명을 입력하세요"
                          // refs={inputRef}
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

      <div className="minutes" style={{ paddingTop: "10px" }}>
        {instructorId === userId ? (
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
          </div>
        ) : null}
      </div>
    </>
  );
};
export default UpdateNotice;
