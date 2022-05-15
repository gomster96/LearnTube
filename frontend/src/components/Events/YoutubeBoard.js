import React, { useCallback, memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';
import YouTube from 'react-youtube';
import Modal from 'react-modal';
import ModalVideo from 'react-modal-video';

const YoutubeBoard = memo(({ video, video: { snippet, contentDetails }, onVideoClick }) => {

    const onClick = useCallback(() => {
        onVideoClick(video);
        setIsSelected(true);
    }, [onVideoClick, video]);

    const [isOpen, setIsOpen] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    const [searchedVideos, setSearchedVideos] = useState([]);
    useEffect(function () {
        setSearchedVideos(video);
    });
    // let duration = 'PT9M33S';
    //let duration = contentDetails.duration;
    //if(!contentDetails.duration) duration = 'PT9M50S';
    // 시간 customizing
    // let whereH = duration.indexOf('H');
    // let whereM = duration.indexOf('M');
    // let whereS = duration.indexOf('S');
    // let hour, min, sec;
    // let finalDuration = '';
    // if (whereH > -1) {
    //     let tempDuration = duration.split('H');
    //     let temp_length = tempDuration[0].length;
    //     hour = tempDuration[0].substring(2, temp_length);
    //     finalDuration = finalDuration + hour + "시간 ";
    // }
    // if (whereM > -1) {
    //     let tempDuration = duration.split('M');
    //     let temp_length = tempDuration[0].length;
    //     if (whereH > -1) {
    //         min = tempDuration[0].substring(whereH + 1, temp_length);
    //     } else min = tempDuration[0].substring(2, temp_length);
    //     finalDuration = finalDuration + min + "분 ";
    // }
    // if (whereS > -1) {
    //     let tempDuration = duration.split('S');
    //     let temp_length = tempDuration[0].length;
    //     if (whereH > -1 && whereM == -1) {
    //         sec = tempDuration[0].substring(whereH + 1, temp_length);
    //     } else if (whereM > -1) {
    //         sec = tempDuration[0].substring(whereM + 1, temp_length);
    //     } else sec = tempDuration[0].substring(2, temp_length);
    //     finalDuration = finalDuration + sec + "초";
    // }
    // 시간 customizing 끝

    //let viewCount = 123;
    //조회수 customizing
    // let viewCountInt = parseFloat(viewCount);
    // let newViewCount;
    // if (viewCountInt >= 100000000) {
    //      newViewCount = (viewCountInt / 100000000.0).toFixed(1) + "억";
    // } else if (viewCountInt >= 10000) {
    //      newViewCount = (viewCountInt / 10000.0).toFixed(0) + "만";
    // } else if (viewCountInt > 1000) {
    //     newViewCount = (viewCountInt / 1000.0).toFixed(1) + "천";
    // } else newViewCount = viewCountInt;
    //조회수 customizing 끝

    return (
        <div className='courses-item p-0 m-1 rounded-0' onClick={onClick}>
            <div className="m-0" >
                <img style={{ height: '100px' }}
                    src={snippet.thumbnails.medium.url}
                    alt={snippet.title}
                />
            </div>
            <div className="content-part" style={{ width: '60%' }}>
                <div className="row ps-3 mb-3">
                    <h3 className="title">
                        <Link >{snippet.title ? snippet.title : '강의제목'}</Link>
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={video.id} onClose={() => { openModal(); }} />
                    </h3>
                </div>
                <div className="info-meta p-0">
                    <div className="row">
                        <ul>
                            <li>
                                <i className="fa fa-user pe-1 "></i> {snippet.channelTitle ? snippet.channelTitle : '-'}
                            </li>
                            {/* <li>
                                <i className="fa fa-youtube-play pe-1 "></i> {viewCount ? newViewCount : '0'}
                            </li>
                            <li>
                                <i className="fa fa-clock-o pe-1"></i>{duration? finalDuration : '0'}
                            </li>  */}
                            {/* <li>
                                <i className="fa fa-clock-o pe-1"></i>{duration ? finalDuration : '0'}
                            </li>  */}
                            {/* <li>
                                    <i className="fa fa-calendar-o pe-1"></i>{regDate ? regDate : '-'} 
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default YoutubeBoard