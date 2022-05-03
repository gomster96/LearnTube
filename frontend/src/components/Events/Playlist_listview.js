import React, {useState, useCallback} from 'react';
import { Link } from 'react-router-dom';

const Playlist_listview = ( {playlistTitle, playlistTime, onPlaylistClick} ) => {
   
    const [newPlaylistTitle, setNewPlaylistTitle] = useState(false);
   
    const onClick = useCallback(() => {
        onPlaylistClick(playlistTitle);
        setNewPlaylistTitle(playlistTitle);
    }, [onPlaylistClick, playlistTitle]);

    return (
        <div className="row py-2 mx-1 border-bottom" onClick={onClick}>
            <div className="col-8 text-start ps-3" >
                <i className="fa fa-play-circle-o pe-1"></i>
                {playlistTitle ? playlistTitle : '제목 없는 playlist' }
            </div>
            <div className="col-4">
                {playlistTime ? playlistTime + 'min' : 'time'}
            </div>
        </div>
    )
}

export default Playlist_listview