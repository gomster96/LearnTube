import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import PlaylistBoard from '../../components/Courses/PlaylistBoard';
import SearchWidget from '../../components/Widget/SearchWidget';
import CourseDashBoard from '../../components/Courses/CourseDashBoard';
import YoutubeBoard from '../../components/Events/YoutubeBoard';
import YouTube from 'react-youtube';
// Course courseImg
import courseImg1 from '../../assets/img/courses/1.jpg';
import courseImg2 from '../../assets/img/courses/2.jpg';
import courseImg3 from '../../assets/img/courses/3.jpg';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

const PlaylistWidget = () => {
    const initPlaylistData = [
        {
            playlistId: "",
            name: "",
            description: "",
            userName: "",
            thumbnail: "",
            videos: {},
        },
    ];

    const [playlistData, setPlaylistData] = useState(initPlaylistData.videos);
    const [selectedPlaylist, setSelectedPlaylist] = useState(initPlaylistData);
    const [selectedVideo, setSelectedVideo] = useState(initPlaylistData.videos);
    const [isSelected, setIsSelected] = useState(false);
    const [isClicked,setIsClicked] = useState(false);
    const [clickedVideo,setClickedVideo] = useState({});
    const [startTime,setStartTime] = useState(null);
    const [endTime,setEndTime] = useState(null);
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
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
            start: startTime,
            end: endTime,
        },
    };

    const handleChange = (name) => {
        let num = 0;
        for (let count = 0; count < playlistData.length; count++) {
            console.log(playlistData[count]);
            if (playlistData[count].name == name) {

                break;
            }
            num++;
        }
        console.log(num);
        console.log(playlistData[num]);
        var selected = playlistData[num].videos;
        setSelectedVideo(selected);
        setSelectedPlaylist(playlistData[num].name);
        setIsSelected(true);
        console.log(selectedVideo);
    };

    const popUp = (video) =>{
        setIsClicked(true);
        console.log(video);
        setClickedVideo(video);
        console.log(clickedVideo);
        setStartTime(video.start_s);
        setEndTime(video.end_s);
        console.log(opts2);
    }

    // useEffect(() => {
    //     console.log(isClicked);
    //     setIsClicked(false);
    //     console.log(isClicked);
    // },[isClicked]);

    useEffect(() => {
        const fetchMyPlaylists = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/playlist?userId=1");
                console.log(response.data);
                setPlaylistData(response.data);
            } catch (err) {
                console.log("err >> ", err);
            }
        };
        fetchMyPlaylists();
    }, []);
    return (
        <div className="mb-50">
            <div class="row">
                <h3 className="col text-start p-5">나의 Playlist</h3>
                <div class="col dropdown show">
                    <Form.Select aria-label="SelectBox" onChange={(e) => { console.log(e.target.value); handleChange(e.target.value); }}>
                        <option>----playlist를 선택해주세요----</option>
                        {playlistData
                            ? playlistData.map((data, i) => (
                                //console.log(playlistData[i]),
                                <option
                                    key={playlistData[i].playlistId}
                                    id={playlistData[i].playlistId}
                                    name={playlistData[i].title}
                                >
                                    {playlistData[i].name}
                                </option>
                            ))
                            : <option key="playlistsData">Playlist가 존재하지 않습니다.</option>}
                    </Form.Select>
                </div>
                <div className=" col search-wrap searchbtn">
                    <input type="search" placeholder="Searching..." name="s" className="search-input" val="" />
                    <button type="submit" value="Search"><i className="fa fa-search"></i></button>
                </div>
                <div className="row">
                    {isSelected ? (
                        <div className="col-lg-4 text-start border-left">
                            <h3><i className="fa fa-play-circle-o pe-1"></i> {selectedPlaylist} </h3>
                            <div className="p-1 row">
                                <div>
                                    {Array.isArray(selectedVideo)
                                        ? selectedVideo.map((data, i) => (
                                            <div className="row p-1" onClick={(e)=>popUp(data)}>
                                                <div className="m-0 col-md-5 col-sm-12" >
                                                    {/* <img className="img-fluid" style={{ minWidth: '150px' }}
                                                        src={selectedVideo[i].thumbnail}
                                                        alt="영상제목"
                                                    /> */}
                                                    <YouTube videoId={selectedVideo[i].youtubeId} opts={opts} />
                                                </div>
                                                <div className="col-md-7 col-sm-12">
                                                    <div className="d-flex h5 text-start">
                                                        {selectedVideo[i].title ? selectedVideo[i].title : '영상제목'}
                                                    </div>
                                                    <div className="d-flex fw-light ms-0 ps-0">
                                                        전체 재생 시간: {selectedVideo[i].duration ? selectedVideo[i].duration : '영상제목'}</div>
                                                    <div className="d-flex fw-light"> 시작 시간: {selectedVideo[i].start_s ? selectedVideo[i].start_s : '영상제목'} ~ 끝시간: {selectedVideo[i].end_s ? selectedVideo[i].end_s : '영상제목'} </div>
                                                </div>
                                            </div>

                                        ))
                                        : null}
                                </div>

                            </div>
                        </div>
                    ) : <div className="d-none">
                    </div>}
                    {isClicked
                        ? <div className=" col-lg-8 overflow-auto " style={{ position: "fixed", right: "0", bottom: "600px;", height: "500px" }}>
                            <YouTube videoId={clickedVideo.youtubeId} opts={opts2} />
                            <div className='row'>
                                <div class="col-12 my-5 lh-base">
                                    <div class="mx-md-3 fs-3 text-start">{clickedVideo.newTitle?clickedVideo.newTitle:clickedVideo.title}</div>
                                    <div class="d-flex fw-light">
                                        <div class="mx-3 fs-5 text-start text-muted">{clickedVideo.channelTitle}</div>
                                        <div class="mx-2"></div>
                                        {/* <div class="ms-3 fs-5 text-start text-muted">영상 총 시간 {selectedVideo.contentDetails.duration ? selectedVideo.contentDetails.duration : '0'}</div> */}
                                        {/* <div class="mx-2"></div>
                                        <div class="mx-1 border-start border-secondary"></div> */}
                                        {/* <div class="ms-3 fs-5 text-start text-mute">{selectedVideo.snippet.publishTime.slice(0, 10)}</div> */}
                                    </div>
                                    <div class="mt-5 mx-md-3 fs-5 text-start text-muted">{clickedVideo.tag}</div>
                                </div>
                            </div>
                        </div>
                        : <div>아직 클릭하지 않았습니다.</div>}
                </div>
            </div>
        </div>
    )
}

export default PlaylistWidget;