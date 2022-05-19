import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios, * as others from "axios";

import CourseSidebar from "./CourseSidebarSection";
import "../../assets/css/courseList.css";
import CourseSingleTwoCopy from "../../components/Courses/CourseSingleTwoCopy";

// Course courseImg
import courseImg1 from "../../assets/img/courses/1.jpg";
import SearchBar from "./SearchBar";

const CoursePart = (props) => {
    const [courses, setCourse] = useState([]);
    const [filterStatus, setFilterStatus] = useState({ condition: 0, keyword: "", page: 0, size: 12 });
    const getCourse = async () => {
        console.log(filterStatus);
        const courseData = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/classroom/courses`, {
            params: filterStatus,
        });
        setCourse(courseData.data);
    };

    useEffect(() => {
        getCourse();
    }, [filterStatus]);

    return (
        <div id="rs-popular-course" className="rs-popular-courses style1 course-view-style orange-style rs-inner-blog white-bg pb-100 md-pb-80">
            <div className="container">
                <div className="row">
                    <div className="row-mk">
                        <div className="widget-area-mk">
                            <SearchBar setFilterStatus={setFilterStatus} />
                        </div>
                        <div className="widget-area">
                            <div className="type-form-mk">
                                <form method="post" action="#">
                                    <div className="form-group mb-0">
                                        <div className="custom-select-box">
                                            <select id="timing">
                                                <option>Default</option>
                                                <option>Newest</option>
                                                <option>Old</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* {renderCourses} */}
                    {courses
                        ? courses.map((course) => {
                              return (
                                  <div className="col-lg-4 col-md-6">
                                      <CourseSingleTwoCopy
                                          courseClass="courses-item mb-30"
                                          courseId={course.classId}
                                          courseImg={courseImg1}
                                          courseTitle={course.className}
                                          newCourse="New"
                                          userCount={course.numberOfTake}
                                          openDate={course.regDate}
                                          creatorName={course.instructorName}
                                      />
                                  </div>
                              );
                          })
                        : null}

                    <div className="pagination-area orange-color text-center mt-30 md-mt-0">
                        <ul className="pagination-part">
                            <li className="active">
                                <Link to="#">1</Link>
                            </li>
                            <li>
                                <Link to="#">2</Link>
                            </li>
                            <li>
                                <Link to="#">
                                    Next <i className="fa fa-long-arrow-right"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};

export default CoursePart;
