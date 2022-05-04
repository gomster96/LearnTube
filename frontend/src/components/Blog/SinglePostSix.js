
import { Link } from 'react-router-dom';

const SinglePostSix = (props) => {
    const { blogClass, blogImage, blogTitle, blogAuthor, blogPublishedDate, blogCategory, blogDesc, blogButtonClass, blogButtonText } = props;
    return (
        <div className={blogClass ? blogClass : 'blog-item'}>
            <div className="blog-img">
                <Link to="/blog/single-post-right-sidebar">
                    <img
                        src={blogImage}
                        alt={blogTitle}
                    />
                </Link>
            </div>
            <div className="blog-content">
                <h3 className="blog-title">
                    <Link to="/blog/single-post-right-sidebar">
                        {blogTitle ? blogTitle : 'University while the lovely valley team work'}
                    </Link>
                </h3>
                <div className="blog-meta">
                    <ul className="btm-cate">
                        <li>
                            <div className="blog-date">
                                <i className="fa fa-calendar-check-o"></i> {blogPublishedDate ? blogPublishedDate : 'September 14, 2020'}
                            </div>
                        </li>
                        <li>
                            <div className="author">
                                <i className="fa fa-user-o"></i> {blogAuthor ? blogAuthor : 'Admin'}
                            </div>
                        </li>
                        <li>
                            <div className="tag-line">
                                <i className="fa fa-book"></i>
                                <Link to="/blog">{blogCategory ? blogCategory : 'University'}</Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="blog-desc">
                    {blogDesc ? blogDesc : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam... '}
                </div>
                <div className={blogButtonClass ? blogButtonClass : 'blog-button'}>
                    <Link to="/blog/single-post-right-sidebar" className="blog-btn">
                        {blogButtonText ? blogButtonText : 'Continue Reading'}
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default SinglePostSix