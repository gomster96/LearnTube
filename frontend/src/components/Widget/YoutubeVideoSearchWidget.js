import React, { memo, useRef } from 'react';
import { useState } from 'react';

const YoutubeVideoSearchWidget = memo(({ onSearch }) => {
    // const [query,setQuery] = useState('');

    // const getInput = (e) => {
    //     setQuery(e.target.value);
    //     console.log(query);
    //   };

    // const clickSearch = () => {
    //     console.log("query before going up to parent:" + query);
    //     props.clickSearch(query);
    // };

    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    };
    const onClick = () => {
        handleSearch();
    };

    const onKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        // <div className="search-widget mb-50">
        //     <div className="search-wrap">
        //         <input type="search" placeholder="플레이리스트에 추가할 영상을 검색하세요" name="s" className="search-input" ref={inputRef} /*onChange={getInput}*/onKeyPress={onKeyPress} />
        //         <button type="submit" value="Search" onClick={onClick}><i className="fa fa-search"></i></button>
        //     </div>
        // </div>
        <div className="col search-wrap searchbtn">
            <input type="search" placeholder="플레이리스트에 추가할 영상을 검색하세요" name="s" className="search-input" ref={inputRef} onKeyPress={onKeyPress} />
            <button type="submit" value="Search" onClick={onClick}><i className="fa fa-search"></i></button>
        </div>
    )
});

export default YoutubeVideoSearchWidget;