import React from 'react';
import { Link } from 'react-router-dom';

const CourseSingleThree = (props) => {
    const { courseClass, courseCategory, courseImg, courseTitle, catLink, coursePrice, userRating, studentQuantity } = props;

    return (
        <div className={courseClass ? courseClass : 'course-wrap'}>
            <div className="front-part">
                <div className="img-part">
                    <Link to="/course/course-single">
                        <img
                            src={courseImg}
                            alt={courseTitle}
                        />
                    </Link>
                </div>
                <div className="content-part">
                    <Link className="categorie" to={catLink ? catLink : 'course-categories'}>{courseCategory ? courseCategory : 'Artificial Intelligence'}</Link>
                    <h4 className="title"><Link to="/course/course-single">{courseTitle ? courseTitle : 'Artificial Intelligence Fundamental Startup Learn'}</Link></h4>
                </div>
            </div>
            <div className="inner-part">
                <div className="content-part">
                    <Link className="categorie" to={catLink ? catLink : 'course-categories'}>{courseCategory ? courseCategory : 'Artificial Intelligence'}</Link>
                    <h4 className="title"><Link to="/course/course-single">{courseTitle ? courseTitle : 'Artificial Intelligence Fundamental Startup Learn'}</Link></h4>
                    <ul className="course-meta">
                        <li className="course-user">
                            <i className="fa fa-user"></i> {studentQuantity ? studentQuantity : '245'}
                        </li>
                        <li className="ratings">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <span>({userRating ? userRating : '05'})</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="price-btn">
                <Link to="/course/course-single">{coursePrice ? coursePrice : '$55.00'} <i className="flaticon-next"></i></Link>
            </div>
        </div>

    )
}

export default CourseSingleThree