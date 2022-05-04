import React from 'react';
import { Link } from 'react-router-dom';

const CourseSingleFive = (props) => {
    const { courseClass, courseImg, courseTitle, catLink, coursePrice, categoryClass, courseCategory, author, authorImg, userCount, userRating } = props;
    return (
        <div className={courseClass ? courseClass : 'courses-item'}>
            <div className="img-part">
                <img
                    src={courseImg}
                    alt={courseTitle}
                />
            </div>
            <div className="content-part">
                <span><Link className={categoryClass ? categoryClass : 'categories bg3'} to={catLink ? catLink : 'course-categories'}>{courseCategory ? courseCategory : 'Web Development'}</Link></span>
                <ul className="meta-part">
                    <li className="user"><i className="fa fa-user"></i> {userCount ? userCount : '245'}</li>
                    <li className="ratings">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        ({userRating ? userRating : '05'})
                    </li>
                </ul>
                <h3 className="title"><Link to="/course/course-single">{courseTitle ? courseTitle : 'Become a PHP Master and Make Money Fast'}</Link></h3>
                <div className="images mb-32 md-mb-16">
                    <div className="img-part">
                        <img src={authorImg} alt="Author" />
                    </div>
                    <span>By {author ? author : 'Admin'} in {courseCategory ? courseCategory : 'Web Development'}</span>
                </div>
                <div className="bottom-part">
                    <div className="info-meta">
                        <ul>
                            <li>{coursePrice ? coursePrice : '$25'}</li>
                        </ul>
                    </div>
                    <div className="btn-part">
                        <Link to="/course/course-single">
                            {props.btnText}<i className="flaticon-right-arrow"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseSingleFive