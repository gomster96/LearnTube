import React from "react";
import CoursePartAdmin from "./CourseSectionAdmin";
import ScrollToTop from "../../components/Common/ScrollTop";

const CourseMainAdmin = (props) => {
    return (
        <React.Fragment>
            {/* CoursePart Start */}
            <CoursePartAdmin userId={props.userId} />
            {/* CoursePart End */}

            {/* scrolltop-start */}
            <ScrollToTop scrollClassName="scrollup orange-color" />
            {/* scrolltop-end */}
        </React.Fragment>
    );
};

export default CourseMainAdmin;
