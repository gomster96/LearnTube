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

  const noticeInit = {
    notices: [{ id: "", title: "", content: "", modDate: "" }],
  };

  const [noticeData, setNoticeData] = useState(noticeInit);

  useEffect(() => {
    const fetchClassRoom = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/classroom?userId=1&classId=${cid}`
        );
        console.log(response.data);
        setClassRoomData(response.data);
        console.log("cid", cid);

        setNoticeData(response.data.notices);
        console.log("p noticeData", noticeData);
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
          <div className="row clearfix">
            <div className="col-lg-8 md-mb-50">
              <CurriculumPart
                classRoomData={classRoomData}
                noticeData={noticeData}
                setNoticeData={setNoticeData}
              />
            </div>
            <div className="video-column col-lg-4">
              <CourseSidebar classRoomData={classRoomData} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CourseDetailsPart;
