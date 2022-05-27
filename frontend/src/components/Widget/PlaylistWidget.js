import React, { useEffect, useState, useCallback } from 'react';
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import PlaylistBoard from '../../components/Courses/PlaylistBoard';
import SearchWidget from '../../components/Widget/SearchWidget';
import CourseDashBoard from '../../components/Courses/CourseDashBoard';
import YoutubeBoard from '../../components/Events/YoutubeBoard';
import YouTube from 'react-youtube';

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>





const PlaylistWidget = ({ isSelected, selectedPlaylist, selectedVideo, playlistId, playlistSize }) => {
    console.log(selectedPlaylist);
    console.log(selectedVideo);
    const [isClicked, setIsClicked] = useState(false);
    const [clickedVideo, setClickedVideo] = useState({});
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [playlistData, setPlaylistData] = useState(null);
    useEffect(() => {
        const fetchMyPlaylists = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/playlist?userId=1`);
                console.log(response.data);
                setPlaylistData(response.data);
            } catch (err) {
                console.log("err >> ", err);
            }

        };
        fetchMyPlaylists();
    }, []);
    const opts = {
        height: '125',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };
    const opts2 = {
        height: '450px',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
            start: startTime,
            end: endTime,
        },
    };

    const popUp = (video) => {
        setIsClicked(true);
        console.log(video);
        setClickedVideo(video);
        console.log(clickedVideo);
        setStartTime(video.start_s);
        setEndTime(video.end_s);
        console.log(opts2);
    }

    const checkPlaylistName = (event, selectedPlaylist) => {
        if (typeof selectedPlaylist != 'string') {
            alert('playlist를 선택해주세요!');
            event.preventDefault();
        }
    }
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
    //JSON.stringify(selectedPlaylist)
    return (

        <div>
            <div className="row">
                <div className='d-flex justify-content-start align-items-center row mb-3'>
                    <h3 className='col-4 text-start m-0 ps-0'><i className="fa fa-play-circle-o pe-1"></i> {typeof selectedPlaylist === 'string' ? selectedPlaylist + '(' + playlistSize + ')' : '선택된 playlist 제목'} </h3>
                    <Link
                        className="col-2 text-center pt-2 d-flex align-items-center justify-content-center"
                        to={{
                            pathname: "/learntube/learntube-studio/youtubeSearch",
                            state: { playlistName: selectedPlaylist, playlistId: playlistId, update: true },
                        }}
                    ><Button className='updateVideo' onClick={(e) => { checkPlaylistName(e, selectedPlaylist); }}>영상 더 추가하기</Button>
                    </Link>
                </div>
                {isSelected ? (
                    <div className="col-lg-5 text-start border-left">
                        <div className="p-1 row">
                            <div>
                                {Array.isArray(selectedVideo)
                                    ? selectedVideo.map((data, i) => (
                                        <div className="row p-1" onClick={(e) => popUp(data)}>
                                            <div className="m-0 col-md-6 col-sm-12" >
                                                {/* <img className="img-fluid" style={{ minWidth: '150px' }}
                                                             src={selectedVideo[i].thumbnail}
                                                         alt="영상제목"
                                                         /> */}
                                                <YouTube videoId={selectedVideo[i].youtubeId} opts={opts} />
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="d-flex h5 text-start">
                                                    {selectedVideo[i].newTitle ? selectedVideo[i].newTitle : selectedVideo[i].title}
                                                </div>
                                                <div className="d-flex fw-light ms-0 ps-0">
                                                    전체 재생 시간: {selectedVideo[i].duration ? toHHMMSS(selectedVideo[i].duration) : '없습니다.'}</div>
                                                <div className="d-flex fw-light"> 시작 시간: {selectedVideo[i].start_s ? toHHMMSS(selectedVideo[i].start_s) : '설정되지 않았습니다.'} ~ 끝시간: {selectedVideo[i].end_s ? toHHMMSS(selectedVideo[i].end_s) : '설정되지 않았습니다.'} </div>
                                            </div>
                                        </div>

                                    ))
                                    : null}
                            </div>
                        </div>
                    </div>
                )
                    :
                    <div>
                        {playlistData 
                        ? <div className="row">
                            {/* <div>플레이리스트가 없습니다. </div> */}
                            {playlistData.map(function (video, i) {
                                return (
                                    <div key={i} className="p-2 col-lg-3 col-sm-6 mt-10">
                                        <div className="m-0 row-3 justify-content-center">
                                            <img className="img-fluid" style={{height: "180px"}} src={video.videos[0] ? "https://i.ytimg.com/vi/".concat(video.videos[0].youtubeId, "/hqdefault.jpg") : "https://i.ibb.co/HDm4g2y/Learntube-logos-transparent-2-1.png"} alt={video.name} />
                                        </div>
                                        {video.videos 
                                        ? <div>
                                            {/* {video.videos.reduce((acc, cur, i) => {
                                                return acc + videos[cur].duration;
                                            }, 0)} */}
                                            {/* {video.videos.map(function(v, k) {
                                                
                                                return(
                                                    <div key={k}> {v.duration}</div>
                                                );
                                            })} */}
                                        </div>
                                        : <div></div>}
                                        <div className="pt-3 px-3" style={{ minHeight: "160px", maxHeight: "160px" }}>
                                            <div className="d-flex h4">{video.name ? video.name : "영상제목"}</div>
                                            {/* <div className="d-flex fw-light ms-0 ps-0">
                                    {newObject.snippet.channelTitle ? newObject.snippet.channelTitle : "채널명"}
                                    <div class="mx-1 border-start border-secondary"></div> {newObject.snippet.publishTime ? newObject.snippet.publishTime.slice(0, 10) : "등록일"}
                                </div>
                                <div className="d-flex fw-light">{newObject.snippet.description ? newObject.snippet.description : "영상설명"}</div> */}
                                        </div>
                                    </div>
                                );
                            })}
                        </div> : <div></div>}
                    </div>
                }
                {isClicked
                    ? <div className=" col-lg-7" style={{ right: "0", bottom: "600px;", height: "500px" }}>
                        <YouTube videoId={clickedVideo.youtubeId} opts={opts2} />
                        <div className='row'>
                            <div class="col-12 my-5 lh-base ms-0 ps-0">
                                <div class="mx-md-3 fs-3 text-start ms-0 ps-0">{clickedVideo.newTitle ? clickedVideo.newTitle : clickedVideo.title}</div>
                                <div class="d-flex fw-light ms-0 ps-0">
                                    <div class="fs-5 text-start text-muted ms-0 ps-0">{clickedVideo.channelTitle}</div>
                                    
                                    <div className="row fw-light ms-0 ps-0">
                                                    전체 재생 시간: {clickedVideo.duration ? toHHMMSS(clickedVideo.duration) : '없습니다.'}</div>
                                                    </div>
                                                    
                                    <div className="row fw-light ms-0 ps-0"> 시작 시간: {clickedVideo.start_s ? toHHMMSS(clickedVideo.start_s) : '설정되지 않았습니다.'} ~ 끝시간: {clickedVideo.end_s ? toHHMMSS(clickedVideo.end_s) : '설정되지 않았습니다.'} </div>
                                   
                                    {/* <div class="ms-3 fs-5 text-start text-muted">영상 총 시간 {selectedVideo.contentDetails.duration ? selectedVideo.contentDetails.duration : '0'}</div> */}
                                    {/* <div class="mx-2"></div>
            //                             <div class="mx-1 border-start border-secondary"></div> */}
                                    {/* <div class="ms-3 fs-5 text-start text-mute">{selectedVideo.snippet.publishTime.slice(0, 10)}</div> */}
                                
                                <div class="mt-5 mx-md-3 fs-5 text-start text-muted">{clickedVideo.tag}</div>
                            </div>
                        </div>
                    </div>
                    : null}
            </div>
        </div>
    )
}

export default PlaylistWidget;