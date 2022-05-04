import React from 'react';
import { Link } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';


const PlaylistBoard = (props) => {
    const { playlistTitle, playlistImg, playlistTime, playlistVideo, creatorName, openDate } = props;

    return (
        <div className='courses-item p-0 m-4 rounded-0'>
            <div className="m-0" >
                <img style={{ height: '100px' }}
                    src={playlistImg}
                    alt={playlistTitle}
                />
            </div>
            <div className="content-part" style={{ width: '60%' }}>
                <div className="row ps-3 mb-3">
                    <h3 className="title">
                        <Link to="/learntube-studio/myPlaylist">{playlistTitle ? playlistTitle : '강의제목'}</Link>
                    </h3>
                </div>
                <div className="info-meta p-0">
                    <div className="row ps-2">
                            <ul>
                                <li>
                                    <i className="fa fa-user pe-1 "></i> {creatorName ? creatorName : '-'}
                                </li>
                                <li>
                                    <i className="fa fa-youtube-play pe-1 "></i> {playlistVideo ? playlistVideo : '0'}
                                </li>
                                <li>
                                    <i className="fa fa-clock-o pe-1"></i>{playlistTime ? playlistTime : '0'}
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaylistBoard