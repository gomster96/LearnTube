import React from 'react';
import { Link } from 'react-router-dom';

const ReviewPart = () => {

    return (
        <div className="content pt-30 pb-30 white-bg">
            <div className="cource-review-box mb-30">
                <h4>Stephane Smith</h4>
                <div className="rating">
                    <span className="total-rating">4.5</span> <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span> 256 Reviews
                </div>
                <div className="text">Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus.</div>
                <div className="helpful">Was this review helpful?</div>
                <ul className="like-option">
                    <li><i className="fa fa-thumbs-o-up"></i></li>
                    <li><i className="fa fa-thumbs-o-down"></i></li>
                    <li><a className="report" href="#">Report</a></li>
                </ul>
            </div>
            <div className="cource-review-box mb-30">
                <h4>Anna Sthesia</h4>
                <div className="rating">
                    <span className="total-rating">4.5</span> <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span> 256 Reviews
                </div>
                <div className="text">Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus.</div>
                <div className="helpful">Was this review helpful?</div>
                <ul className="like-option">
                    <li><i className="fa fa-thumbs-o-up"></i></li>
                    <li><i className="fa fa-thumbs-o-down"></i></li>
                    <li><a className="report" href="#">Report</a></li>
                </ul>
            </div>
            <div className="cource-review-box mb-30">
                <h4>Petey Cruiser</h4>
                <div className="rating">
                    <span className="total-rating">4.5</span> <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span> 256 Reviews
                </div>
                <div className="text">Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus.</div>
                <div className="helpful">Was this review helpful?</div>
                <ul className="like-option">
                    <li><i className="fa fa-thumbs-o-up"></i></li>
                    <li><i className="fa fa-thumbs-o-down"></i></li>
                    <li><a className="report" href="#">Report</a></li>
                </ul>
            </div>
            <div className="cource-review-box">
                <h4>Rick O'Shea</h4>
                <div className="rating">
                    <span className="total-rating">4.5</span> <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span> 256 Reviews
                </div>
                <div className="text">Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus.</div>
                <div className="helpful">Was this review helpful?</div>
                <ul className="like-option">
                    <li><i className="fa fa-thumbs-o-up"></i></li>
                    <li><i className="fa fa-thumbs-o-down"></i></li>
                    <li><a className="report" href="#">Report</a></li>
                </ul>
                <a href="#" className="more">View More</a>
            </div>
        </div>
    );
}

export default ReviewPart;