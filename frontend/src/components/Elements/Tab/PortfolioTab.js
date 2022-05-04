import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import projectImg1 from '../../../assets/img/project/style5/1.jpg';
import projectImg2 from '../../../assets/img/project/style5/2.jpg';
import projectImg3 from '../../../assets/img/project/style5/3.jpg';
import projectImg4 from '../../../assets/img/project/style5/4.jpg';
import projectImg5 from '../../../assets/img/project/style5/5.jpg';
import projectImg6 from '../../../assets/img/project/style5/6.jpg';


const PortfolioTab = () => {

    let tab1 = "All",
        tab2 = "Mobile App",
        tab3 = "Web Design",
        tab4 = "Product Design"
    const tabStyle = 'tab-menu text-center';

    return (
        <div className="tab-part">
            <Tabs>
                <TabList className={tabStyle}>
                    <Tab><button>{tab1}</button></Tab>
                    <Tab><button>{tab2}</button></Tab>
                    <Tab><button>{tab3}</button></Tab>
                    <Tab><button>{tab4}</button></Tab>
                </TabList>

                <TabPanel>
                    <div id="portfolio-grid" className="row">
                        <div className="col-lg-4 col-md-6 md-mb-30">
                            <div className="project-item mb-30">
                                <div className="project-img">
                                    <img
                                        src={projectImg1}
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><Link to="#">Mobile App</Link></h3>
                                        <span className="category"><Link to="#">Product Engineering</Link></span>
                                    </div>
                                </div>
                            </div>
                            <div className="project-item">
                                <div className="project-img">
                                    <img
                                        src={projectImg4}
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><Link to="#">Web Design</Link></h3>
                                        <span className="category"><Link to="#">Product Engineering</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 sm-mb-30">
                            <div className="project-item mb-30">
                                <div className="project-img">
                                    <img
                                        src={projectImg2}
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><Link to="#">Web Design</Link></h3>
                                        <span className="category"><Link to="#">Product Engineering</Link></span>
                                    </div>
                                </div>
                            </div>
                            <div className="project-item">
                                <div className="project-img">
                                    <img
                                        src={projectImg5}
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><Link to="#">Mobile App</Link></h3>
                                        <span className="category"><Link to="#">Product Engineering</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="project-item mb-30">
                                <div className="project-img">
                                    <img
                                        src={projectImg3}
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><Link to="#">Product Design</Link></h3>
                                        <span className="category"><Link to="#">Product Engineering</Link></span>
                                    </div>
                                </div>
                            </div>
                            <div className="project-item">
                                <div className="project-img">
                                    <img
                                        src={projectImg6}
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><Link to="#">Product Design</Link></h3>
                                        <span className="category"><Link to="#">Product Engineering</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div id="portfolio-grid" className="row">
                        <div className="col-lg-4 col-md-6 md-mb-30">
                            <div className="project-item mb-30">
                                <div className="project-img">
                                    <img
                                        src={projectImg1}
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><Link to="#">Mobile App</Link></h3>
                                        <span className="category"><Link to="#">Product Engineering</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 sm-mb-30">
                            <div className="project-item mb-30">
                                <div className="project-img">
                                    <img
                                        src={projectImg2}
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><Link to="#">Mobile App</Link></h3>
                                        <span className="category"><Link to="#">Product Engineering</Link></span>
                                    </div>
                                </div>
                            </div>
                            <div className="project-item">
                                <div className="project-img">
                                    <img
                                        src={projectImg6}
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><Link to="#">Mobile App</Link></h3>
                                        <span className="category"><Link to="#">Product Engineering</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="project-item">
                                <div className="project-img">
                                    <img
                                        src={projectImg5}
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><Link to="#">Mobile App</Link></h3>
                                        <span className="category"><Link to="#">Product Engineering</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div id="portfolio-grid" className="row">
                        <div className="col-lg-4 col-md-6 md-mb-30">
                            <div className="project-item">
                                <div className="project-img">
                                    <img
                                        src={projectImg3}
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><Link to="#">Product Design</Link></h3>
                                        <span className="category"><Link to="#">Product Engineering</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 sm-mb-30">
                            <div className="project-item">
                                <div className="project-img">
                                    <img
                                        src={projectImg5}
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><Link to="#">Mobile App</Link></h3>
                                        <span className="category"><Link to="#">Product Engineering</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="project-item mb-30">
                                <div className="project-img">
                                    <img
                                        src={projectImg4}
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><Link to="#">Web Design</Link></h3>
                                        <span className="category"><Link to="#">Product Engineering</Link></span>
                                    </div>
                                </div>
                            </div>
                            <div className="project-item">
                                <div className="project-img">
                                    <img
                                        src={projectImg6}
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><Link to="#">Product Design</Link></h3>
                                        <span className="category"><Link to="#">Product Engineering</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div id="portfolio-grid" className="row">
                        <div className="col-lg-4 col-md-6 md-mb-30">
                            <div className="project-item mb-30">
                                <div className="project-img">
                                    <img
                                        src={projectImg2}
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><Link to="#">Product Design</Link></h3>
                                        <span className="category"><Link to="#">Product Engineering</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 sm-mb-30">
                            <div className="project-item mb-30">
                                <div className="project-img">
                                    <img
                                        src={projectImg3}
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><Link to="#">Product Design</Link></h3>
                                        <span className="category"><Link to="#">Product Engineering</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="project-item">
                                <div className="project-img">
                                    <img
                                        src={projectImg4}
                                        alt="images"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <h3 className="title"><Link to="#">Product Design</Link></h3>
                                        <span className="category"><Link to="#">Product Engineering</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>

    );
}

export default PortfolioTab;