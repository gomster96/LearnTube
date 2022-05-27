import React, { useState, useEffect, useRef } from "react";
import axios, * as others from "axios";

import CourseSidebar from "./CourseSidebarSection";
import "../../assets/css/courseList.css";
import CourseSingleTwoCopy from "../../components/Courses/CourseSingleTwoCopy";

import SearchBar from "./SearchBar";
import PagingBar from "./PagingBar";
import SortFilter from "./SortFilter";
import { Spinner } from "react-bootstrap";
const CoursePart = (props) => {
    const [courses, setCourse] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoading2, setIsLoading2] = useState(false);
    const [target, setTarget] = useState(null);
    const myPage = useRef(0);
    const [filterStatus, setFilterStatus] = useState({ condition: 0, keyword: "", page: 0, size: 12 });
    const [isLast, setIsLast] = useState(false);
    const getCourse = async () => {
        const courseData = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/classroom/courses`, {
            params: filterStatus,
        });
        setCourse(courseData.data);
        setIsLoading(false);
    };

    useEffect(() => {
        setIsLast(false);
        setIsLoading(true);
        getCourse();
        myPage.current = 0;
    }, [filterStatus]);

    const getNextData = async () => {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/classroom/courses`, {
            params: {
                condition: filterStatus.condition,
                keyword: filterStatus.keyword,
                page: ++myPage.current,
                size: 12,
            },
        });
        return response.data;
    };

    const onIntersect = async ([entry], observer) => {
        if (entry.isIntersecting && !isLoading2 && !isLast) {
            if (courses.length > 0 && courses[0].totalPage < myPage.current) observer.unobserve(entry.target);
            setIsLoading2(true);

            let nextData = await getNextData();

            setCourse((courselist) => courselist.concat(nextData));
            if (nextData.length === 0) setIsLast(true);
            setIsLoading2(false);
            observer.observe(entry.target);
        }
    };

    useEffect(() => {
        let observer;

        if (target) {
            observer = new IntersectionObserver(onIntersect, {
                threshold: 0.4,
            });
            observer.observe(target);
        }
        return () => observer && observer.disconnect();
    }, [target, filterStatus]);

    return (
        <>
            <div id="rs-popular-course" className="rs-popular-courses style1 course-view-style orange-style rs-inner-blog white-bg pb-100 md-pb-80">
                <div className="container">
                    <div className="row">
                        <div className="row-mk">
                            <div className="widget-area-mk">
                                <SearchBar setFilterStatus={setFilterStatus} setIsLast={setIsLast} />
                            </div>
                            <SortFilter setFilterStatus={setFilterStatus} setIsLast={setIsLast} />
                        </div>

                        {isLoading ? (
                            <div class="text-center" style={{ marginTop: "10%", height: "30rem" }}>
                                <Spinner animation="grow" variant="primary" style={{ width: "10rem", height: "10rem" }} />
                            </div>
                        ) : courses ? (
                            courses.map((course) => {
                                return (
                                    <div className="col-lg-4 col-md-6">
                                        <CourseSingleTwoCopy
                                            courseClass="courses-item mb-30"
                                            courseId={course.classId}
                                            courseImg={course.image}
                                            courseTitle={course.className}
                                            newCourse="New"
                                            userCount={course.numberOfTake}
                                            openDate={course.regDate}
                                            creatorName={course.instructorName}
                                        />
                                    </div>
                                );
                            })
                        ) : null}

                        {/* {courses ? <PagingBar page={filterStatus.page} totalPage={courses.length !== 0 ? courses[0].totalPage : 0} setFilterStatus={setFilterStatus} /> : null} */}
                    </div>
                </div>
            </div>
            <div ref={setTarget} />
        </>
    );
};

export default CoursePart;
