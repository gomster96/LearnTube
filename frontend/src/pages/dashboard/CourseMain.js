import React, { useEffect, useState } from "react";
import CoursePart from "./CourseSection";
import ScrollToTop from "../../components/Common/ScrollTop";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
function CourseMain(props) {
    const location = useLocation();
    const [userId, SetUserId] = useState("");
    useEffect(() => {
        const uid = 0;
        if (location.state) {
            const uid = location.state.userId;
            console.log("uid", uid);
            SetUserId(uid);
            console.log("userId", userId);
        }
    }, []);
    return (
        <React.Fragment>
            {/* CoursePart Start */}
            <CoursePart />
            {/* CoursePart End */}

            {/* scrolltop-start */}
            <ScrollToTop scrollClassName="scrollup orange-color" />
            {/* scrolltop-end */}
        </React.Fragment>
    );
}

export default CourseMain;
