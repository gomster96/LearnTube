import React, { useCallback, memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';
import YouTube from 'react-youtube';
import Modal from 'react-modal';
import ModalVideo from 'react-modal-video';
import cartImg from '../../assets/img/icon/addVideo.png';
import outOfCart from '../../assets/img/icon/minus.png';

const YoutubeBoard = memo(({ video, video: { snippet, contentDetails }, onVideoClick,addVideoToCart,deleteVideoFromCart ,isAlreadyIncart,cart}) => {


    const onClick = useCallback(() => {
        onVideoClick(video);
       // setIsSelected(true);
       console.log(cart);
    }, [ video]);

    //const [isSelected, setIsSelected] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    const [searchedVideos, setSearchedVideos] = useState([]);
    useEffect(function () {
        setSearchedVideos(video);
    });

    const addCart = useCallback(() =>{
        console.log("add to cart");
            addVideoToCart(video);
            setIsAdded(true);
    },[]);

    const deleteCart = useCallback(()=>{
        setIsAdded(false);
        deleteVideoFromCart(video.id);
    },[]);

    // useEffect(function(){
    //     isAlreadyIncart = cart.hasOwnProperty(video.id);
    //     console.log("in Board cart");
    // },[cart]);

    return (
        <div className="p-0 row " >
                <div className="m-0 col-md-3 col-sm-12 d-flex justify-content-center">
                    <img className="img-fluid" style={{ minWidth: '100px',marginBottom: '10%'}}
                        src={snippet.thumbnails.medium.url}
                        alt={snippet.title} onClick={onClick}
                    />
                </div>
                <div className="col-md-8 col-sm-12" >
                    <div className="d-flex h4" onClick={onClick}>
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
                <div className='col-md-1 d-flex justify-content-center align-items-center'>
                    {isAdded || isAlreadyIncart
                    ? <img src={outOfCart} className='cart m-2' alt='delete from cart' onClick={deleteCart}></img>
                    : <img src={cartImg} className='cart m-2' alt='add to cart' onClick={addCart}></img>}
                </div>
                <hr></hr>
        </div>
    );
});

export default YoutubeBoard