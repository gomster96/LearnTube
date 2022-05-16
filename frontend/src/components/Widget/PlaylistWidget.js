import React, { useEffect, useState } from 'react';
import axios from "axios";
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
    const opts = {
        height: '100',
        width: '150',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };
    const selectPlaylist = (initPlaylistData) => {
        console.log(initPlaylistData.videos);
        var selected = initPlaylistData.videos;

        setSelectedVideo(selected);
        setSelectedPlaylist(initPlaylistData.name);
        console.log(selectPlaylist);
        setIsSelected(true);
        //setSelectedPlaylist(initPlaylistData.videos);
        console.log(selectedVideo);
        console.log(selectedVideo[0].title);
        // setSelectedVideo(initPlaylistData);
    };


    // const selectedVideo = (video) => {

    // };

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
                <div className=" col search-wrap searchbtn">
                    <input type="search" placeholder="Searching..." name="s" className="search-input" val="" />
                    <button type="submit" value="Search"><i className="fa fa-search"></i></button>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        {Array.isArray(playlistData)
                            ? playlistData.map((data, i) => (
                                <PlaylistBoard
                                    onPlaylistClick={selectPlaylist}
                                    playlistTitle={playlistData[i].name}
                                    playlistImg={playlistData[i].thumbnail}
                                    playlistTime="01:34"
                                    playlistVideo={6}
                                    openDate="2022.03"
                                    playlistDescription={playlistData[i].description}
                                    creatorName={playlistData[i].userName}
                                    videos={playlistData[i]}
                                />
                            ))
                            : null}
                    </div>
                    {isSelected ? (
                        <div className="col-lg-8 text-start border-left">
                            <h3><i className="fa fa-play-circle-o pe-1"></i> {selectedPlaylist} </h3>
                            <div className="p-1">
                                <div>
                                    {Array.isArray(selectedVideo)
                                        ? selectedVideo.map((data, i) => (
                                            <div className="row p-1">
                                                <div className="m-0 col-md-3 col-sm-12" >
                                                    {/* <img className="img-fluid" style={{ minWidth: '150px' }}
                                                        src={selectedVideo[i].thumbnail}
                                                        alt="영상제목"
                                                    /> */}
                                                    <YouTube videoId={selectedVideo[i].youtubeId} opts={opts} />
                                                </div>
                                                <div className="col-md-9 col-sm-12">
                                                    <div className="d-flex h4 text-start">
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
                </div>
            </div>
        </div>
    )
}

export default PlaylistWidget;