import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";

const UpdateNotice = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);
    const instructorId = props.instructorId;
    let userId = 1;
    const initUpdateNoticeData = {
        noticeId: props.notice.id,
        title: props.notice.title,
        content: props.notice.content,
    };

    const [updateNoticeData, setUpdateNoticeData] = useState(initUpdateNoticeData);
    const handleChange = (e) => {
        setUpdateNoticeData({
            ...updateNoticeData,
            [e.target.name]: e.target.value,
        });
    };

    const noticeUpdateHandler = async () => {
        const response = await axios
            .post("http://localhost:8080/api/notice/update", JSON.stringify(updateNoticeData), {
                headers: {
                    "Content-Type": `application/json`,
                },
            })
            .then((res) => console.log(res));
        openModal();
        window.location.reload();
    };

    return (
        <>
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

                                    <div className="row clearfix">
                                        <div className="form-group col-lg-12 mb-25">
                                            <div className="my-4">
                                                공지 제목
                                                <span className="ms-1" style={{ color: "red" }}>
                                                    *
                                                </span>
                                            </div>
                                            <input type="text" id="title" name="title" value={updateNoticeData.title} onChange={handleChange} placeholder="제목을 입력하세요" required />
                                        </div>
                                        <div className="form-group col-lg-12">
                                            <div className="my-4">공지 내용</div>

                                            <textarea
                                                type="textarea"
                                                id="content"
                                                name="content"
                                                value={updateNoticeData.content}
                                                onChange={handleChange}
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
                                    </div>
                                    <div className="row d-flex justify-content-end ms-3 me-1 mt-3">
                                        <button
                                            type="submit"
                                            className="canclebtn"
                                            onClick={() => {
                                                openModal();
                                            }}
                                        >
                                            <span className="txt">취소</span>
                                        </button>
                                        <button type="submit" className="createbtn text-center pt-2" onClick={noticeUpdateHandler}>
                                            저장
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <div className="minutes" style={{ paddingTop: "10px" }}>
                {instructorId === userId ? (
                    <div>
                        <span onClick={openModal}>
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
