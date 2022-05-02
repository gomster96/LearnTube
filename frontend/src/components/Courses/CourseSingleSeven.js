import React from 'react';
import { Link } from 'react-router-dom';

const CourseSingleSeven = (props) => {
    const { courseClass, courseImg, courseTitle, coursePrice } = props;
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
                    <li><span className="price">{coursePrice ? coursePrice : '$40.00'}</span></li>
                </ul>
                <h3 className="title"><Link to="/course/course-single">{courseTitle ? courseTitle : 'Artificial Intelligence Fundamental Startup Learn'}</Link></h3>
            </div>
        </div>
    )
}

export default CourseSingleSeven