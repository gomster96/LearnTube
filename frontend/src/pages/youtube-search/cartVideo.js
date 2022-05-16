import React, { useEffect } from 'react';
import { useState, useCallback } from 'react';

import 'rc-slider/assets/index.css'


const CartVideo = (videos) => {


    const [video, setVideo] = useState(null);
    setVideo(videos);

    return (
        <div className="p-1 row " >
            <div className="m-0 col-md-3 col-sm-12 d-flex justify-content-center">
                <img className="img-fluid" style={{ minWidth: '100px', marginBottom: '10%' }}
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                />
            </div>
            <div className="col-md-8 col-sm-12" >
                <div className="d-flex h4">
                    {video.snippet.title ? video.snippet.title : '영상제목'}
                </div>
                <div className="d-flex fw-light ms-0 ps-0">
                    {video.snippet.channelTitle ? video.snippet.channelTitle : '채널명'}
                    <div class="mx-1 border-start border-secondary"></div> {video.snippet.publishTime ? video.snippet.publishTime.slice(0, 10) : '등록일'}
                </div>
                <div className="d-flex fw-light">
                    {video.snippet.description ? video.snippet.description : '영상설명'}
                </div>

            </div>

            <hr></hr>
        </div>

    );
}

export default Cart