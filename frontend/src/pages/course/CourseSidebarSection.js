import React from 'react';
import { Link } from 'react-router-dom';

const CourseSidebar = () => {
    return (
        <React.Fragment>
            <div className="widget-area">
                <div className="search-widget mb-50">
                    <h3 className="widget-title">Course Search</h3>
                    <div className="search-wrap">
                        <input type="search" placeholder="Searching..." name="s" className="search-input" value="" />
                        <button type="submit" value="Search"><i className=" flaticon-search"></i></button>
                    </div>
                </div>
                <div className="widget-archives mb-50">
                    <h3 className="widget-title">Filter By</h3>
                    <div className="filter-widget">
                        <div className="filter-form">
                            <form method="post" action="mailer.php">
                                <div className="single-filter mb-30">
                                    <h5>Skill Level</h5>
                                    <div className="radio-box form-group">
                                        <input type="radio" name="skill" id="type1" value="beginer" checked />
                                        <label for="type1">Beginner</label>
                                    </div>

                                    <div className="radio-box form-group">
                                        <input type="radio" name="skill" id="type2" value="intermediate" />
                                        <label for="type2">Intermediate</label>
                                    </div>

                                    <div className="radio-box form-group">
                                        <input type="radio" name="skill" id="type3" value="expert" />
                                        <label for="type3">Expert</label>
                                    </div>
                                </div>

                                <div className="single-filter mb-30">
                                    <h5>Price Level</h5>
                                    <div className="radio-box form-group">
                                        <input type="radio" name="price" id="type4" value="free" checked />
                                        <label for="type4">Free (14)</label>
                                    </div>

                                    <div className="radio-box form-group">
                                        <input type="radio" name="price" id="type5" value="paid" />
                                        <label for="type5">Paid (26)</label>
                                    </div>
                                </div>

                                <div className="single-filter mb-30">
                                    <h5>Duration Time</h5>
                                    <div className="radio-box form-group">
                                        <input type="radio" name="duration" id="type6" value="six" checked />
                                        <label for="type6">5+ hours (30)</label>
                                    </div>

                                    <div className="radio-box form-group">
                                        <input type="radio" name="duration" id="type7" value="paid" />
                                        <label for="type7">10+ hours (20)</label>
                                    </div>

                                    <div className="radio-box form-group">
                                        <input type="radio" name="duration" id="type8" value="paid" />
                                        <label for="type8">15+ hours (5)</label>
                                    </div>
                                </div>

                                <div className="single-filter mb-30">
                                    <h5>Course Type</h5>
                                    <div className="check-box form-group mb-0">
                                        <input type="checkbox" name="course" id="check1" value="check1" checked />
                                        <label for="check1">Backend (3)</label>
                                    </div>
                                    <div className="check-box form-group mb-0">
                                        <input type="checkbox" name="course" id="check2" value="check2" />
                                        <label for="check2">CSS (6)</label>
                                    </div>
                                    <div className="check-box form-group mb-0">
                                        <input type="checkbox" name="course" id="check3" value="check3" />
                                        <label for="check3">Frontend (8)</label>
                                    </div>
                                    <div className="check-box form-group mb-0">
                                        <input type="checkbox" name="course" id="check4" value="check4" />
                                        <label for="check4">General (3)</label>
                                    </div>
                                    <div className="check-box form-group mb-0">
                                        <input type="checkbox" name="course" id="check5" value="check5" />
                                        <label for="check5">Photography (7)</label>
                                    </div>
                                    <div className="check-box form-group mb-0">
                                        <input type="checkbox" name="course" id="check6" value="check6" />
                                        <label for="check6">Photography (4)</label>
                                    </div>
                                    <div className="check-box form-group mb-0">
                                        <input type="checkbox" name="course" id="check7" value="check7" />
                                        <label for="check7">Technology (5)</label>
                                    </div>
                                </div>

                                <div className="single-filter mb-30">
                                    <h5>Instructor</h5>
                                    <div className="check-box form-group mb-0">
                                        <input type="checkbox" id="check8" name="check8" value="check8" checked />
                                        <label for="check8">Stuard (5)</label>
                                    </div>
                                    <div className="check-box form-group mb-0">
                                        <input type="checkbox" id="check9" name="check9" value="check9" />
                                        <label for="check9">Benjamin (4)</label>
                                    </div>
                                    <div className="check-box form-group mb-0">
                                        <input type="checkbox" id="check10" name="check10" value="check10" />
                                        <label for="check10">Mickel (7)</label>
                                    </div>
                                    <div className="check-box form-group mb-0">
                                        <input type="checkbox" id="check11" name="check11" value="check11" />
                                        <label for="check11">Johnson (2)</label>
                                    </div>
                                    <div className="check-box form-group mb-0">
                                        <input type="checkbox" id="check12" name="check12" value="check12" />
                                        <label for="check12">Elijabeth (5)</label>
                                    </div>
                                    <div className="check-box form-group mb-0">
                                        <input type="checkbox" id="check13" name="check13" value="check13" />
                                        <label for="check13">Rebeka (4)</label>
                                    </div>
                                </div>

                                <div className="form-group mb-0">
                                    <input className="readon2 orange" type="submit" value="Submit Now" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="widget-archives md-mb-50">
                    <h3 className="widget-title">Course Categories</h3>
                    <ul className="categories">
                        <li><Link to="/course-categories">College</Link></li>
                        <li><Link to="/course-categories">High School</Link></li>
                        <li><Link to="/course-categories">Primary</Link></li>
                        <li><Link to="/course-categories">School</Link></li>
                        <li><Link to="/course-categories">University</Link></li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );

}

export default CourseSidebar;