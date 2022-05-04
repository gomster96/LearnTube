import React from 'react';
import GoogleMapReact from 'google-map-react';
import ContactForm from '../../components/Contact/ContactForm';

const Contact = () => {
    
    const defaultMap = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    return (
        <div className="rs-contact">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5 mb-30">
                        <div className="map-wrapper">
                            <div className="contact-map" style={{ height: '390px', width: '100%' }}>
                                <GoogleMapReact defaultCenter={defaultMap.center} defaultZoom={defaultMap.zoom}>
                                    <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
                                </GoogleMapReact>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 mb-30">
                        <div className="contact-widget">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;