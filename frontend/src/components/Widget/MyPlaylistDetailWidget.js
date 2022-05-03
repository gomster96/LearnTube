import React from 'react';
import { Link } from 'react-router-dom';
import Playlist_listview from '../Events/Playlist_listview';

const MyPlaylistDetailWidget = (props) => {
    const { playlistTitle, playlistImg, playlistTime, playlistVideo, creatorName, openDate } = props;

    return (
        <div className="playlist mb-50">
            <h3 className="widget-title">{playlistTitle}</h3>
            {/* <Playlist_listview
                playlistTitle={playlistTitle}
                playlistTime='50'
            /> */}
        </div>
    )
}

export default MyPlaylistDetailWidget;