import React, { useEffect, useState } from "react";
import CourseSidebar from "./CourseSidebar";
import CurriculumPart from "./CurriculumPart";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

function CourseDetailsPart() {
  const initClassRoomData = {
    classId: "",
    className: "",
    classDescription: "",
    closeDate: "",
    isOpened: "",
    entryCode: "",
    isActive: "",
    classRoomRegDate: "",
    instructor: {
      userId: "",
      name: "",
      email: "",
    },
    lectures: [
      {
        lectureId: "",
        lectureNum: "",
        modDate: "",
        contents: [],
      },
    ],
    notices: [],
  };

  const [classRoomData, setClassRoomData] = useState(initClassRoomData);
  const cid = useLocation().state.classId;
  const [students, setStudents] = useState([
    { userId: "", name: "", email: "" },
  ]);

  useEffect(() => {
    const fetchClassRoom = async () => {
      try {
        const res1 = await axios.get(
          `http://localhost:8080/api/classroom?userId=1&classId=${cid}`
        );
        const res2 = await axios.get(
          `http://localhost:8080/api/user/students?classId=${cid}`
        );

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
          <h3>{classRoomData.className}</h3>
          <p>⇣ {classRoomData.classDescription} </p>
          <div className="row clearfix">
            <div className="col-lg-8 md-mb-50">
              <CurriculumPart classRoomData={classRoomData} />
            </div>
            <div className="video-column col-lg-4">
              <CourseSidebar
                classRoomData={classRoomData}
                students={students}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CourseDetailsPart;
