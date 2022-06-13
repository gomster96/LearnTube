import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ProgressBar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const CourseDashBoard = (props) => {
    const { courseClass, courseImg, courseTitle, progress, userCount, notice, creatorName, openDate, classId } = props;

    return (
        <div className={courseClass ? courseClass : "courses-item"}>
            <div className="img-part">
                <img style={{ height: "150px" }} src={courseImg} alt={courseTitle} />
            </div>

            <div className="content-part" style={{ width: "80%" }}>
                <div className="row">
                    <h3 className="title" onClick={() => {}}>
                        <Link
                            to={{
                                pathname: "/learntube/course/course-single",
                                state: { classId: classId },
                            }}
                        >
                            {courseTitle ? courseTitle : "강의제목"}
                        </Link>
                    </h3>
                    <p className="creatorName text-end">{creatorName ? creatorName : "-"}</p>
                </div>
                <ul className="meta-part text-start">
                    <li>학습현황</li>
                    <li>
                        <ProgressBar now={progress} label={`${progress}%`} />
                    </li>
                </ul>
                <div className="info-meta">
                    <div className="row">
                        <div className="col">
                            <ul>
                                <li className="user">
                                    <i className="fa fa-bullhorn"></i>공지
                                </li>
                                <li className="notice">
                                    <span>{notice ? notice : "공지가 없습니다."}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="pull-right">
                                <li className="user">
                                    <i className="fa fa-user"></i> {userCount ? userCount : 0}
                                </li>
                                <li className="date">
                                    <span>{openDate ? openDate : "-"}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDashBoard;
