
import { Link } from 'react-router-dom';

const SinglePostFour = (props) => {
    const { blogClass, blogImage, blogTitle, contentClass, blogAuthor, blogPublishedDate, categoryClass, blogCategory } = props;
    return (
        <div className={blogClass ? blogClass : 'blog-item'}>
            <div className="image-part">
                <Link to="/blog/single-post-right-sidebar">
                    <img
                        src={blogImage}
                        alt={blogTitle}
                    />
                </Link>
            </div>
            <div className={contentClass ? contentClass : 'blog-content'}>
                <span className={categoryClass ? categoryClass : 'categories uppercase'}>{blogCategory ? blogCategory : 'Health'}</span>
                <h3 className="title mt-10 mb-10">
                    <Link to="/blog/single-post-right-sidebar">
                        {blogTitle ? blogTitle : 'Open Source Job Report Show More Openings Fewer'}
                    </Link>
                </h3>
                <ul className="blog-meta">
                    <li className="admin"><i className="fa fa-user-o"></i> {blogAuthor ? blogAuthor : 'admin'}</li>
                    <li className="date"><i className="fa fa-calendar-check-o"></i> {blogPublishedDate ? blogPublishedDate : 'June 15, 2019'}</li>
                </ul>
            </div>
        </div>

    )
}

export default SinglePostFour