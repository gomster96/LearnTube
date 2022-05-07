import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import PlaylistBoard from '../../components/Courses/PlaylistBoard';
import SearchWidget from '../../components/Widget/SearchWidget';
import CourseDashBoard from '../../components/Courses/CourseDashBoard';

// Course courseImg
import courseImg1 from '../../assets/img/courses/1.jpg';
import courseImg2 from '../../assets/img/courses/2.jpg';
import courseImg3 from '../../assets/img/courses/3.jpg';

const PlaylistWidget = () => {
    const initManagesData = [
        {
            playlistId: "",
            name: "",
            description: "",
            userName: "",
            thumbnail: "",
        },
    ];

    const [managesData, setManagesData] = useState(initManagesData);
    const [selectedPlaylist, setSelectedPlaylist] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const selectPlaylist = (playlist) => {
        setSelectedPlaylist(playlist);
        console.log(selectedPlaylist);
    };

    useEffect(() => {
        const fetchMyPlaylists = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/playlist/?userId=1");
                console.log(response.data);
                setManagesData(response.data);
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
                        {Array.isArray(managesData)
                            ? managesData.map((manageData, i) => (
                                <PlaylistBoard
                                    onPlaylistClick={selectPlaylist}
                                    playlistTitle={managesData[i].name}
                                    playlistImg={managesData[i].thumbnail}
                                    playlistTime="01:34"
                                    playlistVideo={6}
                                    openDate="2022.03"
                                    playlistDescription={managesData[i].description}
                                    creatorName={managesData[i].userName}
                                />
                            ))
                            : null}
                    </div>
                    {selectedPlaylist ? (
                        <div className="col-lg-8 text-start border-left">
                            <h3><i className="fa fa-play-circle-o pe-1"></i> {selectedPlaylist} </h3>
                            <div className="p-1">
                                <div className="row">
                                    <div className="m-0 col-md-3 col-sm-12" >
                                        <img className="img-fluid" style={{ minWidth: '150px' }}
                                            src="https://i.ytimg.com/vi/vorIqiLM7jc/default.jpg"
                                            alt="영상제목"
                                        />
                                    </div>
                                    <div className="col-md-9 col-sm-12">
                                        <div className="d-flex h4 text-start">
                                            {selectedPlaylist ? selectedPlaylist : '영상제목'}
                                        </div>
                                        <div className="d-flex fw-light ms-0 ps-0">
                                            채널명
                                            <div class="mx-1 border-start border-secondary">
                                            </div> 등록일 </div>
                                        <div className="d-flex fw-light"> 영상설명 </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-1">
                                <div className="row">
                                    <div className="m-0 col-md-3 col-sm-12" >
                                        <img className="img-fluid" style={{ minWidth: '150px' }}
                                            src="https://i.ytimg.com/vi/vorIqiLM7jc/default.jpg"
                                            alt="영상제목"
                                        />
                                    </div>
                                    <div className="col-md-9 col-sm-12">
                                        <div className="d-flex h4 text-start">
                                            {selectedPlaylist ? selectedPlaylist : '영상제목'}
                                        </div>
                                        <div className="d-flex fw-light ms-0 ps-0">
                                            채널명
                                            <div class="mx-1 border-start border-secondary">
                                            </div> 등록일 </div>
                                        <div className="d-flex fw-light"> 영상설명 </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-1">
                                <div className="row">
                                    <div className="m-0 col-md-3 col-sm-12" >
                                        <img className="img-fluid" style={{ minWidth: '150px' }}
                                            src="https://i.ytimg.com/vi/vorIqiLM7jc/default.jpg"
                                            alt="영상제목"
                                        />
                                    </div>
                                    <div className="col-md-9 col-sm-12">
                                        <div className="d-flex h4 text-start">
                                            {selectedPlaylist ? selectedPlaylist : '영상제목'}
                                        </div>
                                        <div className="d-flex fw-light ms-0 ps-0">
                                            채널명
                                            <div class="mx-1 border-start border-secondary">
                                            </div> 등록일 </div>
                                        <div className="d-flex fw-light"> 영상설명 </div>
                                    </div>
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