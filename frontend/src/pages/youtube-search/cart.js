import React, { useEffect } from 'react';
import { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import OffWrap from '../../components/Layout/Header/OffWrap';
import SearchModal from '../../components/Layout/Header/SearchModal';
import ScrollToTop from '../../components/Common/ScrollTop';
import CartVideo from './cart';
import axios from "axios";

import 'rc-slider/assets/index.css'

// Image
import favIcon from '../../assets/img/fav-orange.png';
import Logo from '../../assets/img/logo/Learntube-logos_transparent.png';
import footerLogo from '../../assets/img/logo/lite-logo.png';
import save from '../../assets/img/icon/save.png';

const Cart = () => {
    const location = useLocation();
    const videos = location.state.cart;
    //console.log(videos);
    const [videoList, setVideoList] = useState(location.state.cart);
    const [cartList, setCartList] = useState([]);
    const [playlistName, setPlaylistName] = useState('');
    const [createResponse, setCreateResponse] = useState();
    const [isDeleted, setIsDeleted] = useState(false);

    const [youtubeId,setYoutubeId] = useState('');
    const [title,setTitle] = useState('');
    const [newTitle,setNewTitle] = useState('');
    const [start_s,setStart_s] = useState(0.0);
    const [end_s,setEnd_s] = useState(0.0);
    const [seq,setSeq] = useState(0);
    const [duration,setDuration] = useState(0.0);
    const initVideolist = {
        playlistId: 1,
        youtubeId: "",
        title: "",
        newTitle: "",
        start_s:"",
        end_s: "",
        seq: 0,
    };

    // const initVideolist2 = {
    //     playlistId: 1,
    //     youtubeId: "",
    //     title: "",
    //     newTitle: "",
    //     start_s:"",
    //     end_s: "",
    //     seq: 0,
    //     duration:0,
    // };

    let tempArray = [];
    useEffect(function () {
        setVideoList(videos);
        //console.log(videoList);
        console.log(location.state.playlistId);
        for (const prop in videoList) {
            //console.log(prop);
            //console.log(videoList[prop]);
            // //Object.assign(cartList, videoList[prop]);

            let tempJson = JSON.stringify(videoList[prop]);
            tempArray.push(tempJson);
            setCartList(tempArray);
            setPlaylistName(location.state.title);
        }
        setIsDeleted(false);
    }, []);
    //console.log(cartList);

    //한번 로드 후 삭제로 인해 바뀔때 사용하는 useEffect
    useEffect(function () {
        console.log(isDeleted);
        setIsDeleted(false);
    }, [isDeleted]);

    function deleteVideo (video,num){
        setIsDeleted(true);
        console.log(video.id);
        let temp = cartList;
        temp.splice(num,1);
        setCartList(temp);
        console.log(cartList);
        //setIsDeleted(true);
        console.log(isDeleted);
    }
  //     playlistId: 1,
    //     youtubeId: "",
    //     title: "",
    //     newTitle: "",
    //     start_s:"",
    //     end_s: "",
    //     seq: 0,
    //     duration:0,
    const saveCart = async ()=>{
        console.log(cartList);
        for(let temp in cartList){
            let obj = JSON.parse(cartList[temp]);
            console.log(obj);
            let createRequest={
                playlistId : location.state.playlistId,
                youtubeId : obj.id,
                title : obj.snippet.title,
                newTitle : obj.snippet.newTitle,
                start_s : 0,
                end_s : 0,
                seq : temp,
                duration : obj.duration
            };
            const response = await axios
                .post("http://localhost:3000/api/playlist_video/create", createRequest, {
                    method: "POST",
                    headers: {
                        // Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                })
                .then((res) => console.log(res));
            
        }
        window.alert("저장되었습니다!");
    }

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
                        <div className='d-flex align-items-center'>
                            <h3 className="ps-4 mb-0"><i className="fa fa-play-circle-o pe-1 pt-3 mb-3"></i>{playlistName ? playlistName : 'playlist 이름'}</h3>
                            {/* <Link
                                    className="pt-2"
                                    to={{ pathname: "/learntube-studio" }}
                                    onClick={saveCart}
                                >
                                <img src={save} className='save' alt='save' ></img>
                            </Link> */}
                            <div className="pt-2" onClick={saveCart}><img src={save} className='save' alt='save' ></img></div>
                        </div>
                        <div className="row mt-5">
                            {cartList.map(function (video, i) {
                                let newObject = JSON.parse(video);
                                //console.log(newObject.snippet.thumbnails.medium.url);
                                return <div key={i} className="p-2 col-lg-3 col-sm-6 mt-10"  >
                                    <div className="m-0 row-3 justify-content-center">
                                        <img className="img-fluid" style={{ minWidth: '100px', marginBottom: '10%' }}
                                            src={newObject.snippet.thumbnails.medium.url}
                                            alt={newObject.snippet.title}
                                        />
                                    </div>
                                    <div style={{ minHeight: "160px", maxHeight: "160px" }} >
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
                                    <div className="d-flex justify-content-end me-1 mt-1">
                                        <button className="createbtn text-center me-3" onClick={(e)=>{deleteVideo(newObject,i, e)}}>삭제</button>
                                    </div>

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