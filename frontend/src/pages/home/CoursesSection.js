import React from 'react';
import SectionTitle from '../../components/Common/SectionTitle';
import CourseSingle from '../../components/Courses/CourseSingle';

// Courses Image
import image1 from '../../assets/img/courses/main-home/1.jpg';
import image2 from '../../assets/img/courses/main-home/2.jpg';
import image3 from '../../assets/img/courses/home8/2.jpg';
import image4 from '../../assets/img/courses/home8/4.jpg';
import image5 from '../../assets/img/courses/home8/5.jpg';
import image6 from '../../assets/img/courses/home8/6.jpg';

const Courses = () => {

    return (
        <div className="rs-popular-courses main-home event-bg pt-100 pb-100 md-pt-70 md-pb-70">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title3 text-center mb-44"
                    subtitleClass="sub-title"
                    subtitle="Select Courses"
                    titleClass="title black-color"
                    title="Explore Popular Courses"
                />
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CourseSingle
                            itemClass="courses-item"
                            image={image1}
                            title="Fitness Development Strategy Buildup Laoreet"
                            pricing="Free"
                            studentQuantity="25"
                            lessonsQuantity="6"
                            courseLink="#"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CourseSingle
                            itemClass="courses-item"
                            image={image2}
                            title="Artificial Intelligence Fundamental Startup Justo"
                            pricing="$40.00"
                            studentQuantity="33"
                            lessonsQuantity="4"
                            courseLink="#"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CourseSingle
                            itemClass="courses-item"
                            image={image3}
                            title="Computer Science Startup Varius et Commodo"
                            pricing="$35.00"
                            studentQuantity="21"
                            lessonsQuantity="7"
                            courseLink="#"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 md-mb-30">
                        <CourseSingle
                            itemClass="courses-item"
                            image={image4}
                            title="Testy & Delicious Food Recipes for Lunch Tellus"
                            pricing="$32.00"
                            studentQuantity="45"
                            lessonsQuantity="12"
                            courseLink="#"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 sm-mb-30">
                        <CourseSingle
                            itemClass="courses-item"
                            image={image5}
                            title="Lawyer Advance Mental Simulator Handle Nulla"
                            pricing="$22.00"
                            studentQuantity="41"
                            lessonsQuantity="14"
                            courseLink="#"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <CourseSingle
                            itemClass="courses-item"
                            image={image6}
                            title="Computer Fundamentals Basic Startup Ultricies"
                            pricing="$28.00"
                            studentQuantity="23"
                            lessonsQuantity="5"
                            courseLink="#"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;