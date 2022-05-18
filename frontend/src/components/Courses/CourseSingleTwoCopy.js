import React from "react";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

const CourseSingleTwoCopy = (props) => {
    const { courseId, courseClass, courseImg, courseTitle, newCourse, userCount, openDate, creatorName } = props;
    return (
        <div className={courseClass ? courseClass : "courses-item"}>
            <div className="img-part content-part">
                <img src={courseImg} alt={courseTitle} />
                {newCourse ? (
                    <ul className="meta-part new-part">
                        <li>
                            <span className="price">{newCourse ? "New" : null}</span>
                        </li>
                    </ul>
                ) : null}
            </div>
            <div className="content-part">
                <h4 className="title title-mk" data-for={courseTitle} data-tip>
                    <Link to="/course/course-single">{courseTitle ? courseTitle : "강의의 제목이 설정되지 않았습니다."}</Link>
                </h4>
                <ReactTooltip id={courseTitle}>{courseTitle}</ReactTooltip>
                <div className="bottom-part">
                    <div className="info-meta">
                        <p className="creatorName">{creatorName ? creatorName : "-"}</p>
                        <ul>
                            <li className="user">
                                <i className="fa fa-user"></i> {userCount ? userCount : "245"}
                            </li>
                            <li className="ratings">
                                <span>{openDate ? openDate : "-"}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="btn-part">
                        <Link to="/course/course-single">
                            {props.btnText}
                            <i className="flaticon-right-arrow"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseSingleTwoCopy;
