import React from 'react';
import SectionTitle from '../Common/SectionTitle';
import SingleService from './SingleService';


import serviceIcon1 from '../../assets/img/service/icons/1.png';
import serviceIcon2 from '../../assets/img/service/icons/2.png';
import serviceIcon3 from '../../assets/img/service/icons/3.png';
import serviceIcon4 from '../../assets/img/service/icons/4.png';
import serviceIcon5 from '../../assets/img/service/icons/5.png';
import serviceIcon6 from '../../assets/img/service/icons/6.png';

const Service = () => {

	return(
        <React.Fragment>
            <div className="rs-services pt-120 pb-120 md-pt-70 md-pb-70">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title2 text-center mb-46"
                        subtitleClass="sub-text"
                        subtitle="Services"
                        titleClass="title"
                        title="We Are Offering All Kinds of IT Solutions Services"
                        effectClass="heading-line"
                    />
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-26">
                            <SingleService 
                                itemClass="services-item"
                                serviceImage={serviceIcon1}
                                serviceURL="software-development"
                                Title="Software Development" 
                                Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database." 
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-26">
                            <SingleService 
                                itemClass="services-item"
                                serviceImage={serviceIcon2}
                                serviceURL="web-development"
                                Title="Wev Development" 
                                Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database." 
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-25">
                            <SingleService 
                                itemClass="services-item"
                                serviceImage={serviceIcon3}
                                serviceURL="analytic-solutions"
                                Title="Analytic Solutions" 
                                Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database." 
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 md-mb-26">
                            <SingleService 
                                itemClass="services-item"
                                serviceImage={serviceIcon4}
                                serviceURL="clould-devOps"
                                Title="Clould & DevOps" 
                                Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database." 
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 sm-mb-26">
                            <SingleService 
                                itemClass="services-item"
                                serviceImage={serviceIcon5}
                                serviceURL="product-design"
                                Title="Product & Design" 
                                Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database." 
                            />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <SingleService 
                                itemClass="services-item"
                                serviceImage={serviceIcon6}
                                serviceURL="data-center"
                                Title="Data Center" 
                                Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database." 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
	)
}

export default Service