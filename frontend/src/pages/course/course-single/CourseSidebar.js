import React, { useEffect, useState } from "react";

const CourseSidebar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);
    const [classRoomData, setClassRoomData] = useState();
    useEffect(() => {
        console.log("sidebar : ", props.classRoomData);
    });
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

                    <li className="students-feature">
                        <i className="fa fa-users"></i>
                        <span className="label">Students</span>
                        <span className="value">{props.classRoomData.takeNum}</span>
                    </li>
                </ul>
            </div>
            {/* <div className="btn-part">
                <a href="#" className="btn readon2 orange">$35</a>
                <a href="#" className="btn readon2 orange-transparent">Buy Now</a>
            </div> */}
        </div>
    );
};

export default CourseSidebar;
