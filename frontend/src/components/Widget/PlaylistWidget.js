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





const PlaylistWidget = ({ isSelected, selectedPlaylist, selectedVideo, playlistId, playlistSize, userId }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [clickedVideo, setClickedVideo] = useState({});
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [playlistData, setPlaylistData] = useState(null);
    const [updatePlaylist, setUpdatePlaylist] = useState(false);
    const [updatePlaylistTitle, setUpdatePlaylistTitle] = useState(selectedPlaylist.name);
    useEffect(() => {
        const fetchMyPlaylists = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/playlist?userId=${userId}`);
                console.log(response.data);
                setPlaylistData(response.data);
            } catch (err) {
                console.log("err >> ", err);
            }

        };
        fetchMyPlaylists();
    }, []);

    const initUpdatePlaylistData = {
        playlistId: playlistId,
        playlistName: updatePlaylistTitle,
        description: '',
    };
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
        width: '95%',
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
            alert('Playlist를 선택해주세요!');
            event.preventDefault();
        }
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
    const newTitleChange = (e) => {
        console.log(updatePlaylistTitle);
        setUpdatePlaylistTitle(e.target.value);
    };
    const updatePlaylistData = {
        playlistId: playlistId,
        playlistName: updatePlaylistTitle,
        description: '',
    };
    const handleSubmit = async () => {
        const response = await axios
            .post(`${process.env.REACT_APP_SERVER_URL}/api/playlist/update`, JSON.stringify(updatePlaylistData), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => console.log(res));
        alert(updatePlaylistTitle + '로 playlist 정보가 업데이트 되었습니다.');
        //window.location.reload();
    };
    //JSON.stringify(selectedPlaylist)
    return (

        <div>
            <div className="row">
                {isSelected
                ?
                <div className='d-flex justify-content-between align-items-center row mb-3'>
                    {typeof selectedPlaylist != 'string' ? <div className='col'><h3 className='col text-start m-0'><i className="fa fa-play-circle-o pe-1"></i> {typeof selectedPlaylist === 'string' ? selectedPlaylist : ''}</h3></div>
                        : <div className='col'>{updatePlaylist
                            ? <h3 className='col text-start m-0'><i className="fa fa-play-circle-o pe-1"></i> {/*{typeof selectedPlaylist === 'string' ? selectedPlaylist : '선택된 playlist 제목'}}*/}
                                <input type="text" id="updatedTitle" name="updatedTitle" placeholder={selectedPlaylist} className="border-0"
                                    value={updatePlaylistTitle} onChange={newTitleChange} />
                                <i className="fa fa-check ps-3 pt-3 orange-color" onClick={() => { setUpdatePlaylist(!updatePlaylist); handleSubmit(); }}></i>
                                <i className="fa fa-rotate-left ps-3 pt-3 orange-color" onClick={() => { setUpdatePlaylist(!updatePlaylist); setUpdatePlaylistTitle(''); }}></i>
                            </h3>
                            : <h3 className='col text-start m-0'><i className="fa fa-play-circle-o pe-1"></i> {typeof selectedPlaylist === 'string' ? selectedPlaylist : '선택된 playlist 제목'}
                                <i className="fa fa-pencil ps-3 pt-3 orange-color" onClick={() => setUpdatePlaylist(!updatePlaylist)}></i>
                            </h3>}</div>
                    }

                    <div className='col d-flex justify-content-end align-items-center'>
                        {/* <h5 className=' text-start m-0 '>{playlistSize + '개의 동영상 | 총 영상 시간 : '}</h5> */}
                        <h5 className=' text-start m-0 '>{playlistSize + '개의 동영상'}</h5>
                        <Link
                            className=" text-center pt-1 d-flex align-items-center justify-content-end ms-2 me-0"
                            to={{
                                pathname: "/learntube/learntube-studio/youtubeSearch",
                                state: { playlistName: selectedPlaylist, playlistId: playlistId, update: true },
                            }}
                        >
                            <Button className='updateVideo' onClick={(e) => { checkPlaylistName(e, selectedPlaylist); }}>영상 추가하기</Button>
                        </Link>
                    </div>
                </div> 
                : <></>
                }
                
                {isSelected ? (
                    <div className="col-lg-4 text-start border-left">
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
                                                    전체 재생 시간: {selectedVideo[i].duration ? toHHMMSS(selectedVideo[i].duration) : '전체길이'}</div>
                                                <div className="d-flex fw-light"> 시작 시간: {selectedVideo[i].start_s ? toHHMMSS(selectedVideo[i].start_s) : '00:00'} ~ 끝시간: {selectedVideo[i].end_s ? toHHMMSS(selectedVideo[i].end_s) : selectedVideo[i].duration} </div>
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
                                                <img className="img-fluid" style={{ height: "180px" }} src={video.videos[0] ? "https://i.ytimg.com/vi/".concat(video.videos[0].youtubeId, "/hqdefault.jpg") : "https://i.ibb.co/HDm4g2y/Learntube-logos-transparent-2-1.png"} alt={video.name} />
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
                            </div> : <div className="text-start fs-4">로그인하여 Playlist를 제작해 보세요.</div>}
                    </div>
                }
                {isClicked
                    ? <div className=" col-lg-8" style={{ right: "0", bottom: "600px;" }}>
                        <YouTube videoId={clickedVideo.youtubeId} opts={opts2} />
                        <div className='row'>
                            <div class="col-12 my-5 lh-base">
                                <div class="mx-md-3 fs-3 text-start">{clickedVideo.newTitle ? clickedVideo.newTitle : clickedVideo.title}</div>
                                <div class="d-flex fw-light mt-3">
                                    <div class="mx-2"></div>
                                    <div class="fs-5 text-start text-muted">전체 재생 시간: {clickedVideo.duration ? toHHMMSS(clickedVideo.duration) : '전체길이'}</div>
                                    <div class="mx-2"></div>
                                    <div class="mx-1 border-start border-secondary"></div>
                                    <div class="ms-3 fs-5 text-start text-mute">{toHHMMSS(clickedVideo.start_s)} ~ {toHHMMSS(clickedVideo.end_s)}</div>
                                </div>
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