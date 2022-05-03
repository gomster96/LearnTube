import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import ServiceDetailsContent from './ServiceDetailsContent';

// Breadcrumbs Image
import breadcrumbsImg from '../../assets/img/breadcrumbs/1.jpg';


const DataCenter = () => {
    return (
        <React.Fragment>
            <Header
                parentMenu='service'
                secondParentMenu='services'
            />
            {/* breadcrumb-area-start */}
            <SiteBreadcrumb
                breadcrumbsImg={breadcrumbsImg}
                pageTitle='Data Center'
                pageCategory='Services'
                pageName='Data Center'
            />
            {/* breadcrumb-area-end */}
            <ServiceDetailsContent />
            <Footer footerClass="rs-footer" />
            <SearchModal />
        </React.Fragment>
    );
}

export default DataCenter;