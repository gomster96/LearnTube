import React, { useEffect, useState } from "react";
import CourseSidebar from "./CourseSidebar";
import CurriculumPart from "./CurriculumPart";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

function CourseDetailsPart() {
    const [classRoomData, setClassRoomData] = useState();
    const cid = useLocation().state.classId;
    const [students, setStudents] = useState([{ userId: "", name: "", email: "" }]);
    console.log("cid in detail part " + cid);
    useEffect(() => {
        console.log(" ");
        console.log(cid);
        const fetchClassRoom = async () => {
            try {
                const res1 = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/classroom?userId=1&classId=${cid}`);
                const res2 = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/user/students?classId=${cid}`);

                // console.log(res1.data);
                setClassRoomData(res1.data);
                // console.log("cid", cid);
                // console.log("res2", res2.data);
                setStudents(res2.data);
                console.log("students", students);
            } catch (err) {
                console.log("err >> ", err);
            }
        };
        fetchClassRoom();
    }, []);

    return (
        <React.Fragment>
            <div className="intro-section gray-bg pt-94 pb-100 md-pt-80 md-pb-80 loaded">
                <div className="container">
                    <h5>커리큘럼</h5>
                    {classRoomData ? (
                        <div>
                            <h3>{classRoomData.className}</h3>
                            <p>⇣ {classRoomData.classDescription} </p>
                            <div className="row clearfix">
                                <div className="col-lg-8 md-mb-50">
                                    <CurriculumPart classRoomData={classRoomData} />
                                </div>
                                <div className="video-column col-lg-4">
                                    <CourseSidebar classRoomData={classRoomData} students={students} />
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </React.Fragment>
    );
}

export default CourseDetailsPart;
