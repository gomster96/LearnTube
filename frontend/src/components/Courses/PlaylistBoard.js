import React, {useState, useCallback} from 'react';
import { Link } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';


const PlaylistBoard = (props) => {
    const { playlistTitle, playlistImg, playlistTime, playlistVideo, creatorName, openDate, playlistDescription, onPlaylistClick } = props;

    const [newPlaylistTitle, setNewPlaylistTitle] = useState(false);

    const [isClicked, setIsClicked] = useState(false);

    const onClick = useCallback(() => {
        onPlaylistClick(playlistTitle);
        setNewPlaylistTitle(playlistTitle);
        setIsClicked(!isClicked);
    }, [onPlaylistClick, playlistTitle]);

    return (
        <div className="p-1 row" onClick={onClick}>
            <div className="col-lg-4 col-sm-12" >
                <img className="img-fluid" style={{ minWidth: '120px' }}
                    src={playlistImg}
                    alt={playlistTitle}
                />
            </div>
            <div className="col-lg-8 col-sm-12 pt-2">
                <div className={isClicked ? "d-flex h4 text-start orange-color" : "d-flex h4 text-start"}>
                    {playlistTitle ? playlistTitle : '강의제목'}
                </div>
                <div className="d-flex fw-light ms-0 ps-0">
                    <div><i className="fa fa-user pe-1 "></i> {creatorName ? creatorName : '-'}</div>
                    <div className="ms-3"><i className="fa fa-youtube-play pe-1 "></i> {playlistVideo ? playlistVideo : '0'}</div>
                    <div className="ms-3"><i className="fa fa-clock-o pe-1"></i>{playlistTime ? playlistTime : '0'}</div>
                </div>
                {/* <div className="d-flex fw-light ms-0 ps-0">
                    {playlistDescription}
                </div> */}
            </div>
        </div>
    )
}

export default PlaylistBoard