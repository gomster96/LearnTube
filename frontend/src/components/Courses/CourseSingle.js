import React from 'react';
import { Link } from 'react-router-dom';

const CourseSingle = (props) => {
    return (
        <div className={props.itemClass}>
            <div className="courses-grid">
                <div className="img-part">
                    <Link to="/course/course-single">
                        <img
                            src={props.image}
                            alt={props.title}
                        />
                    </Link>
                </div>
                <div className="content-part">
                    <div className="info-meta">
                        <ul>
                            <li className="ratings">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <span>(1 rating)</span>
                            </li>
                        </ul>
                    </div>
                    <div className="course-price">
                        <span className="price">{props.pricing}</span>
                    </div>
                    <h3 className="title">
                        <Link to="/course/course-single">{props.title}</Link>
                    </h3>
                    <ul className="meta-part">
                        <li className="user">
                            <i className="fa fa-user"></i>
                            {props.studentQuantity} Students
                        </li>
                        <li className="user">
                            <i className="fa fa-file"></i>
                            {props.lessonsQuantity} Lessons
                        </li>
                    </ul>
                    <span className="course-qnty">{props.quantity}</span>
                </div>
            </div>
        </div>
    )
}

export default CourseSingle