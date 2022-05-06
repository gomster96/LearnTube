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
        <div className="p-1 row " onClick={onClick}>
            <div className="m-0 col-md-3 col-sm-12" >
                <img className="img-fluid" style={{ minWidth: '100px' }}
                    src={snippet.thumbnails.medium.url}
                    alt={snippet.title}
                />
            </div>
            <div className="col-md-9 col-sm-12">
                <div className="d-flex h4">
                    {snippet.title ? snippet.title : '영상제목'}
                </div>
                <div className="d-flex fw-light ms-0 ps-0">
                    {snippet.channelTitle ? snippet.channelTitle : '채널명'}
                    <div class="mx-1 border-start border-secondary"></div> {snippet.publishTime ? snippet.publishTime.slice(0, 10) : '등록일'}
                </div>
                <div className="d-flex fw-light">
                    {snippet.description ? snippet.description : '영상설명'}
                </div>

            </div>
        </div>
    );
});

export default YoutubeBoard