import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import YoutubeBoard from '../../components/Events/YoutubeBoard';

const YoutubeVideoListWidget = ({ videos, onVideoClick, nextPageToken, prevPageToken, getToken }) => {
    const [searchedVideos, setSearchedVideos] = useState([]);

    const clickPageToken = (value) => {
        getToken(value);
    };
    useEffect(function () {
        setSearchedVideos(videos);
        // console.log(videos);
        // console.log(searchedVideos);
    }, [videos]);

    return searchedVideos ? (
        <div className=" mb-50 py-3 ">
            <div id="rs-popular-course" className="rs-popular-courses list-view style1 course-view-style orange-style rs-inner-blog white-bg pb-100 md-pt-70 md-pb-80 text-start">
                <div className="container">
                    <div className="course-part clearfix m-0">
                        {searchedVideos.map((video) => (
                            <YoutubeBoard
                                key={video.id.videoId}
                                video={video}
                                onVideoClick={onVideoClick}
                                videoNew={video}
                                //duration={video.contentDetails.duration}
                                //viewCount ={video.statistics.viewCount}
                            />
                        ))}
                    </div>
                </div>
                <div className="pagination-area orange-color text-center mt-30 md-mt-0">
                    <ul className="pagination-part">
                        {prevPageToken ? <li onClick={(e) => clickPageToken(prevPageToken)} ><Link to="#"><i className="fa fa-long-arrow-left"></i>&nbsp;&nbsp;Prev</Link></li> : null}
                        {nextPageToken ? <li onClick={(e) => clickPageToken(nextPageToken)} ><Link to="#">Next <i className="fa fa-long-arrow-right"></i></Link></li> : null}

                    </ul>
                </div>
            </div>
        </div>
    ) : (<div>검색중...</div>)
}

export default YoutubeVideoListWidget;