
import { Link } from 'react-router-dom';

const SinglePostTwo = (props) => {
    const { blogClass, blogImage, blogTitle, blogAuthor, blogPublishedDate, blogButtonClass, blogButtonText, ImgOrder } = props;
    return (
        <div className={blogClass ? blogClass : 'row align-items-center no-gutter white-bg blog-item mb-30'}>
            <div className={ImgOrder == 'last' ? 'col-md-6 order-last' : 'col-md-6'}>
                <div className="image-part">
                    <Link to="/blog/single-post-right-sidebar">
                        <img
                            src={blogImage}
                            alt={blogTitle}
                        />
                    </Link>
                </div>
            </div>
            <div className="col-md-6">
                <div className="blog-content">
                    <ul className="blog-meta">
                        <li className="admin"><i className="fa fa-user-o"></i> {blogAuthor ? blogAuthor : 'Admin'}</li>
                        <li className="date"><i className="fa fa-calendar-check-o"></i> {blogPublishedDate ? blogPublishedDate : ' June 15, 2020'}</li>
                    </ul>
                    <h3 className="title">
                        <Link to="/blog/single-post-right-sidebar">
                            {blogTitle ? blogTitle : 'Open Source Job Report Show More Openings Fewer '}
                        </Link>
                    </h3>
                    <div className="btn-part">
                        <Link to="/blog/single-post-right-sidebar" className={blogButtonClass ? blogButtonClass : 'readon-arrow'}>
                            {blogButtonText ? blogButtonText : 'Read More'}
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SinglePostTwo