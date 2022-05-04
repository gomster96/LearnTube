import React from 'react';
import { Link } from 'react-router-dom';

const CourseSingleTwo = (props) => {
    const { courseClass, courseImg, courseTitle, catLink, coursePrice, courseCategory, userCount, userRating } = props;
    return (
        <div className={courseClass ? courseClass : 'courses-item'}>
            <div className="img-part">
                <img
                    src={courseImg}
                    alt={courseTitle}
                />
            </div>
            <div className="content-part">
                <ul className="meta-part">
                    <li><span className="price">{coursePrice ? coursePrice : '55.00'}</span></li>
                    <li><Link className="categorie" to={catLink ? catLink : 'course-categories'}>{courseCategory ? courseCategory : 'Web Development'}</Link></li>
                </ul>
                <h3 className="title"><Link to="/course/course-single">{courseTitle ? courseTitle : 'Become a PHP Master and Make Money Fast'}</Link></h3>
                <div className="bottom-part">
                    <div className="info-meta">
                        <ul>
                            <li className="user"><i className="fa fa-user"></i> {userCount ? userCount : '245'}</li>
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

export default CourseSingleTwo