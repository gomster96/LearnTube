import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import OffWrap from '../../components/Layout/Header/OffWrap';
import SearchModal from '../../components/Layout/Header/SearchModal';
import ScrollToTop from '../../components/Common/ScrollTop';
import MyPlaylistDetailWidget from '../../components/Widget/MyPlaylistDetailWidget';
import Playlist_listview from '../../components/Events/Playlist_listview';
import MyPlaylistWidget from '../../components/Widget/MyPlaylistWidget';
import SearchWidget from '../../components/Widget/SearchWidget';
import PlaylistWidget from '../../components/Widget/PlaylistWidget';
// Image
import favIcon from '../../assets/img/fav-orange.png';
import Logo from '../../assets/img/logo/Learntube-logos_transparent.png';
import footerLogo from '../../assets/img/logo/lite-logo.png';
import courseImg1 from '../../assets/img/courses/1.jpg';




const MyPlaylist = () => {

    const [selectedPlaylist, setSelectedPlaylist] = useState(null);

    const selectPlaylist = (playlist) => {
        setSelectedPlaylist(playlist);
        console.log(selectedPlaylist);
    };

    return (
        <React.Fragment>
            <Helmet>
                <link rel="icon" href={favIcon} />
            </Helmet>
            <OffWrap />
            <Header
                parentMenu='pages'
                secondParentMenu='event'
                headerNormalLogo={Logo}
                headerStickyLogo={Logo}
                CanvasLogo={Logo}
                mobileNormalLogo={Logo}
                CanvasClass="right_menu_togle hidden-md"
                headerClass="full-width-header header-style1 home8-style4"
            />


            <div className="rs-event orange-style pt-50 pb-100 md-pt-80 md-pb-80">
                <div className="container">
                    {/* <h3>LearnTube Studio</h3> */}
                    {/* <div className="widget-area">
                        < SearchWidget />
                    </div> */}
                    <div class="container text-center dashboard-tabs">
                        <div className="intro-info-tabs border-none row">
                            <div className="col-lg-4 col-md-8">
                                <div className="widget-area">
                                    <div className="playlist mb-50">
                                        <h3 className="widget-title">나의 Playlist</h3>
                                        <Playlist_listview
                                            onPlaylistClick={selectPlaylist}
                                            playlistTitle='스레드 종류가 참 많죠? 하드웨어 스레드, OS 스레드, 네이티브 스레드, 커널 스레드'
                                            playlistTime='30'
                                        />
                                        <Playlist_listview
                                            onPlaylistClick={selectPlaylist}
                                            playlistTitle='BFS 알고리즘'
                                            playlistTime='79'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 px-4 text-start mt-4">
                                <h3> {selectedPlaylist ? <span><i className="fa fa-play-circle-o pe-1"></i> {selectedPlaylist} </span>: <div></div>}</h3>
                                {selectedPlaylist ? (
                                    <div className="p-1">
                                        <div className="row">
                                            <div className="m-0 col-md-3 col-sm-12" >
                                                <img className="img-fluid" style={{ minWidth: '120px' }}
                                                    src="https://i.ytimg.com/vi/vorIqiLM7jc/default.jpg"
                                                    alt="영상제목"
                                                />
                                            </div>
                                            <div className="col-md-9 col-sm-12">
                                                <div className="d-flex h4 text-start">
                                                    {selectedPlaylist ? selectedPlaylist : '영상제목'}
                                                </div>
                                                <div className="d-flex fw-light ms-0 ps-0">
                                                    채널명
                                            <div class="mx-1 border-start border-secondary">
                                                    </div> 등록일 </div>
                                                <div className="d-flex fw-light"> 영상설명 </div>
                                            </div>
                                        </div>
                                    </div>
                                ) :
                                    <div className="d-none">
                                    </div>
                                }
                                {selectedPlaylist ? (
                                    <div className="p-1">
                                        <div className="row">
                                            <div className="m-0 col-md-3 col-sm-12" >
                                                <img className="img-fluid" style={{ minWidth: '120px' }}
                                                    src="https://i.ytimg.com/vi/vorIqiLM7jc/default.jpg"
                                                    alt="영상제목"
                                                />
                                            </div>
                                            <div className="col-md-9 col-sm-12">
                                                <div className="d-flex h4 text-start">
                                                    {selectedPlaylist ? selectedPlaylist : '영상제목'}
                                                </div>
                                                <div className="d-flex fw-light ms-0 ps-0">
                                                    채널명
                                            <div class="mx-1 border-start border-secondary">
                                                    </div> 등록일 </div>
                                                <div className="d-flex fw-light"> 영상설명 </div>
                                            </div>
                                        </div>
                                    </div>
                                ) :
                                    <div className="d-none">
                                    </div>
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={footerLogo}
            />

            {/* scrolltop-start */}
            <ScrollToTop
                scrollClassName="scrollup orange-color"
            />
            {/* scrolltop-end */}

            <SearchModal />
        </React.Fragment>
    );
}

export default MyPlaylist