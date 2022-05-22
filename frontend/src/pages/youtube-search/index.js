import React, { useEffect } from 'react';
import { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router-dom';
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
import cartPage from '../../assets/img/icon/trolley.png';

const YoutubeSearch = () => {
    const location = useLocation();

    const opts = {
        height: '360',
        width: '560',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            start: 30,
            end: 50,
        },
    };

    const [newQuery, setNewQuery] = useState("알고리즘");
    const [searchedVideos, setSearchedVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [paginatedVideos, setPaginatedVideos] = useState([]);
    const [realNewViewCount, setNewViewCount] = useState(0);
    const [realFinalDuration, setFinalDuration] = useState('');
    const [isSelected, setIsSelected] = useState(false);
    const [cart, setCart] = useState({});
    const [isChanged, setIsChanged] = useState(false);
    const [newDescription, setNewDescription] = useState('');
    const [playlistName, setPlaylistName] = useState('');
    const [newTitle, setNewTitle] = useState(playlistName);
    const [currentPlayTime, setCurrentPlayTime] = useState();
    const [currentFloatTime, setCurrentFloatTime] = useState();
    const [startTime, setStartTime] = useState();
    const [startFloatTime, setStartFloatTime] = useState();
    const [endTime, setEndTime] = useState();
    const [playlistId,setPlaylistId] = useState(0);
    const [endFloatTime, setEndFloatTime] = useState();
    const [updatePlaylist, setUpdatePlaylist] = useState(false);
    const [updatePlaylistTitle, setUpdatePlaylistTitle] = useState(playlistName);

    const httpClient = axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: { key: 'AIzaSyCxrgBVtQtveUX9AOu3CU7YIj4WhyGnTSQ' },

    });
    const youtube = new Youtube(httpClient);
    let finalDuration = '';
    let duration, viewCountInt, newViewCount;
    const selectVideo = (video) => {
        setNewTitle('');
        setNewDescription('');
        setIsSelected(false);
        setStartTime(false);
        setEndTime(false);
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
        console.log(finalDuration);
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
        console.log(newViewCount);
        setNewViewCount(newViewCount);
    };

    let newId;
    const addVideoToCart = (video) => {
        newId = video.id;
        //newTitle&newDescription 삽입
        video.snippet.newTitle = newTitle;
        video.snippet.newDescription = newDescription;
        video.start_s = parseInt(startFloatTime);
        video.end_s = parseInt(endFloatTime);
        video.duration = parseInt(endFloatTime - startFloatTime);
        console.log(video.snippet.newTitle + "\n" + newDescription);
        cart[newId] = video;
        console.log(cart);
        for (const prop in cart) {
            console.log(prop);
            console.log(cart[prop]);
        }
        setIsChanged(true);
    };

    const deleteVideoFromCart = (id) => {
        console.log(id);
        delete cart[id];
        console.log(cart);
        setIsChanged(true);
    };

    useEffect(function () {
        setIsChanged(false);
    }, [isChanged]);
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
                //setPaginatedVideos(response.items);
            })
        }, [youtube],
    );

    const onToggle = () => {
        setIsSelected(!isSelected);
    }

    const titleChange = (e) => {
        setNewTitle(e.target.value);
    };

    const descriptionChange = (e) => {
        setNewDescription(e.target.value);
    };

    const newTitleChange = (e) => {
        setUpdatePlaylistTitle(e.target.value);
    };


    const checkElapsedTime = (e) => {
        const duration = e.target.getDuration();
        const currentTime = e.target.getCurrentTime();
        setCurrentFloatTime(e.target.getCurrentTime());
        console.log(currentTime);
        var toHHMMSS = (secs) => {
            var sec_num = parseInt(secs, 10)
            var hours = Math.floor(sec_num / 3600)
            var minutes = Math.floor(sec_num / 60) % 60
            var seconds = sec_num % 60

            return [hours, minutes, seconds]
                .map(v => v < 10 ? "0" + v : v)
                .filter((v, i) => v !== "00" || i > 0)
                .join(":")
        }
        console.log("duration");
        console.log(duration);
        setCurrentPlayTime(toHHMMSS(currentTime));

        // if (currentTime / duration > 0.95) {
        //     setModalIsOpen(true);
        // }
    };
    const onClickStartTime = (currentPlayTime) => {
        setStartTime(currentPlayTime);
        setStartFloatTime(currentFloatTime);
        if (endTime && startTime > endTime) {
            alert("시작 시간을 종료 시간 이전으로 설정해주세요!");
            setStartTime(0);
        }

    }

    const onClickEndTime = (currentPlayTime) => {
        setEndTime(currentPlayTime);
        setEndFloatTime(currentFloatTime);
        if (endTime < startTime) {
            alert("종료 시간을 시작 시간 이전으로 설정해주세요!");
            setEndTime(startTime)
        };
    }




    // 처음 페이지를 로딩할 때 default로 query 값 설정
    useEffect(async function () {
        let searchedResults = await youtube.search(location.state.playlistName);
        setSearchedVideos(searchedResults);
        console.log(searchedVideos);
        console.log(location);
        setPlaylistName(location.state.playlistName);
        setPlaylistId(location.state.playlistId);
        console.log(location.state.response);
        console.log(location.state.playlistName);
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
                        {updatePlaylist 
                        ? <h3 className="ps-2 mb-0"><i className="fa fa-play-circle-o pe-1 pt-3"></i>
                        <input type="text" id="updatedTitle" name="updatedTitle" placeholder={playlistName} className="border-0"
                                value={updatePlaylistTitle} onChange={newTitleChange} />
                        <i className="fa fa-check ps-3 pt-3 orange-color" onClick={()=>setUpdatePlaylist(!updatePlaylist)}></i>
                        <i className="fa fa-rotate-left ps-3 pt-3 orange-color" onClick={()=>setUpdatePlaylist(!updatePlaylist)}></i>
                        </h3> 
                        : <h3 className="ps-2 mb-0"><i className="fa fa-play-circle-o pe-1 pt-3"></i>
                        {location.state.playlistName ? playlistName : '제목'}
                        <i className="fa fa-pencil ps-3 pt-3 orange-color" onClick={()=>setUpdatePlaylist(!updatePlaylist)}></i></h3>}
                        <div className="widget-area d-flex align-items-center">
                            < YoutubeVideoSearchWidget onSearch={search} />
                            <Link
                                className="pt-2"
                                to={{
                                    pathname: "/learntube-studio/myCart",
                                    state: { cart: cart, title: playlistName ,playlistId:location.state.response}
                                }}
                            >
                                <img src={cartPage} className='goToCart' alt='go to cart page' ></img>
                            </Link>
                        </div>
                    </div>
                    <div class="text-center dashboard-tabs">
                        <div className="intro-info-tabs border-none row">
                            {/* <div className="col-md-4">
                                <div className="widget-area">
                                    <YoutubeVideoListWidget videos={searchedVideos}
                                        onVideoClick={selectVideo}
                                        display={'list'} />

                                </div>
                            </div> */}
                            {/* video를 선택했을 경우 화면 반으로 나눠서 구성 */}
                            {selectedVideo ?
                                (<div className="col-lg-6 col-md-7">
                                    <div className="widget-area">
                                        <YoutubeVideoListWidget videos={searchedVideos.items}
                                            onVideoClick={selectVideo} nextPageToken={searchedVideos.nextPageToken}
                                            prevPageToken={searchedVideos.prevPageToken} getToken={getToken}
                                            cartClick={addVideoToCart} cartUnclick={deleteVideoFromCart} cart={cart} />

                                    </div>
                                </div>)
                                : <div className="col-md-12 col-12">
                                    <div className="widget-area">
                                        <YoutubeVideoListWidget videos={searchedVideos.items}
                                            onVideoClick={selectVideo} nextPageToken={searchedVideos.nextPageToken}
                                            prevPageToken={searchedVideos.prevPageToken} getToken={getToken}
                                            cartClick={addVideoToCart} cartUnclick={deleteVideoFromCart} cart={cart} />
                                    </div>
                                </div>}
                            {selectedVideo ? (
                                <div className="col-lg-6 col-md-5 col-sm-12 mb-500" style={{ position: "fixed", right: "0", bottom: "600px;", height: "500px", overflowX: "hidden", overflowY: "auto" }}>
                                    <YouTube videoId={selectedVideo.id} opts={opts} onStateChange={(e) => checkElapsedTime(e)} />
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
                                            {isSelected == false ? <button className="createbtn text-center me-3" onClick={onToggle}>저장</button> : null}
                                        </div>
                                        <div className={isSelected ? "col-12 register-section mx-md-4" : "col-12 register-section mx-md-4 d-none"} >
                                            <div className="">
                                                <div className="py-3">
                                                    <div className="text-start mb-10">
                                                        <div className="mt-3 mb-10 fs-3">영상 설정</div>
                                                    </div>
                                                    <div className="my-2 text-start mt-4">영상 구간 설정 (원하는 위치에서 버튼을 클릭하세요)</div>

                                                    <div className="d-flex mb-4">
                                                        <div className="d-flex justify-content-start">
                                                            <button className="createbtn text-center ms-0" onClick={() => onClickStartTime(currentPlayTime)}>시작 시간</button>
                                                        </div>
                                                        <div className="d-flex justify-content-start ms-3 mt-1">
                                                            <div className="">{startTime ?? currentPlayTime}</div>
                                                        </div>
                                                        <div className="d-flex justify-content-start ms-4">
                                                            <button className="createbtn text-center ms-0" onClick={() => onClickEndTime(currentPlayTime)}>종료 시간</button>
                                                        </div>
                                                        <div className="d-flex justify-content-start ms-3 mt-1">
                                                            <div className="d-flex">{endTime ?? currentPlayTime}</div>
                                                        </div>
                                                    </div>
                                                    <div className="styled-form">
                                                        <div id="form-messages"></div>
                                                        <form id="contact-form" method="post" action="#">
                                                            <div className="row clearfix">
                                                                <div className="form-group col-lg-12 mb-25">
                                                                    <div className="my-2 text-start">영상 제목</div>
                                                                    <input type="text" id="title" name="title" placeholder="제목을 입력하세요" value={newTitle} onChange={titleChange} required />
                                                                </div>
                                                                <div className="form-group col-lg-12">
                                                                    <div className="my-2 text-start">설명</div>
                                                                    <input type="text" id="description" name="description" placeholder="설명을 입력하세요. "
                                                                        value={newDescription} onChange={descriptionChange} />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 d-flex justify-content-center mt-4">
                                                                <div className="createbtn ms-0" onClick={() => addVideoToCart(selectedVideo)}>
                                                                    {/* <button className=" text-center" onClick={() => addVideoToCart(selectedVideo)}>저장</button> */}
                                                                    저장
                                                                </div>
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