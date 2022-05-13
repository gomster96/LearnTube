import React, { useEffect } from 'react';
import { useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import OffWrap from '../../components/Layout/Header/OffWrap';
import SearchModal from '../../components/Layout/Header/SearchModal';
import ScrollToTop from '../../components/Common/ScrollTop';
import CartVideo from './cart';

import 'rc-slider/assets/index.css'

// Image
import favIcon from '../../assets/img/fav-orange.png';
import Logo from '../../assets/img/logo/Learntube-logos_transparent.png';
import footerLogo from '../../assets/img/logo/lite-logo.png';

const Cart = () => {
    const location = useLocation();
    console.log(location);
    const videos = location.state.cart;
    //console.log(videos);
    const [videoList, setVideoList] = useState(location.state.cart);
    const [cartList, setCartList] = useState([]);
    
    let tempArray = [];
    useEffect(function () {
        setVideoList(videos);
        //console.log(videoList);
        for (const prop in videoList) {
            console.log(prop);
            console.log(videoList[prop]);
            // //Object.assign(cartList, videoList[prop]);
            
            let tempJson = JSON.stringify(videoList[prop]);
            tempArray.push(tempJson);
            setCartList(tempArray);
        }
        
    }, []);
    console.log(cartList);
    // videoList.map((video, i) => (
    //     console.log(videoList.eIrMbAQSU34)
    // ));
   // console.log(JSON.stringify(cartList));
    
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

            <div className="rs-event orange-style pb-100 md-pb-80">
                <div className="px-5">
                    <div className="container">
                        <h3 className="ps-4 mb-0"><i className="fa fa-play-circle-o pe-1 pt-3"></i>DFS</h3>
                        <div className="row mt-5">
                           { cartList.map(function(video,i) {
                               let newObject = JSON.parse(video);
                                //console.log(newObject.snippet.thumbnails.medium.url);
                                return <div key={i} className="p-1 row "  >
                                    <div className="m-0 col-md-3 col-sm-12 d-flex justify-content-center">
                                        <img className="img-fluid" style={{ minWidth: '100px', marginBottom: '10%' }}
                                            src={newObject.snippet.thumbnails.medium.url}
                                            alt={newObject.snippet.title}
                                        />
                                    </div>
                                    <div className="col-md-8 col-sm-12" >
                                        <div className="d-flex h4">
                                            {newObject.snippet.title ? newObject.snippet.title : '영상제목'}
                                        </div>
                                        <div className="d-flex fw-light ms-0 ps-0">
                                            {newObject.snippet.channelTitle ? newObject.snippet.channelTitle : '채널명'}
                                            <div class="mx-1 border-start border-secondary"></div> {newObject.snippet.publishTime ? newObject.snippet.publishTime.slice(0, 10) : '등록일'}
                                        </div>
                                        <div className="d-flex fw-light">
                                            {newObject.snippet.description ? newObject.snippet.description : '영상설명'}
                                        </div>

                                    </div>
                                    <hr></hr>
                                </div>
                           })}
                             
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

export default Cart