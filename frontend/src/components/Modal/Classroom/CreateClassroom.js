import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Button, FormSelect } from "react-bootstrap";
import axios from "axios";

const ClassroomContent = (props) => {
    const [isOpen, setIsOpen] = useState();
    const openModal = () => setIsOpen(!isOpen);
    const userId = props.userId;

    const initCreateClassRoomData = {
        instructorId: userId,
        className: "",
        classDescription: "",
        closeDate: "",
        entryCode: "1eFEC6",
        isOpened: true,
        isActive: true,
        image: "",
    };

    const [createClassRoomData, setCreateClassRoomData] = useState(initCreateClassRoomData);

    const handleChange = (e) => {
        setCreateClassRoomData({
            ...createClassRoomData,
            [e.target.name]: e.target.value,
            instructionId: userId,
        });
        console.log(createClassRoomData);
    };

    const handleSubmit = async () => {
        const response = await axios
            .post(`${process.env.REACT_APP_SERVER_URL}/api/classroom`, JSON.stringify(createClassRoomData), {
                method: "POST",
                headers: {
                    // Accept: "application/json",
                    "Content-Type": "application/json",
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
                                <div className="sec-title text-center mb-10">
                                    <h2 className="title mt-3 mb-10">강의실 생성</h2>
                                </div>
                                <div className="styled-form">
                                    <div id="form-messages"></div>

                                    <form id="contact-form">
                                        <div className="row clearfix">
                                            <div className="form-group col-lg-12 mb-25">
                                                <div className="my-2">
                                                    강의실 이름
                                                    <span className="ms-1" style={{ color: "red" }}>
                                                        *
                                                    </span>
                                                </div>
                                                <input type="text" id="className" name="className" placeholder="이름을 입력하세요" onChange={handleChange} required />
                                            </div>
                                            <div className="form-group col-lg-12">
                                                <div className="my-2">
                                                    강의실 설명
                                                    <span className="ms-1" style={{ color: "red" }}>
                                                        *
                                                    </span>
                                                </div>
                                                <textarea
                                                    type="textarea"
                                                    id="classDescription"
                                                    name="classDescription"
                                                    placeholder="설명을 입력하세요"
                                                    onChange={handleChange}
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
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group col-lg-12 mb-25">
                                            <div className="my-2">
                                                강의실 이미지
                                                <span className="ms-1" style={{ color: "red" }}>
                                                    *
                                                </span>
                                            </div>
                                            <input type="text" id="image" name="image" placeholder="이미지 링크 주소를 입력해주세요." onChange={handleChange} required />
                                        </div>
                                        <div className="form-group col-lg-12">
                                            <div className="my-2">
                                                강의실 마감일
                                                <span className="ms-1" style={{ color: "red" }}>
                                                    *
                                                </span>
                                            </div>
                                            <input type="datetime-local" id="closeDate" name="closeDate" onChange={handleChange} required />
                                        </div>

                                        <div className="row d-flex justify-content-end ms-3 me-1 mt-3">
                                            <Button
                                                type="submit"
                                                className="canclebtn"
                                                style={{ height: "2px" }}
                                                onClick={() => {
                                                    openModal();
                                                }}
                                            >
                                                취소
                                            </Button>
                                            <Button className="createbtn" type="button" onClick={handleSubmit} style={{ height: "10px", alignContent: "center" }}>
                                                저장
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Button onClick={openModal} style={{ backgroundColor: "#ffffff", padding: "13px", paddingRight: "13px", color: "#6483d8", fontWeight: "bold", border: "2px solid #6483d8" }}>
                + 새 강의실 만들기
            </Button>
        </>
    );
};

export default ClassroomContent;
