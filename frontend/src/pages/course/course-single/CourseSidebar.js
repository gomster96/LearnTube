import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

// Image
import videoImg from "../../../assets/img/about/about-video-bg2.png";

const CourseSidebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(!isOpen);
  const [classRoomData, setClassRoomData] = useState();
  useEffect(() => {
    console.log("sidebar : ", props.classRoomData);
  });
  return (
    <div className="inner-column">
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="YLN1Argi7ik"
        onClose={() => {
          openModal();
        }}
      />
      <div className="intro-video media-icon orange-color2">
        <img className="video-img" src={videoImg} alt="Video Image" />
        <Link
          className="popup-videos"
          onClick={() => {
            openModal();
          }}
        >
          <i className="fa fa-play"></i>
        </Link>
        <h4>Preview this course</h4>
      </div>
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
            <span className="value">21</span>
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
