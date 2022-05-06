import React, { useCallback, memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';
import YouTube from 'react-youtube';
import Modal from 'react-modal';
import ModalVideo from 'react-modal-video';
import cart from '../../assets/img/icon/addVideo.png';
import outOfCart from '../../assets/img/icon/minus.png';

const YoutubeBoard = memo(({ video, video: { snippet, contentDetails }, onVideoClick,addVideoToCart,deleteVideoFromCart ,isAlreadyIncart}) => {

    const onClick = useCallback(() => {
        onVideoClick(video);
    }, [onVideoClick, video]);

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);
    const [isAdded, setIsAdded] = useState(false);

    const [searchedVideos, setSearchedVideos] = useState([]);
    useEffect(function () {
        setSearchedVideos(video);
    });

    const addCart = useCallback(() =>{
        console.log("add to cart");
            addVideoToCart(video);
            setIsAdded(true);
    },[addVideoToCart,video]);

    const deleteCart = useCallback(()=>{
        setIsAdded(false);
        deleteVideoFromCart(video.id);
    },[]);

    return (
        <div className='courses-item p-0 m-1 rounded-0 d-flex justify-content-between' >
            <div onClick={onClick}>
                <div className="m-0" >
                    <img style={{ height: '100px' }}
                        src={snippet.thumbnails.medium.url}
                        alt={snippet.title}
                    />
                </div>
                <div className="content-part">
                    <div className="row ps-3 mb-3">
                        <h3 className="title">
                            <Link  className='eclipse'>{snippet.title ? snippet.title : '강의제목'}</Link>
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

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
                {isAdded || isAlreadyIncart
                ? <img src={outOfCart} className='cart m-2' alt='delete from cart' onClick={deleteCart}></img>
                : <img src={cart} className='cart m-2' alt='add to cart' onClick={addCart}></img>}
        </div>
    )
});

export default YoutubeBoard