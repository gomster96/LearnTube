import React from 'react';
import { Link } from 'react-router-dom';

const OverviewPart = () => {

    return (
        <div className="content white-bg pt-30">
            <div className="course-overview">
                <div className="inner-box">
                    <h4>Educavo Course Details</h4>
                    <p>Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus.</p>
                    <p>Eleifend euismod pellentesque vel Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus.</p>
                    <ul className="student-list">
                        <li>23,564 Total Students</li>
                        <li><span className="theme_color">4.5</span> <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span> (1254 Rating)</li>
                        <li>256 Reviews</li>
                    </ul>
                    <h3>What you’ll learn?</h3>
                    <ul className="review-list">
                        <li>Phasellus enim magna, varius et commodo ut.</li>
                        <li>Sed consequat justo non mauris pretium at tempor justo.</li>
                        <li>Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo</li>
                        <li>Phasellus enim magna, varius et commodo ut.</li>
                        <li>Phasellus enim magna, varius et commodo ut.</li>
                        <li>Sed consequat justo non mauris pretium at tempor justo.</li>
                        <li>Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo</li>
                        <li>Phasellus enim magna, varius et commodo ut.</li>
                    </ul>
                    <h3>Requirements</h3>
                    <ul className="review-list">
                        <li>Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo</li>
                        <li>Ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel.</li>
                        <li>Phasellus enim magna, varius et commodo ut.</li>
                        <li>Varius et commodo ut, ultricies vitae velit. Ut nulla tellus.</li>
                        <li>Phasellus enim magna, varius et commodo ut.</li>
                    </ul> 
                </div>
            </div>
        </div>
    );
}

export default OverviewPart;