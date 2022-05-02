import React from 'react';

const SectionTitle = (props) => {
    return (
        <div className={props.sectionClass}>
            <div className={props.subtitleClass}>{props.subtitle}</div>
            <h2 className={props.titleClass}>{props.title}</h2>
            <p className={props.descClass}>{props.description}</p>
            <p className={props.secondDescClass}>{props.secondDescription}</p>
            <div className={props.effectClass}></div>
        </div>
    );
}

export default SectionTitle