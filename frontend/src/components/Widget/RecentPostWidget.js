import React from 'react';
import { Link } from 'react-router-dom';

const RecentPostWidget = () => {
    return (
        <div className="recent-posts mb-50">
            <h3 className="widget-title">Recent Posts</h3>
            <ul>
                <li><Link to="/blog/single-post-right-sidebar">University while the lovely valley team work</Link></li>
                <li><Link to="/blog/single-post-right-sidebar">High school program starting soon 2021</Link></li>
                <li><Link to="/blog/single-post-right-sidebar">Modern School the lovely valley team work</Link></li>
                <li><Link to="/blog/single-post-right-sidebar">While the lovely valley team work</Link></li>
                <li><Link to="/blog/single-post-right-sidebar">This is a great source of content for anyone…</Link></li>
            </ul>
        </div>
    )
}

export default RecentPostWidget;