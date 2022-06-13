import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import SectionTitle from "../../components/Common/SectionTitle";
//import CourseSingleFour from '../../components/Courses/CourseSingleFour';
import CourseSingleTwoCopy from "../../components/Courses/CourseSingleTwoCopy";
import "../../assets/css/courseList.css";
//import '../../assets/css/mainCourseList.css';

// Courses Image
import image1 from "../../assets/img/courses/7.jpg";
import image2 from "../../assets/img/courses/8.jpg";
import image3 from "../../assets/img/courses/9.jpg";

import bgImg from "../../assets/img/bg/course-shape-bg.jpg";
const bgStyle = {
    backgroundImage: `url(${bgImg})`,
    "background-size": "cover",
    "background-repeat": "no-repeat",
    "background-position": "center",
};

function Courses(props) {
    const location = useLocation();
    const userId = window.sessionStorage.getItem("userId");
    const history = useHistory();
    const [images, setImages] = useState([image1, image2, image3]);
    const [popularClass, setPopularClass] = useState([
        {
            classId: "",
            className: "",
            instructorName: "",
            numberOfTake: "",
            classRoomRegDate: "",
        },
    ]);

    useEffect(() => {
        const fetchPopularClass = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/classroom/popular`);
                setPopularClass(response.data);
            } catch (err) {
                console.log("err >> ", err);
            }
        };
        fetchPopularClass();
    }, []);

    const coursesSliderSettings = {
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };

    const clickCourse = (i) => {
        if (userId) {
            history.replace({
                pathname: "/learntube/course/course-single",
                state: { classId: popularClass[i].classId },
            });
        } else {
            alert("로그인이 필요합니다.");
        }
    };

    return (
        <React.Fragment>
            <div className="rs-popular-courses style1 pb-200 orange-style md-pb-170 sm-pb-100" style={bgStyle}>
                <div className="container">
                    <div className="row y-middle mb-50">
                        <div className="col-lg-6">
                            <SectionTitle sectionClass="sec-title" subtitleClass="sub-title primary" subtitle="수강생이 가장 많은" titleClass="title mb-0" title="Popular Courses" />
                        </div>
                    </div>
                    <Slider {...coursesSliderSettings}>
                        {popularClass
                            ? popularClass.map((classes, i) => (
                                  <div onClick={clickCourse.bind(this, i)}>
                                      <CourseSingleTwoCopy
                                          userId={userId}
                                          courseClass="courses-item mb-30"
                                          courseImg={popularClass[i].image}
                                          courseTitle={popularClass[i].className}
                                          newCourse="New"
                                          openDate={popularClass[i].classRoomRegDate.split("-")[0] + "." + popularClass[i].classRoomRegDate.split("-")[1]}
                                          creatorName={popularClass[i].instructorName}
                                          userCount={popularClass[i].numberOfTake}
                                      />
                                  </div>
                              ))
                            : null}
                    </Slider>
                    <div className="view-all-btn text-center pt-50 mb-60 md-pt-30 md-mb-30">
                        Start Learning With Our Online Courses.
                        <Link className="title-color" to="/learntube/course">
                            {" "}
                            View All Courses <i className="flaticon-right-arrow ml-6 body-color"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Courses;
