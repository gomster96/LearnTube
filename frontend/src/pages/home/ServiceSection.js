import SectionTitle from '../../components/Common/SectionTitle';
import SingleService from '../../components/Service/SingleService';

import serviceIcon1 from '../../assets/img/service/icons/1.png';
import serviceIcon2 from '../../assets/img/service/icons/2.png';
import serviceIcon3 from '../../assets/img/service/icons/3.png';
import serviceIcon4 from '../../assets/img/service/icons/4.png';
import serviceIcon5 from '../../assets/img/service/icons/5.png';
import serviceIcon6 from '../../assets/img/service/icons/6.png';

const Service = () => {

    return (
        <div id="rs-service" className="rs-services main-home gray-bg pt-110 pb-120 md-pt-70 md-pb-70">
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
                    <div className="col-lg-4 col-md-6 mb-30">
                        <SingleService
                            itemClass="services-item"
                            serviceImage={serviceIcon1}
                            Title="Software Development"
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database."
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <SingleService
                            itemClass="services-item"
                            serviceImage={serviceIcon2}
                            Title="Wev Development"
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database."
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <SingleService
                            itemClass="services-item"
                            serviceImage={serviceIcon3}
                            Title="Analytic Solutions"
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database."
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 md-mb-30">
                        <SingleService
                            itemClass="services-item"
                            serviceImage={serviceIcon4}
                            Title="Clould & DevOps"
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database."
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 sm-mb-30">
                        <SingleService
                            itemClass="services-item"
                            serviceImage={serviceIcon5}
                            Title="Product & Design"
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database."
                        />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <SingleService
                            itemClass="services-item"
                            serviceImage={serviceIcon6}
                            Title="Data Center"
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;