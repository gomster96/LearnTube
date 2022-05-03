
import { Link } from 'react-router-dom';

const SinglePostThree = (props) => {
    const { blogClass, blogImage, blogTitle, contentClass, blogDesc, btnClass, cmtQnty, blogAuthor, blogPublishedDate, blogButtonText } = props;
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
                    <li className="admin"><i className="fa fa-user-o"></i> {blogAuthor ? blogAuthor : 'admin'}</li>
                    <li className="date"><i className="fa fa-calendar-check-o"></i> {blogPublishedDate ? blogPublishedDate : 'June 15, 2019'}</li>
                </ul>
                <h3 className="title">
                    <Link to="/blog/single-post-right-sidebar">
                        {blogTitle ? blogTitle : 'Open Source Job Report Show More Openings Fewer '}
                    </Link>
                </h3>
                <div className="desc">{blogDesc ? blogDesc : 'We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that...'}</div>
                <ul className="blog-bottom">
                    <li className="cmnt-part">
                        <Link to="/blog/single-post-right-sidebar#">
                            {cmtQnty ? cmtQnty : '12'} Comments
                        </Link>
                    </li>
                    <li className="btn-part">
                        <Link to="/blog/single-post-right-sidebar">
                            <a className={btnClass ? btnClass : 'readon-arrow'}>{blogButtonText ? blogButtonText : 'Read More'}</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default SinglePostThree