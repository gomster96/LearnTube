import React from 'react';
import { Link } from 'react-router-dom';

const PostNavigation = ({ }) => {
    return (
        <div className="ps-navigation">
            <ul>
                <li><Link to="#"><span className="next-link">Next<i className="flaticon-next"></i></span></Link></li>
                <li><Link to="#"><span className="link-text">Soundtrack filma Lady Exclusive Music </span></Link></li>
            </ul>
        </div>
    )
}

export default PostNavigation;