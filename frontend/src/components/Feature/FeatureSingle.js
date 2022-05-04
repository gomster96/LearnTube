import React, { Component } from 'react';

const FeatureSingle = (props) => {
    return (
        <div className={props.itemClass}>
            <div className="icon-part">
                <img
                    src={props.itemImg}
                    alt={props.itemTitle}
                />
            </div>
            <div className="content-part">
                <h4 className="title">{props.itemTitle}</h4>
                <p className="dese">{props.itemDesc}</p>
            </div>
        </div>
    )
}

export default FeatureSingle