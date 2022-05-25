import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PlaylistBoard from "../Courses/PlaylistBoard";
import SearchWidget from "./SearchWidget";
import CourseDashBoard from "../Courses/CourseDashBoard";
import YoutubeBoard from "../Events/YoutubeBoard";
import YouTube from "react-youtube";
// Course courseImg
import courseImg1 from "../../assets/img/courses/1.jpg";
import courseImg2 from "../../assets/img/courses/2.jpg";
import courseImg3 from "../../assets/img/courses/3.jpg";

const ContentWidget = (props) => {
    console.log(props.className);
    console.log(props.content.contentId);
    console.log(props.lecture);

    const [contentData, setContentData] = useState();
    const [contentId, setContentId] = useState(props.content.contentId);
    const [lectureNum, setLectureNum] = useState(props.lecture.lectureNum);
    const [selectedPlaylist, setSelectedPlaylist] = useState();
    const [selectedVideo, setSelectedVideo] = useState();
    const [isSelected, setIsSelected] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [clickedVideo, setClickedVideo] = useState({});
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [defaultVideo, setDefaultVideo] = useState();
    const opts = {
        height: '100',
        width: '150',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };
    const opts2 = {
        height: '400',
        width: '600',
        playerVars: {
            autoplay: 0,
            start: startTime,
            end: endTime,
        },
    };

    const selectVideo = (video) => {
        setIsSelected(true);
        setClickedVideo(video);
        setStartTime(video.start_s);
        setEndTime(video.end_s);
    }
    const toHHMMSS = (secs) => {
        var sec_num = parseInt(secs, 10)
        var hours = Math.floor(sec_num / 3600)
        var minutes = Math.floor(sec_num / 60) % 60
        var seconds = sec_num % 60

        return [hours, minutes, seconds]
            .map(v => v < 10 ? "0" + v : v)
            .filter((v, i) => v !== "00" || i > 0)
            .join(":")
    }

    useEffect(() => {
        const fetchContent = async () => {
            // setContentId(props.content.contentId);
            console.log(contentId);
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/content?contentId=${contentId}`);
                console.log(response.data);
                setContentData(response.data);
            } catch (err) {
                console.log("err >> ", err);
            }
            setDefaultVideo(contentData.playlist.videos[0]);
        };
        fetchContent();
    }, []);

    return (
        <div className="mb-50">
            <div class="d-flex">
                <h3 className="text-start pt-50">{props.className}</h3>
                <h3 className="text-start ps-5 pt-50">{'>'}</h3>
                <h3 className="text-start ps-5 pt-50">{lectureNum}강 </h3>
            </div>
            <div>
                {contentData ?
                    <div>
                        <div className="row">
                            <h3 className="text-start pt-5 mb-0 orange-color">{contentData.contentName}</h3>
                            <div className="text-start mt-5">학습 기간 : {contentData.openDate.split("T")[0]} | {contentData.openDate.split("T")[1].substring(0, 5)} ~ {contentData.closeDate.split("T")[0]} | {contentData.closeDate.split("T")[1].substring(0, 5)}</div>
                        </div>
                        {contentData.contentDescription ?
                            <div className="row text-start pt-50">
                                <div className="pt-5 fs-4">{contentData.contentDescription}</div>
                            </div>
                            : null}

                    </div>
                    : null}
                {contentData ?
                    <div>
                        <hr class="solid mt-50 mb-50"></hr>
                        <div className="row text-start">
                            {/* <h3 className="ps-2 mb-0"><i className="fa fa-play-circle-o pe-1 pt-3"></i>{contentData.playlist.playlistTitle}</h3> */}
                            <div className="pt-20">
                                <div className="row">
                                    <div className="col-md-8 col-sm-12">
                                        {isSelected ?
                                            <div>
                                                <div className="row">
                                                    <YouTube videoId={clickedVideo.youtubeId} opts={opts2} />
                                                </div>
                                                <div className="row">
                                                    <div className="row text-start pt-30">
                                                        <div className="pt-5 fs-4">{clickedVideo.videoTitle}</div>
                                                    </div>
                                                    <div className="d-flex fw-light ms-0">
                                                        전체 재생 시간: {toHHMMSS(clickedVideo.duration) ? toHHMMSS(clickedVideo.duration) : 'duration 없음'}</div>
                                                    <div className="d-flex fw-light"> 시작 시간: {toHHMMSS(clickedVideo.start_s) ? toHHMMSS(clickedVideo.start_s) : '영상제목'} ~ 끝시간: {toHHMMSS(clickedVideo.end_s) ? toHHMMSS(clickedVideo.end_s) : '영상제목'} </div>
                                                </div>
                                            </div>
                                            :
                                            <div>
                                                <div className="row">
                                                    <YouTube videoId={contentData.playlist.videos[0].youtubeId} opts={opts2} />
                                                </div>
                                                <div className="row">
                                                    <div className="row text-start pt-30">
                                                        <div className="pt-5 fs-4">{contentData.playlist.videos[0].videoTitle}</div>
                                                    </div>
                                                    <div className="d-flex fw-light ms-0">
                                                        전체 재생 시간: {toHHMMSS(contentData.playlist.videos[0].duration) ? toHHMMSS(contentData.playlist.videos[0].duration) : 'duration 없음'}</div>
                                                    <div className="d-flex fw-light"> 시작 시간: {toHHMMSS(contentData.playlist.videos[0].start_s) ? toHHMMSS(contentData.playlist.videos[0].start_s) : '영상제목'} ~ 끝시간: {toHHMMSS(contentData.playlist.videos[0].end_s) ? toHHMMSS(contentData.playlist.videos[0].end_s) : '영상제목'} </div>
                                                </div>
                                            </div>


                                        }
                                    </div>
                                    <div className="col-md-4 col-sm-12">
                                        {contentData.playlist.videos.map((data, i) => (
                                            <div className="d-flex" onClick={() => selectVideo(data)}>
                                                <YouTube videoId={contentData.playlist.videos[i].youtubeId} opts={opts} />
                                                <div className="ms-3">
                                                    {contentData.playlist.videos[i].videoTitle}
                                                </div>
                                            </div>
                                        ))
                                        }
                                    </div>
                                </div>
                            </div>

                        </div></div>
                    : null}
            </div>
        </div>
    );
};

export default ContentWidget;
