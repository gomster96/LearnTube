import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
const CourseSidebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(!isOpen);
  const [classRoomData, setClassRoomData] = useState();

  const [visible, setVisible] = useState(false);
  const { userId } = props;
  useEffect(() => {
    // console.log("sidebar : ", props.classRoomData);
    // console.log("side student: ", props.students);
  }, [userId]);
  return (
    <div className="inner-column">
      <div className="course-features-info">
        <ul>
          <li className="lectures-feature">
            <i className="fa fa-user"></i>
            <span className="label">Instructor</span>
            <span className="value">{props.classRoomData.instructor.name}</span>
          </li>
          <li className="lectures-feature">
            <i className="fa fa-files-o"></i>
            <span className="label">Lectures</span>
            <span className="value">{props.classRoomData.lectures.length}</span>
          </li>

          {/* <li className="duration-feature">
            <i className="fa fa-clock-o"></i>
            <span className="label">Duration</span>
            <span className="value">10 week </span>
          </li> */}

          <li
            className="students-feature"
            onClick={() => {
              setVisible(!visible);
            }}
          >
            <i className="fa fa-users"></i>
            <span className="label">
              Students
              {props.classRoomData.instructor.userId === userId ? (
                <i
                  className="fa fa-angle-down"
                  Style="font-size:20px; padding-left:4px;"
                ></i>
              ) : null}
            </span>

            <span className="value">{props.classRoomData.takeNum}</span>
          </li>
          {props.classRoomData.instructor.userId === userId ? (
            <>
              {visible ? (
                <div className=" p-2 rounded bg-light">
                  <span className="d-flex flex-fill bd-highlight">
                    <li>#</li>&nbsp;&nbsp;&nbsp;
                    <li>Name</li>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <li>Email</li>
                  </span>
                  {props.students
                    ? props.students.map((students, i) => (
                        <span className="d-flex flex-fill bd-highlight">
                          <li>{i + 1}</li>&nbsp;&nbsp;&nbsp;&nbsp;
                          <li>{props.students[i].name}</li>
                          <li className="ms-auto bd-highlight">
                            {props.students[i].email}
                          </li>
                        </span>
                      ))
                    : null}
                </div>
              ) : null}
            </>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default CourseSidebar;
