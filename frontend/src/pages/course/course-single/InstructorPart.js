import React from 'react';
import { Link } from 'react-router-dom';

// Image
import teamImg1 from '../../../assets/img/team/1.jpg';
import teamImg2 from '../../../assets/img/team/2.jpg';

const InstructorPart = () => {

    return (
        <div className="content pt-30 pb-30 pl-30 pr-30 white-bg">
            <h3 className="instructor-title">Instructors</h3>
            <div className="row rs-team style1 orange-color transparent-bg clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 sm-mb-30">
                    <div className="team-item">
                        <img src={teamImg1} alt="" />
                        <div className="content-part">
                            <h4 className="name"><a href="#">Jhon Pedrocas</a></h4>
                            <span className="designation">Professor</span>
                            <ul className="social-links">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="team-item">
                        <img src={teamImg2} alt="" />
                        <div className="content-part">
                            <h4 className="name"><a href="#">Jhon Pedrocas</a></h4>
                            <span className="designation">Professor</span>
                            <ul className="social-links">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
}

export default InstructorPart;