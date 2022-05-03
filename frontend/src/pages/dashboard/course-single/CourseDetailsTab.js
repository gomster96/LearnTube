import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import FaqPart from './FaqPart';
import ReviewPart from './ReviewPart';
import OverviewPart from './OverviewPart';
import InstructorPart from './InstructorPart';
import CurriculumPart from './CurriculumPart';

const CourseDetailsTab = () => {

    let tab1 = "Overview",
        tab2 = "Curriculum",
        tab3 = "Instructor",
        tab4 = "Faq",
        tab5 = "Reviews"
    const tabStyle = 'intro-tabs tabs-box';

    return (
        <div className="intro-info-tabs">
            <Tabs>
                <TabList className={tabStyle}>
                    <Tab>
                        <button>{tab1}</button>
                    </Tab>
                    <Tab>
                        <button>{tab2}</button>
                    </Tab>
                    <Tab>
                        <button>{tab3}</button>
                    </Tab>
                    <Tab>
                        <button>{tab4}</button>
                    </Tab>
                    <Tab>
                        <button>{tab5}</button>
                    </Tab>
                </TabList>

                <TabPanel>
                    <OverviewPart />
                </TabPanel>

                <TabPanel>
                    <CurriculumPart />
                </TabPanel>

                <TabPanel>
                    <InstructorPart />
                </TabPanel>

                <TabPanel>
                    <FaqPart />
                </TabPanel>

                <TabPanel>
                    <ReviewPart />
                </TabPanel>
            </Tabs>
            {/* <ul className="nav nav-tabs intro-tabs tabs-box" id="myTab" role="tablist">
                <li className="nav-item tab-btns">
                    <a className="nav-link tab-btn active" id="prod-overview-tab" data-toggle="tab" href="#prod-overview" role="tab" aria-controls="prod-overview" aria-selected="true">Overview</a>
                </li>
                <li className="nav-item tab-btns">
                    <a className="nav-link tab-btn" id="prod-curriculum-tab" data-toggle="tab" href="#prod-curriculum" role="tab" aria-controls="prod-curriculum" aria-selected="false">Curriculum</a>
                </li>
                <li className="nav-item tab-btns">
                    <a className="nav-link tab-btn" id="prod-instructor-tab" data-toggle="tab" href="#prod-instructor" role="tab" aria-controls="prod-instructor" aria-selected="false">Instructor</a>
                </li>
                <li className="nav-item tab-btns">
                    <a className="nav-link tab-btn" id="prod-faq-tab" data-toggle="tab" href="#prod-faq" role="tab" aria-controls="prod-faq" aria-selected="false">Faq</a>
                </li>
                <li className="nav-item tab-btns">
                    <a className="nav-link tab-btn" id="prod-reviews-tab" data-toggle="tab" href="#prod-reviews" role="tab" aria-controls="prod-reviews" aria-selected="false">Reviews</a>
                </li>
            </ul>
            <div className="tab-content tabs-content" id="myTabContent">
                <div className="tab-pane tab fade active show" id="prod-overview" role="tabpanel" aria-labelledby="prod-overview-tab">
                    <OverviewPart />
                </div>
                <div className="tab-pane fade" id="prod-curriculum" role="tabpanel" aria-labelledby="prod-curriculum-tab">
                    <CurriculumPart />
                </div>
                <div className="tab-pane fade" id="prod-instructor" role="tabpanel" aria-labelledby="prod-instructor-tab">
                    <InstructorPart />
                </div>
                <div className="tab-pane fade" id="prod-faq" role="tabpanel" aria-labelledby="prod-faq-tab">
                    <FaqPart />
                </div>
                <div className="tab-pane fade" id="prod-reviews" role="tabpanel" aria-labelledby="prod-reviews-tab">
                    <ReviewPart />
                </div>
            </div> */}
        </div>
    );
}

export default CourseDetailsTab;