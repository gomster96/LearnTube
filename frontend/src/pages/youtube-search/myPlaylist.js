import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import OffWrap from '../../components/Layout/Header/OffWrap';
import SearchModal from '../../components/Layout/Header/SearchModal';
import ScrollToTop from '../../components/Common/ScrollTop';
import MyPlaylistDetailWidget from '../../components/Widget/MyPlaylistDetailWidget';
import MyPlaylistWidget from '../../components/Widget/MyPlaylistWidget';
import SearchWidget from '../../components/Widget/SearchWidget';

// Image
import favIcon from '../../assets/img/fav-orange.png';
import Logo from '../../assets/img/logo/Learntube-logos_transparent.png';
import footerLogo from '../../assets/img/logo/lite-logo.png';
import courseImg1 from '../../assets/img/courses/1.jpg';

const MyPlaylist = () => {

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
                    <h3>LearnTube Studio</h3>
                    <div className="widget-area">
                        < SearchWidget />
                    </div>
                    <div class="container text-center dashboard-tabs">
                        <div className="intro-info-tabs border-none row">
                            <div className="col-lg-4 col-md-12">
                                <div className="widget-area">
                                    <MyPlaylistWidget />
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className="widget-area">
                                    <MyPlaylistDetailWidget
                                        playlistTitle="DFS 알고리즘"
                                        playlistImg={courseImg1}
                                        playlistTime="01:34"
                                        playlistVideo={6}
                                        openDate="2022.03"
                                        creatorName="양지후"
                                    />
                                </div>
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