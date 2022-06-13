import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import axios from "axios";

const CreateNotice = (props) => {
    const { userId } = props;
    const instructorId = props.instructorId;
    const classId = props.classId;

    const data = { ...props };
    //console.log("data ", data);
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);
    const inputRef = useRef();

    const [isNoticeCreateOpen, setNoticeCreateOpen] = useState(false);
    const createNotice = () => setNoticeCreateOpen(!isNoticeCreateOpen);
    const cancleCreateNotice = () => setNoticeCreateOpen(!isNoticeCreateOpen);

    const [noticeTitle, setNoticeTitle] = useState("");
    const [noticeContent, setNoticeContent] = useState("");

    const noticeCancelHandler = () => {
        setNoticeTitle("");
        setNoticeContent("");
    };

    const noticeTitleHandler = (e) => {
        setNoticeTitle(e.target.value);
    };

    const noticeContentHandler = (e) => {
        setNoticeContent(e.target.value);
    };

    const noticeCreateHandler = (e) => {
        let body = {
            classId: classId,
            title: noticeTitle,
            content: noticeContent,
        };

        const async = async () => {
            await axios
                .post(`${process.env.REACT_APP_SERVER_URL}/api/notice`, JSON.stringify(body), {
                    headers: {
                        "Content-Type": `application/json`,
                    },
                })
                .then((res) => console.log(res));

            console.log("create!!");
            window.location.reload();
        };
        async();
    };

    return (
        <>
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
                                                    <span className="ms-1" style={{ color: "red" }}>
                                                        *
                                                    </span>
                                                </div>
                                                <input type="text" id="title" name="title" value={noticeTitle} onChange={noticeTitleHandler} placeholder="제목을 입력하세요" required />
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

            {instructorId === userId ? (
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
            ) : null}
        </>
    );
};
export default CreateNotice;
