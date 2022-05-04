import React from 'react';
import Modal from 'react-modal';
import { Helmet } from 'react-helmet';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import OffWrap from '../../components/Layout/Header/OffWrap';
import SearchModal from '../../components/Layout/Header/SearchModal';
import CreatePlaylistButton from '../../components/Common/CreatePlaylistButton';
import ScrollToTop from '../../components/Common/ScrollTop';
import PlaylistWidget from '../../components/Widget/PlaylistWidget';
import CreatePlaylistWidget from '../../components/Widget/CreatePlaylistWidget';
import SearchWidget from '../../components/Widget/SearchWidget';

// Image
import favIcon from '../../assets/img/fav-orange.png';
import Logo from '../../assets/img/logo/Learntube-logos_transparent.png';
import footerLogo from '../../assets/img/logo/lite-logo.png';

// Event Images
import eventImg1 from '../../assets/img/event/home12/1.jpg';
import eventImg2 from '../../assets/img/event/home12/2.jpg';
import eventImg3 from '../../assets/img/event/home12/3.jpg';
import eventImg4 from '../../assets/img/event/home12/4.jpg';

const Playlist = () => {

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
                    {/* <div className="widget-area">
                        < SearchWidget />
                    </div> */}
                    <div class="container text-center dashboard-tabs">
                        <div className="intro-info-tabs border-none row">
                            <div className="col-lg-4 col-md-12">
                                <div className="widget-area">
                                    <CreatePlaylistWidget />
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

            <CreatePlaylistButton
				scrollClassName="scrollup orange-color"
			/>

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