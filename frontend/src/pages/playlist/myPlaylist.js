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
                            <div className="col-lg-4 col-md-12">
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
                                            playlistTime='30'
                                        />
                                    </div>
                                </div>
                            </div>
                            {selectedPlaylist ? (
                        <div className='courses-item p-0 m-1 rounded-0 col-8' >
                            <div className="m-0" >
                                <img style={{ height: '200px' }}
                                    src="https://i.ytimg.com/vi/vorIqiLM7jc/default.jpg"
                                />
                            </div>
                            <div className="content-part" >
                                <div className="row ps-3 mb-3">
                                    <h3 className="title">
                                        <Link >{selectedPlaylist}</Link>
                                    </h3>
                                </div>
                                <div className="info-meta p-0">
                                    <div className="row">
                                        <ul>
                                            <li>
                                                <i className="fa fa-user pe-1 "></i>"쉬운코드"
                                            </li>
                                        </ul>
                                    </div>
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