import React, { useEffect, useState } from "react";
import CourseSidebar from "./CourseSidebar";
import CurriculumPart from "./CurriculumPart";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

function CourseDetailsPart(props) {
  const location = useLocation();
  const [userId, SetUserId] = useState("");

  const [classRoomData, setClassRoomData] = useState();
  const cid = useLocation().state.classId;
  const [students, setStudents] = useState([
    { userId: "", name: "", email: "" },
  ]);

  const uid = location.state.userId;
  //console.log("cid in detail part " + cid);

  const joinClass = () => {
    if (window.confirm("수강신청 하시겠습니까?")) {
      const fetchJoinClass = async () => {
        try {
          let body = { userId: userId, classId: cid };
          const response = await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/api/classroom/enroll`,
            JSON.stringify(body),
            {
              headers: {
                "Content-Type": `application/json`,
              },
            }
          );
          console.log(response);
        } catch (err) {
          console.log("err >> ", err);
        }
      };
      fetchJoinClass();
    }
    alert("신청 되었습니다.");
  };

  useEffect(() => {
    if (location.state) {
      console.log("uid", uid);
      {
        uid
          ? SetUserId(uid)
          : SetUserId(window.sessionStorage.getItem("userId"));
      }

      console.log("userId", userId);
      if (userId) {
        //console.log(cid);
        const fetchClassRoom = async () => {
          try {
            const res1 = await axios.get(
              `${process.env.REACT_APP_SERVER_URL}/api/classroom?userId=${userId}&classId=${cid}`
            );
            const res2 = await axios.get(
              `${process.env.REACT_APP_SERVER_URL}/api/user/students?classId=${cid}`
            );

            console.log(res1.data);
            setClassRoomData(res1.data);
            // console.log("classRoomData", classRoomData);
            // console.log("isTake", classRoomData.isTake);
            // console.log("cid", cid);
            // console.log("res2", res2.data);
            setStudents(res2.data);
            console.log("students", students);
          } catch (err) {
            console.log("err >> ", err);
          }
        };
        fetchClassRoom();
      }
    }
  }, [userId]);

  return (
    <React.Fragment>
      <div className="intro-section gray-bg pt-94 pb-100 md-pt-80 md-pb-80 loaded">
        <div className="container">
          <h5>커리큘럼</h5>

          {classRoomData ? (
            <div className="">
              <div>
                <h3>{classRoomData.className}</h3>
                <p>⇣ {classRoomData.classDescription} </p>
              </div>
              {classRoomData.isTake === false ? (
                <button
                  id="joinBtn"
                  className="readon2 banner-style flex-fill  align-items-end flex-column bd-highlight mb-3"
                  onClick={joinClass}
                >
                  수강 신청
                </button>
              ) : null}
              <div className="row clearfix">
                <div className="col-lg-8 md-mb-50">
                  <CurriculumPart
                    classRoomData={classRoomData}
                    userId={userId}
                  />
                </div>
                <div className="video-column col-lg-4">
                  <CourseSidebar
                    classRoomData={classRoomData}
                    students={students}
                    userId={userId}
                  />
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
