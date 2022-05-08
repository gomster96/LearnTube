import React, { useEffect } from 'react';
import { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import OffWrap from '../../components/Layout/Header/OffWrap';
import SearchModal from '../../components/Layout/Header/SearchModal';
import ScrollToTop from '../../components/Common/ScrollTop';
import YoutubeVideoListWidget from '../../components/Widget/YoutubeVideoListWidget';
import YoutubeVideoSearchWidget from '../../components/Widget/YoutubeVideoSearchWidget';
import axios from 'axios';
import Youtube from '../../service/youtube';
import YouTube from 'react-youtube';
import Range from 'rc-slider';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'


// Image
import favIcon from '../../assets/img/fav-orange.png';
import Logo from '../../assets/img/logo/Learntube-logos_transparent.png';
import footerLogo from '../../assets/img/logo/lite-logo.png';

const YoutubeSearch = () => {


    const opts = {
        height: '420',
        width: '560',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const [newQuery, setNewQuery] = useState("한동대학교");
    const [searchedVideos, setSearchedVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [paginatedVideos, setPaginatedVideos] = useState([]);
    const [realNewViewCount, setNewViewCount] = useState(0);
    const [realFinalDuration, setFinalDuration] = useState('');
    const [isSelected, setIsSelected] = useState(false);
    const [cart, setCart] = useState({});
    const [isChanged, setIsChanged] = useState(false);

    const httpClient = axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: { key: 'AIzaSyCOE8yAf5-5TrvgQgcaMZIMjR588joHBas' },
    });
    const youtube = new Youtube(httpClient);
    let finalDuration = '';
    let duration, viewCountInt, newViewCount;
    const selectVideo = (video) => {
        setIsSelected(false);
        setSelectedVideo(video);
        //console.log(selectedVideo);
        // console.log(selectedVideo.id);
        //조회수 커스터마이징
        duration = video.contentDetails.duration;
        if (!video.contentDetails.duration) duration = 'PT9M50S';
        let whereH = duration.indexOf('H');
        let whereM = duration.indexOf('M');
        let whereS = duration.indexOf('S');
        let hour, min, sec;
        if (whereH > -1) {
            let tempDuration = duration.split('H');
            let temp_length = tempDuration[0].length;
            hour = tempDuration[0].substring(2, temp_length);
            finalDuration = finalDuration + hour + "시간 ";
        }
        if (whereM > -1) {
            let tempDuration = duration.split('M');
            let temp_length = tempDuration[0].length;
            if (whereH > -1) {
                min = tempDuration[0].substring(whereH + 1, temp_length);
            } else min = tempDuration[0].substring(2, temp_length);
            finalDuration = finalDuration + min + "분 ";
        }
        if (whereS > -1) {
            let tempDuration = duration.split('S');
            let temp_length = tempDuration[0].length;
            if (whereH > -1 && whereM == -1) {
                sec = tempDuration[0].substring(whereH + 1, temp_length);
            } else if (whereM > -1) {
                sec = tempDuration[0].substring(whereM + 1, temp_length);
            } else sec = tempDuration[0].substring(2, temp_length);
            finalDuration = finalDuration + sec + "초";
        }
        setFinalDuration(finalDuration);
        //조회수 커스텀
        viewCountInt = parseFloat(video.statistics.viewCount);
        if (viewCountInt >= 100000000) {
            newViewCount = (viewCountInt / 100000000.0).toFixed(1) + "억";
        } else if (viewCountInt >= 10000) {
            newViewCount = (viewCountInt / 10000.0).toFixed(0) + "만";
        } else if (viewCountInt > 1000) {
            newViewCount = (viewCountInt / 1000.0).toFixed(1) + "천";
        } else newViewCount = viewCountInt;
        setNewViewCount(newViewCount);
    };

    let newId;
    const addVideoToCart = (video) => {
        newId = video.id;
        cart[newId] = video;
        console.log(cart);
        setIsChanged(true);
    };

    const deleteVideoFromCart = (id) => {
        console.log(id);
        delete cart[id];
        console.log(cart);
    };

    useEffect(function(){
        setIsChanged(false);
    },[isChanged]);
    // query를 받아와서 search 후 searchedVideos에 결과 저장
    const search = useCallback(
        (query) => {
            setNewQuery(query);
            setSelectedVideo(null);
            youtube.search(query).then(function (response) {
                setSearchedVideos(response);
            })
        },
        [youtube],
    );

    const getToken = useCallback(
        async (value) => {
            await youtube.getTokenDetail(newQuery, value).then(function (response) {
                setSearchedVideos(response);
                setPaginatedVideos(response.items);
            })
        }, [youtube],
    );

    const onToggle = () => {
        setIsSelected(!isSelected);
    }



    // 처음 페이지를 로딩할 때 default로 query 값 설정
    useEffect(async function () {
        let searchedResults = await youtube.search('한동대학교');
        setSearchedVideos(searchedResults);
        console.log(searchedVideos);
    }, []);


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


            {/* <div className="rs-event orange-style pt-50 pb-100 md-pt-80 md-pb-80"> */}
            <div className="rs-event orange-style pb-100 md-pb-80">
                <div className="px-5">
                    <div className="container">
                        <h3 className="ps-4 mb-0"><i className="fa fa-play-circle-o pe-1 pt-3"></i>DFS</h3>
                        <div className="widget-area">
                            < YoutubeVideoSearchWidget onSearch={search} />
                        </div>
                    </div>
                    <div class="text-center dashboard-tabs">
                        <div className="intro-info-tabs border-none row mx-5">
                            {/* <div className="col-md-4">
                                <div className="widget-area">
                                    <YoutubeVideoListWidget videos={searchedVideos}
                                        onVideoClick={selectVideo}
                                        display={'list'} />

                                </div>
                            </div> */}
                            {/* video를 선택했을 경우 화면 반으로 나눠서 구성 */}
                            {selectedVideo ?
                                (
                                isChanged?
                                (<div className="col-lg-6 col-md-7">
                                    <div className="widget-area">
                                        <YoutubeVideoListWidget videos={searchedVideos.items}
                                            onVideoClick={selectVideo} nextPageToken={searchedVideos.nextPageToken}
                                            prevPageToken={searchedVideos.prevPageToken} getToken={getToken}
                                            cartClick={addVideoToCart} cartUnclick={deleteVideoFromCart} cart={cart} />

                                    </div>
                                </div>)
                                :
                                (<div className="col-lg-6 col-md-7">
                                    <div className="widget-area">
                                        <YoutubeVideoListWidget videos={searchedVideos.items}
                                            onVideoClick={selectVideo} nextPageToken={searchedVideos.nextPageToken}
                                            prevPageToken={searchedVideos.prevPageToken} getToken={getToken}
                                            cartClick={addVideoToCart} cartUnclick={deleteVideoFromCart} cart={cart} />

                                    </div>
                                </div>)
                                ) : <div className="col-md-12 col-12">
                                    <div className="widget-area">
                                        <YoutubeVideoListWidget videos={searchedVideos.items}
                                            onVideoClick={selectVideo} nextPageToken={searchedVideos.nextPageToken}
                                            prevPageToken={searchedVideos.prevPageToken} getToken={getToken}
                                            cartClick={addVideoToCart} cartUnclick={deleteVideoFromCart} cart={cart} />
                                    </div>
                                </div>}

                            {selectedVideo ? (
                                <div className="col-lg-6 col-md-5 col-sm-12">
                                    <YouTube videoId={selectedVideo.id} opts={opts} />
                                    <div class="row">
                                        <div class="col-12 my-5 lh-base">
                                            <div class="mx-md-3 fs-3 text-start">{selectedVideo.snippet.title}</div>
                                            <div class="d-flex fw-light">
                                                <div class="mx-3 fs-5 text-start text-muted">{selectedVideo.snippet.channelTitle}</div>
                                                <div class="mx-2"></div>
                                                <div class="mx-1 border-start border-secondary"></div>
                                                <div class="ms-3 fs-5 text-start text-muted">조회수 {selectedVideo.statistics.viewCount ? realNewViewCount : '0'}회</div>
                                                <div class="mx-2"></div>
                                                <div class="mx-1 border-start border-secondary"></div>
                                                <div class="ms-3 fs-5 text-start text-muted">영상 총 시간 {selectedVideo.contentDetails.duration ? realFinalDuration : '0'}</div>
                                                <div class="mx-2"></div>
                                                <div class="mx-1 border-start border-secondary"></div>
                                                <div class="ms-3 fs-5 text-start text-mute">{selectedVideo.snippet.publishTime.slice(0, 10)}</div>
                                            </div>
                                            <div class="mx-3 my-3 border-bottom"></div>
                                            <div class="mt-5 mx-md-3 fs-5 text-start text-muted">{selectedVideo.snippet.description}</div>
                                        </div>
                                        <div className="row d-flex justify-content-end ms-3 me-1 mt-3">
                                            <button className="createbtn text-center me-3" onClick={onToggle}>담기</button>
                                        </div>
                                        <div className={isSelected ? "col-12 register-section mx-md-4" : "col-12 register-section mx-md-4 d-none"} >
                                            <div className="container">
                                                <div className="py-3">
                                                    <div className="text-start mb-10">
                                                        <div className="mt-3 mb-10 fs-3">영상 담기</div>
                                                    </div>
                                                    <div className="styled-form">
                                                        <div id="form-messages"></div>
                                                        <form id="contact-form" method="post" action="#">
                                                            <div className="row clearfix">
                                                                <div className="form-group col-lg-12 mb-25">
                                                                    <div className="my-2 text-start">영상 제목<span className="ms-1" style={{ color: 'red' }}>*</span></div>
                                                                    <input type="text" id="title" name="title" placeholder="제목을 입력하세요" required />
                                                                </div>
                                                                <div className="form-group col-lg-12">
                                                                    <div className="my-2 text-start">태그</div>
                                                                    <input type="text" id="tag" name="tag" placeholder="태그를 입력하세요. 쉼표로 구분됩니다." />
                                                                </div>
                                                            </div>
                                                            <div className="row d-flex justify-content-end ms-3 me-1 mt-3" onClick={() => addVideoToCart(selectedVideo)}>
                                                                {/* <button className="createbtn text-center" >저장</button> */}
                                                                저장!!
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) :
                                <div></div>
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

export default YoutubeSearch