import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Button, FormSelect } from "react-bootstrap";
import axios from "axios";

const CreateContent = (props) => {
    const [isOpen, setIsOpen] = useState();
    const openModal = () => setIsOpen(!isOpen);
    const [playlistOpen, setPlaylistOpen] = useState(false);
    const userId = props.instructorId;
    const initCreateContentData = {
        lectureId: props.lectureId,
        contentName: "",
        contentDescription: "",
        openDate: "",
        closeDate: "",
        playlistId: "",
    };

    const initPlaylistsData = [{ playlistId: "", playlistName: "" }];

    const [createContentData, setCreateContentData] = useState(initCreateContentData);
    const [playlistsData, setPlaylists] = useState(initPlaylistsData);

    const loadPlaylists = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/playlist/name?userId=${props.userId}`);
            console.log(response.data);
            setPlaylists(response.data);
        } catch (err) {
            console.log("err >> ", err);
        }
    };

    const handleChange = (e) => {
        console.log(e.target.value);
        setCreateContentData({
            ...createContentData,
            [e.target.name]: e.target.value,
            lectureId: props.lectureId,
        });
    };

    const handleSubmit = async () => {
        const response = await axios
            .post("http://localhost:3000/api/content", JSON.stringify(createContentData), {
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
                                                <textarea
                                                    type="textarea"
                                                    id="contentDescription"
                                                    name="contentDescription"
                                                    placeholder="내용을 입력하세요"
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
                                            <div className="form-group col-lg-12">
                                                <div className="my-2">
                                                    공개일
                                                    <span className="ms-1" style={{ color: "red" }}>
                                                        *
                                                    </span>
                                                </div>
                                                <input type="datetime-local" id="openDate" name="openDate" onChange={handleChange} required />
                                            </div>
                                            <div className="form-group col-lg-12">
                                                <div className="my-2">
                                                    마감일
                                                    <span className="ms-1" style={{ color: "red" }}>
                                                        *
                                                    </span>
                                                </div>
                                                <input type="datetime-local" id="closeDate" name="closeDate" onChange={handleChange} required />
                                            </div>
                                            <div className="form-group col-lg-12">
                                                <div className="my-2">
                                                    <li
                                                        className="fa fa-plus"
                                                        onClick={() => {
                                                            setPlaylistOpen(true);
                                                            loadPlaylists();
                                                        }}
                                                        style={{ backgroundColor: "#6483d8", border: "0px", borderRadius: "10px", color: "white", width: "30px", height: "30px", marginRight: "10px" }}
                                                    ></li>
                                                    Playlist 추가하기
                                                </div>
                                            </div>
                                            {playlistOpen === true ? (
                                                <div style={{ marginBottom: "50px" }}>
                                                    <div class="dropdown show">
                                                        <FormSelect aria-label="SelectBox" id="playlistId" name="playlistId" onChange={handleChange}>
                                                            {Array.isArray(playlistsData)
                                                                ? playlistsData.map((playlists, i) => (
                                                                      <option value={playlistsData[i].playlistId} name={playlistsData[i].playlistId}>
                                                                          {playlistsData[i].playlistName}
                                                                      </option>
                                                                  ))
                                                                : null}
                                                        </FormSelect>
                                                    </div>
                                                </div>
                                            ) : null}
                                        </div>

                                        <div className="row d-flex justify-content-end ms-3 me-1 mt-3">
                                            <Button
                                                type="submit"
                                                className="canclebtn"
                                                style={{ height: "2px" }}
                                                onClick={() => {
                                                    setPlaylistOpen(false);
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
            <span onClick={openModal}>
                <i
                    className="fa fa-plus p-1"
                    id="createContent"
                    style={{
                        padding: "3px",
                        zIndex: "0",
                    }}
                ></i>
            </span>
        </>
    );
};

export default CreateContent;
