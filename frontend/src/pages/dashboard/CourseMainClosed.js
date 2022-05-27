import React from "react";
import CoursePartClosed from "./CourseSectionClosed";
import ScrollToTop from "../../components/Common/ScrollTop";

const CourseMainClosed = (props) => {
    return (
        <React.Fragment>
            {/* CoursePart Start */}
            <CoursePartClosed userId={props.userId} />
            {/* CoursePart End */}

            {/* scrolltop-start */}
            <ScrollToTop scrollClassName="scrollup orange-color" />
            {/* scrolltop-end */}
        </React.Fragment>
    );
};

export default CourseMainClosed;
