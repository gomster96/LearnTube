import React from 'react';

const SingleFeature = (props) => {
	const { featureClass, featureIcon, featureTitle } = props;
	return(
        <div className={featureClass ? featureClass : 'rs-iconbox-area'}>
            <div className="box-inner">
                <div className="icon-area">
                    <img
                        src={featureIcon}
                        alt={featureTitle}
                    />
                </div>
                <div className="text-area">
                    <h3 className="icon-title">{featureTitle ? featureTitle : 'Future Students'}</h3>
                </div>
            </div>
        </div>
	)
}

export default SingleFeature