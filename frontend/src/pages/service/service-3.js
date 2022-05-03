import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import ScrollToTop from '../../components/Common/ScrollTop';
import ServiceThreeMain from '../../components/ServiceThree/ServiceThreeMain';

// Breadcrumbs Background Image
import bannerbg from '../../assets/img/breadcrumbs/3.jpg';

const ServiceThree = () => {

    return (
        <React.Fragment>
            <Header
                parentMenu='page'
                secondParentMenu='services'
            />
            <div>
                {/* breadcrumb-area-start */}
                <SiteBreadcrumb
                    pageTitle="Services 3"
                    titleClass="page-title"
                    pageName="Services 3"
                    breadcrumbsImg={bannerbg}
                />
                {/* breadcrumb-area-start */}

                {/* Service Three */}
                <ServiceThreeMain />
                {/* Service Three */}

                {/* scrolltop-start */}
                <ScrollToTop />
                {/* scrolltop-end */}
            </div>
            <Footer />
            <SearchModal />
        </React.Fragment>

    );
}


export default ServiceThree;