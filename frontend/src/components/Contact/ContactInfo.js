import React from 'react';

const ContactInfo = (props) => {
    const { boxClass, iconClass, title, address, phone, email } = props;
    return (
        <React.Fragment>

            <div className={`address-box ${boxClass}`}>
                <div className="address-icon">
                    <i className={iconClass}></i>
                </div>
                <div className="address-text">
                    <span className="label">{title ? title : 'Title Here'}</span>
                    {address ? <div className="address">{address}</div> : ''}
                    {phone ? <a className="phone" href={`tel:${phone}`}>{phone}</a> : ''}
                    {email ? <a className="email" href={`mailto:${email}`}>{email}</a> : ''}
                </div>
            </div>
        </React.Fragment >
    );

}

export default ContactInfo;