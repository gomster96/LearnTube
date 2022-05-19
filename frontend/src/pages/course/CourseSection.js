import React, { useState, useEffect } from "react";
import axios, * as others from "axios";

import CourseSidebar from "./CourseSidebarSection";
import "../../assets/css/courseList.css";
import CourseSingleTwoCopy from "../../components/Courses/CourseSingleTwoCopy";

import courseImg1 from "../../assets/img/courses/1.jpg";
import SearchBar from "./SearchBar";
import PagingBar from "./PagingBar";

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
                    {courses ? <PagingBar page={filterStatus.page} totalPage={courses.length !== 0 ? courses[0].totalPage : 0} setFilterStatus={setFilterStatus} /> : null}
                </div>
            </div>
        </div>
    );
};

export default CoursePart;
