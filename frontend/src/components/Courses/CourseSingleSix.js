import React from 'react';
import { Link } from 'react-router-dom';

const CourseSingleSix = (props) => {
    const { courseClass, courseImg, courseTitle, coursePrice, userCount, userRating } = props;
    return (
        <div className={courseClass ? courseClass : 'course-item'}>
            <div className="course-image">
                <Link to="/course/course-single">
                    <img
                        src={courseImg}
                        alt={courseTitle}
                    />
                </Link>
            </div>
            <div className="course-info">
                <ul className="meta-part">
                    <li><span className="price">{coursePrice ? coursePrice : '$55.00'}</span></li>
                    <li className="user"><i className="fa fa-user"></i> {userCount ? userCount : '245'}</li>
                </ul>
                <h3 className="course-title"><Link to="/course/course-single">{courseTitle ? courseTitle : 'Become a PHP Master and Make Money Fast'}</Link></h3>
                <div className="bottom-part">
                    <div className="info-meta">
                        <ul>
                            <li className="ratings">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <span>({userRating ? userRating : '05'})</span>
                            </li>
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

export default CourseSingleSix