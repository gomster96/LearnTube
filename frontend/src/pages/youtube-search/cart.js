import React, { useEffect } from 'react';
import { useState, useCallback } from 'react';
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

    const videos = {
        "eIrMbAQSU34": {
            "kind": "youtube#video",
            "etag": "hWjrNQ4Jx5WVHFMxfE4aVU1moW8",
            "id": "eIrMbAQSU34",
            "snippet": {
                "publishedAt": "2019-07-15T16:00:12Z",
                "channelId": "UCWv7vMbMWH4-V0ZXdmDpPBA",
                "title": "Java Tutorial for Beginners",
                "description": "Java tutorial for beginners - Learn Java, the language behind millions of apps and websites. Want to master Java? Get my ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/eIrMbAQSU34/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/eIrMbAQSU34/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/eIrMbAQSU34/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Programming with Mosh",
                "liveBroadcastContent": "none",
                "publishTime": "2019-07-15T16:00:12Z",
                "newTitle": "",
                "newDescription": ""
            },
            "contentDetails": {
                "duration": "PT2H30M48S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "true",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "6853191",
                "likeCount": "180602",
                "favoriteCount": "0",
                "commentCount": "7049"
            }
        },
        "xk4_1vDrzzo": {
            "kind": "youtube#video",
            "etag": "U771gFZyUQqqWS1A9ziQZxM8eFg",
            "id": "xk4_1vDrzzo",
            "snippet": {
                "publishedAt": "2020-11-09T15:02:50Z",
                "channelId": "UC4SVo0Ue36XCfOyb5Lh1viQ",
                "title": "Java Full Course ☕ -Learn to code today-【𝙁𝙧𝙚𝙚】",
                "description": "Java tutorial for beginners full course #Java #tutorial #beginners ⭐️Time Stamps⭐️ #1 (00:00:00) Java tutorial for beginners ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/xk4_1vDrzzo/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/xk4_1vDrzzo/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/xk4_1vDrzzo/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bro Code",
                "liveBroadcastContent": "none",
                "publishTime": "2020-11-09T15:02:50Z",
                "newTitle": "",
                "newDescription": ""
            },
            "contentDetails": {
                "duration": "PT12H",
                "dimension": "2d",
                "definition": "hd",
                "caption": "true",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "3383630",
                "likeCount": "181047",
                "favoriteCount": "0",
                "commentCount": "8241"
            }
        },
        "_3ds4qujpxU": {
            "kind": "youtube#video",
            "etag": "si9g0x4IaXUeLPNPy0UFJoDkdhM",
            "id": "_3ds4qujpxU",
            "snippet": {
                "publishedAt": "2018-11-21T09:01:24Z",
                "channelId": "UC46vj6mN-6kZm5RYWWqebsg",
                "title": "Java Full Course for Beginners Part-1",
                "description": "Java Programs for Selenium: https://goo.gl/h1Vutw Java Materials & FAQ's: https://goo.gl/GSi37e Visit our blogs for more Tutorials ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/_3ds4qujpxU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/_3ds4qujpxU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/_3ds4qujpxU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "SDET- QA Automation Techie",
                "liveBroadcastContent": "none",
                "publishTime": "2018-11-21T09:01:24Z",
                "newTitle": "",
                "newDescription": ""
            },
            "contentDetails": {
                "duration": "PT3H11M11S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "234033",
                "likeCount": "2756",
                "favoriteCount": "0",
                "commentCount": "132"
            }
        },
        "8cm1x4bC610": {
            "kind": "youtube#video",
            "etag": "F2u-f8WOFEAYfyZ72HNP7JV41PA",
            "id": "8cm1x4bC610",
            "snippet": {
                "publishedAt": "2019-05-05T03:24:03Z",
                "channelId": "UC59K-uG2A5ogwIrHw4bmlEg",
                "title": "Java Tutorial for Beginners | Full Course",
                "description": "Learn Java Programming in 7 hours. Intro - 00:00:00 How to use Eclipse - 00:03:50 2. Getting Started - 09:20 3. How Java Works ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/8cm1x4bC610/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/8cm1x4bC610/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/8cm1x4bC610/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Telusko",
                "liveBroadcastContent": "none",
                "publishTime": "2019-05-05T03:24:03Z",
                "newTitle": "",
                "newDescription": ""
            },
            "contentDetails": {
                "duration": "PT6H48M49S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "3420754",
                "likeCount": "57721",
                "favoriteCount": "0",
                "commentCount": "1757"
            }
        }
    }
    const [videoList, setVideoList] = useState(videos);
    const [cartList, setCartList] = useState({});

    // const addCart = useCallback(() =>{
    //     console.log("add to cart");
    //         addVideoToCart(video);
    //         setIsAdded(true);
    // },[]);

    // const deleteCart = useCallback(()=>{
    //     setIsAdded(false);
    //     deleteVideoFromCart(video.id);
    // },[]);
    useEffect(function () {
        setVideoList(videos);
        for (const prop in videoList) {
            console.log(prop);
            console.log(videoList[prop]);
            console.log("hel", videoList[prop]);
            Object.assign(cartList, videoList[prop]);
        }
        console.log(JSON.stringify(cartList));
        // setCartList(cartList);
    }, []);
    //console.log(videoList.eIrMbAQSU34);

    // videoList.map((video, i) => (
    //     console.log(videoList.eIrMbAQSU34)
    // ));
    console.log(JSON.stringify(cartList));
    
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
                        <div className="row mt-100">
                           {/* {Object.values(cartList).map((videos, i) => ( */}
                            {/* <div  key={i} className="p-1 row "  > */}
  
                                <div className="p-1 row "  >
                                    <div className="m-0 col-md-3 col-sm-12 d-flex justify-content-center">
                                        <img className="img-fluid" style={{ minWidth: '100px', marginBottom: '10%' }}
                                            // src={videos.snippet.thumbnails.medium.url}
                                            // alt={videos.snippet.title}
                                            src="https://i.ytimg.com/vi/UmnCZ7-9yDY/default.jpg"
                                            
                                        />
                                    </div>
                                    <div className="col-md-8 col-sm-12" >
                                        {/* <div className="d-flex h4">
                                            {videos.snippet.title ? videos.snippet.title : '영상제목'}
                                        </div>
                                        <div className="d-flex fw-light ms-0 ps-0">
                                            {videos.snippet.channelTitle ? videos.snippet.channelTitle : '채널명'}
                                            <div class="mx-1 border-start border-secondary"></div> {videos.snippet.publishTime ? videos.snippet.publishTime.slice(0, 10) : '등록일'}
                                        </div>
                                        <div className="d-flex fw-light">
                                            {videos.snippet.description ? videos.snippet.description : '영상설명'}
                                        </div> */}
                                        <div className="d-flex h4">
                                            영상제목
                                        </div>
                                        <div className="d-flex fw-light ms-0 ps-0">
                                            채널명
                                            <div class="mx-1 border-start border-secondary"></div> 등록일
                                        </div>
                                        <div className="d-flex fw-light">
                                           영상설명
                                        </div>
                                    </div>
                                    <hr></hr>
                                </div>
                            {/* ))} */}
                             
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