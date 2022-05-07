import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";
import { Button } from "react-bootstrap";
import axios from "axios";

const CreateContent = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);
    const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);
    const openPlaylistModal = () => setIsPlaylistOpen(!isPlaylistOpen);

    const initCreateContentData = {
        lectureId: props.lectureId,
        contentName: "",
        contentDescription: "",
        openDate: "",
        closeDate: "",
        playlistId: 1,
    };

    const [createContentData, setCreateContentData] = useState(initCreateContentData);
    const [createResponse, setCreateResponse] = useState();

    const handleChange = (e) => {
        setCreateContentData({
            ...createContentData,
            [e.target.name]: e.target.value.trim(),
            lectureId: props.lectureId,
        });
    };

    const handleSubmit = async () => {
        const response = await axios
            .post("http://localhost:8080/api/content", JSON.stringify(createContentData), {
                method: "POST",
                headers: {
                    // Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
            .then((res) => console.log(res));
        setCreateResponse(response);
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
                                    <h2 className="title mt-3 mb-10">Content 추가</h2>
                                </div>
                                <div className="styled-form">
                                    <div id="form-messages"></div>
                                    <form id="contact-form">
                                        <div className="row clearfix">
                                            <div className="form-group col-lg-12 mb-25">
                                                <div className="my-2">
                                                    제목
                                                    <span className="ms-1" style={{ color: "red" }}>
                                                        *
                                                    </span>
                                                </div>
                                                <input type="text" id="contentName" name="contentName" placeholder="제목을 입력하세요" onChange={handleChange} required />
                                            </div>
                                            <div className="form-group col-lg-12">
                                                <div className="my-2">
                                                    내용
                                                    <span className="ms-1" style={{ color: "red" }}>
                                                        *
                                                    </span>
                                                </div>
                                                <input type="textarea" id="contentDescription" name="contentDescription" placeholder="내용을 입력하세요" onChange={handleChange} required />
                                            </div>
                                            <div className="form-group col-lg-12">
                                                <div className="my-2">
                                                    공개일
                                                    <span className="ms-1" style={{ color: "red" }}>
                                                        *
                                                    </span>
                                                </div>
                                                <input type="datetime-local" id="openDate" name="openDate" onChange={handleChange} />
                                            </div>
                                            <div className="form-group col-lg-12">
                                                <div className="my-2">
                                                    마감일
                                                    <span className="ms-1" style={{ color: "red" }}>
                                                        *
                                                    </span>
                                                </div>
                                                <input type="datetime-local" id="closeDate" name="closeDate" onChange={handleChange} />
                                            </div>
                                            <div className="form-group col-lg-12">
                                                <div className="my-2">
                                                    <Button onClick={openPlaylistModal} style={{ backgroundColor: "#6483d8" }}>
                                                        Playlist 추가
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row d-flex justify-content-end ms-3 me-1 mt-3">
                                            <Button
                                                type="submit"
                                                className="canclebtn"
                                                style={{ height: "2px", justifyContent: "center" }}
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
            <span onClick={openModal} key={createContentData.lectureId}>
                <i
                    className="fa fa-plus p-1"
                    style={{
                        display: "flex",
                        padding: "3px",
                        zIndex: "0",
                    }}
                ></i>
            </span>
        </>
    );
};

export default CreateContent;
