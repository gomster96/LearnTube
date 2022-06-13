import React, { useEffect, useState } from "react";
import CoursePart from "./CourseSection";
import ScrollToTop from "../../components/Common/ScrollTop";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
function CourseMain(props) {
  // console.log("test" + props.userId);
  return (
    <React.Fragment>
      {/* CoursePart Start */}
      <CoursePart userId={props.userId} />
      {/* CoursePart End */}

      {/* scrolltop-start */}
      <ScrollToTop scrollClassName="scrollup orange-color" />
      {/* scrolltop-end */}
    </React.Fragment>
  );
}

export default CourseMain;
