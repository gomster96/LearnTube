import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import OffWrap from '../../components/Layout/Header/OffWrap';
import SearchModal from '../../components/Layout/Header/SearchModal';
import CreatePlaylistButton from '../../components/Common/CreatePlaylistButton';
import ScrollToTop from '../../components/Common/ScrollTop';
import PlaylistWidget from '../../components/Widget/PlaylistWidget';
import MyPlaylistWidget from '../../components/Widget/MyPlaylistWidget';
import SearchWidget from '../../components/Widget/SearchWidget';
import CreatePlaylistWidget from '../../components/Widget/CreatePlaylistWidget';
import axios from "axios";


import Modal from 'react-modal';
// Image
import favIcon from '../../assets/img/fav-orange.png';
import Logo from '../../assets/img/logo/Learntube-logos_transparent.png';
import footerLogo from '../../assets/img/logo/lite-logo.png';

const Playlist = () => {

    const initCreatePlaylist = {
        userId: 1,
        playlistName: "",
        description: "",
    };

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);
    const [createPlaylist, setCreatePlaylist] = useState(initCreatePlaylist);
    const [newResponse, setNewResponse] = useState(-1);
    const [isShow, setIsShow] = useState(false);
    const [playlistName, setPlaylistName] = useState('Playlist 생성');

    const handleChange = (e) => {
        setCreatePlaylist({
            ...createPlaylist,
            [e.target.name]: e.target.value.trim(),
            userId: 1,
        });
    };

    const handleSubmit = async () => {
        console.log(JSON.stringify(createPlaylist));
        let temp;
        const response = await axios
            .post("http://localhost:3000/api/playlist/create", JSON.stringify(createPlaylist), {
                method: "POST",
                headers: {
                    // Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }).then(function (res) {
                console.log(res.data.playlistId); temp = res.data.playlistId; setNewResponse(temp); setIsShow(true);
            });
        console.log(createPlaylist.playlistName);
        setPlaylistName(createPlaylist.playlistName);
    }
    return (
        <React.Fragment>
            <Helmet>
                <link rel="icon" href={favIcon} />
            </Helmet>
            <OffWrap />
            <Header
                parentMenu='learntube'
                secondParentMenu='event'
                headerNormalLogo={Logo}
                headerStickyLogo={Logo}
                CanvasLogo={Logo}
                mobileNormalLogo={Logo}
                CanvasClass="right_menu_togle hidden-md"
                headerClass="full-width-header header-style1 home8-style4"
            />


            <div className="rs-event orange-style pb-100 md-pb-80">
                <div className="container">
                    {/* <h3>LearnTube Studio</h3> */}

                    <div class="container text-center dashboard-tabs">
                        <div className="intro-info-tabs border-none row">
                            {/* <div className="widget-area">
                                    < SearchWidget />
                                </div> */}
                            {/* <div className="col-lg-4 col-md-12">
                                <div className="widget-area">
                                    <MyPlaylistWidget />
                                </div>
                            </div> */}
                            <div className="col-lg-12 col-md-12">
                                <div className="widget-area">
                                    <PlaylistWidget />
                                </div>
                            </div>

                            <Modal isOpen={isOpen} onClose={() => { openModal(); }} onRequestClose={() => setIsOpen(false)}
                                style={{
                                    overlay: {
                                        position: 'fixed',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        backgroundColor: 'rgb(0, 0, 0, 0.55)'
                                    },
                                    content: {
                                        position: 'absolute',
                                        top: '20%',
                                        left: '25%',
                                        right: '25%',
                                        bottom: '300px',
                                        background: '#fff',
                                        overflow: 'auto',
                                        WebkitOverflowScrolling: 'touch',
                                        outline: 'none',
                                        padding: '0px',
                                    }
                                }}>
                                <div className="">
                                    <div className="register-section ">
                                        <div className="container">
                                            <div className="py-3 px-5">
                                                <div className="sec-title text-center mb-10">
                                                    <h2 className="title mt-3 mb-10">{playlistName}</h2>
                                                </div>
                                                <div className="styled-form">
                                                    <div id="form-messages"></div>
                                                    <form id="contact-form" method="post" action="#">
                                                        {isShow ? <div></div>
                                                            : <div className="row clearfix">
                                                                <div className="form-group col-lg-12 mb-25">
                                                                    <div className="my-2">Playlist 이름<span className="ms-1" style={{ color: 'red' }}>*</span></div>
                                                                    <input type="text" id="title" name="playlistName" placeholder="제목을 입력하세요" onChange={handleChange} required />
                                                                </div>
                                                                <div className="form-group col-lg-12">
                                                                    <div className="my-2">Playlist 설명</div>
                                                                    <textarea type="textarea" id="description" name="description" onChange={handleChange} placeholder="설명을 입력하세요" />
                                                                </div>
                                                            </div>
                                                        }
                                                        {isShow 
                                                        ?<div className="row d-flex justify-content-center ms-3 me-1 mt-3">
                                                            <button type="submit" className="canclebtn" onClick={() => { setIsShow(false); setPlaylistName('Playlist 생성'); }}><span className="txt">취소</span></button>
                                                            <Link className="moveToSearch text-center pt-2 d-flex align-items-center justify-content-center" to={{
                                                                pathname: "/learntube-studio/youtubeSearch",
                                                                state: { playlistName: createPlaylist.playlistName, response: newResponse }
                                                            }}><span>playlist에 영상 추가하기</span></Link>
                                                        </div>
                                                        : <div className="row d-flex justify-content-end ms-3 me-1 mt-3">
                                                            <button type="submit" className="canclebtn" onClick={() => { openModal(); setIsShow(false); setPlaylistName('Playlist 생성'); }}><span className="txt">취소</span></button>
                                                            <div className="createbtn text-center pt-2 d-flex align-items-center justify-content-center" onClick={handleSubmit}><span>저장</span></div>
                                                        </div>
                                                        }

                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
            <div className='scrollup pe-3'>
                <div onClick={() => { openModal(); }}>
                    <i className="fa fa-plus"></i>
                </div>
            </div>
            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={footerLogo}
            />

            {/* <CreatePlaylistButton
                scrollClassName="scrollup orange-color"
                onClick={() => { openModal(); }}
            /> */}

            {/* scrolltop-start */}
            {/* <ScrollToTop
                scrollClassName="scrollup orange-color"
            /> */}
            {/* scrolltop-end */}

            <SearchModal />
        </React.Fragment>
    );
}

export default Playlist