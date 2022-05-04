import React from 'react';

const SingleServiceNumber = (props) => {
	return(
        <div className={props.itemClass}>
            <div className="number-text">
                <div className="number-area">
                    {props.serviceNumber}
                </div>
                <div className="number-title">
                    <h3 className="title">{props.Title}</h3>
                </div>
                <p className="number-txt">{props.Text}</p>
            </div>
        </div>
	)
}

export default SingleServiceNumber