import Link from 'react-router-dom';
import SectionTitle from '../../components/Common/SectionTitle';
import SingleProcess from '../../components/Common/Process';

const Service = () => {

    return (
        <div className="rs-process pt-180 pb-120 md-pt-70 md-pb-70">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 md-mb-40">
                        <div className="process-wrap">
                            <SectionTitle
                                sectionClass="sec-title mb-30"
                                subtitleClass="sub-text new"
                                subtitle="Working Process"
                                titleClass="title white-color"
                                title="Our Working Process -  How We Work For Our Customers"
                            />
                            <div className="btn-part mt-40">
                                <Link to="/contact" className="readon learn-more contact-us">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 pl-30 md-pl-15">
                        <div className="row">
                            <div className="col-md-6 mb-40">
                                <SingleProcess 
                                    processNumber="1"
                                    processTitle="Discovery"
                                    processText="Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas."
                                />                                
                            </div>
                            <div className="col-md-6 mb-40">                                
                                <SingleProcess 
                                    processNumber="2"
                                    processTitle="Planning"
                                    processText="Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas."
                                />
                            </div>
                            <div className="col-md-6 sm-mb-40">
                                <SingleProcess 
                                    processNumber="3"
                                    processTitle="Execute"
                                    processText="Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas."
                                />
                            </div>
                            <div className="col-md-6">
                                <SingleProcess 
                                    processNumber="4"
                                    processTitle="Deliver"
                                    processText="Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;