import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import YoutubeBoard from '../../components/Events/YoutubeBoard';

const YoutubeVideoListWidget = ({ videos, onVideoClick, nextPageToken, prevPageToken, getToken,cartClick,cartUnclick,cart }) => {
    const [searchedVideos, setSearchedVideos] = useState([]);

    const clickPageToken = (value) => {
        getToken(value);
    };
    useEffect(function () {
        setSearchedVideos(videos);
        // console.log(videos);
        // console.log(searchedVideos);
    }, [videos]);

    useEffect(function(){
        console.log(cart);
    },[cart]);

    return searchedVideos ? (
        <div className=" mb-50 py-3 ">
            <div id="rs-popular-course" className="rs-popular-courses list-view style1 course-view-style orange-style rs-inner-blog white-bg pb-100 md-pt-70 md-pb-80 text-start">
                <div className="container">
                    <div className="course-part clearfix m-0">
                        {searchedVideos.map(function(video){
                            let isAlreadyIncart = cart.hasOwnProperty(video.id.videoId);
                            //console.log(video.snippet.title+" "+isAlreadyIncart);
                            return <YoutubeBoard
                                key={video.id.videoId}
                                video={video}
                                onVideoClick={onVideoClick}
                                videoNew={video}
                                addVideoToCart={cartClick}
                                deleteVideoFromCart = {cartUnclick}
                                isAlreadyIncart= {isAlreadyIncart}
                                cart={cart}
                                //duration={video.contentDetails.duration}
                                //viewCount ={video.statistics.viewCount}
                            />
                    })}
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