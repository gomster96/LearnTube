import React from 'react';
import { Link } from 'react-router-dom';

// Recent Post Thumb Images
import thumb1 from '../../assets/img/blog/style2/1.jpg'
import thumb2 from '../../assets/img/blog/style2/2.jpg'
import thumb3 from '../../assets/img/blog/style2/3.jpg'
import thumb4 from '../../assets/img/blog/style2/4.jpg'
import thumb5 from '../../assets/img/blog/style2/5.jpg'

const RecentPost = () => {
    return (
        <div className="recent-posts-widget mb-50">
            <h3 className="widget-title">Recent Posts</h3>
            <div className="show-featured">
                <div className="post-img">
                    <Link to="/blog/single-post-right-sidebar">
                        <img
                            src={thumb1}
                            alt=""
                        />
                    </Link>
                </div>
                <div className="post-desc">
                    <Link to="/blog/single-post-right-sidebar">Covid-19 threats the generation</Link>
                    <span className="date">
                        <i className="fa fa-calendar"></i>
                        April 6, 2020
                    </span>
                </div>
            </div>
            <div className="show-featured">
                <div className="post-img">
                    <Link to="/blog/single-post-right-sidebar">
                        <img
                            src={thumb2}
                            alt=""
                        />
                    </Link>
                </div>
                <div className="post-desc">
                    <Link to="/blog/single-post-right-sidebar">Soundtrack filma Exclusive Music</Link>
                    <span className="date">
                        <i className="fa fa-calendar"></i>
                        April 6, 2020
                    </span>
                </div>
            </div>
            <div className="show-featured">
                <div className="post-img">
                    <Link to="/blog/single-post-right-sidebar">
                        <img
                            src={thumb3}
                            alt=""
                        />
                    </Link>
                </div>
                <div className="post-desc">
                    <Link to="/blog/single-post-right-sidebar">Soundtrack filma Exclusive Music</Link>
                    <span className="date">
                        <i className="fa fa-calendar"></i>
                        April 6, 2020
                    </span>
                </div>
            </div>
            <div className="show-featured">
                <div className="post-img">
                    <Link to="/blog/single-post-right-sidebar">
                        <img
                            src={thumb4}
                            alt=""
                        />
                    </Link>
                </div>
                <div className="post-desc">
                    <Link to="/blog/single-post-right-sidebar">Given void great you’re good</Link>
                    <span className="date">
                        <i className="fa fa-calendar"></i>
                        April 6, 2020
                    </span>
                </div>
            </div>
            <div className="show-featured">
                <div className="post-img">
                    <Link to="/blog/single-post-right-sidebar">
                        <img
                            src={thumb5}
                            alt=""
                        />
                    </Link>
                </div>
                <div className="post-desc">
                    <Link to="/blog/single-post-right-sidebar">Lights winged seasons fish</Link>
                    <span className="date">
                        <i className="fa fa-calendar"></i>
                        April 6, 2020
                    </span>
                </div>
            </div>
        </div>
    )
}

export default RecentPost;