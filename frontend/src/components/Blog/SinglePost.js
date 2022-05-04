
import { Link } from 'react-router-dom';

const SinglePost = (props) => {
    const { blogClass, blogImage, blogTitle, contentClass, blogDesc, blogCategory, blogAuthor, blogPublishedDate, blogButtonClass, blogButtonText } = props;
    return (
        <div className={blogClass ? blogClass : 'blog-item mb-44'}>
            <div className="image-part">
                <Link to="/blog/single-post-right-sidebar">
                    <img
                        src={blogImage}
                        alt={blogTitle}
                    />
                </Link>
            </div>
            <div className={contentClass ? contentClass : 'blog-content'}>
                <ul className="blog-meta">
                    <li className="date"><i className="fa fa-calendar-check-o"></i> {blogPublishedDate ? blogPublishedDate : ' January 21, 2021'}</li>
                    <li className="admin"><i className="fa fa-user-o"></i> {blogAuthor ? blogAuthor : 'admin'}</li>
                </ul>
                <h3 className="title">
                    <Link to="/blog/single-post-right-sidebar">
                        {blogTitle ? blogTitle : 'Open Source Job Report Show More Openings Fewer '}
                    </Link>
                </h3>
                <div className="desc">{blogDesc ? blogDesc : 'We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that...'}</div>
                <div className="btn-btm">
                    <div className="cat-list">
                        <ul className="post-categories">
                            <li>
                                <Link to="/blog">
                                    {blogCategory ? blogCategory : 'Application Testing'}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={blogButtonClass ? blogButtonClass : 'rs-view-btn'}>
                        <Link to="/blog/single-post-right-sidebar">
                            {blogButtonText ? blogButtonText : 'Read More'}
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SinglePost