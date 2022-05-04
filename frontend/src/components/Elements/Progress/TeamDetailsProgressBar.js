import React from "react";

const TeamDetailsProgressBar = (props) => {
    const { borderColor, progressBG, labelColor, countColor, countBG, completed, height, labelText } = props;

    const containerStyles = {
        height: `${height}px`,
        width: '100%',
        borderColor: borderColor,
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: progressBG,
        transition: 'width 1s ease-in-out',
    }

    const countStyle = {
        color: countColor,
        backgroundColor: countBG, 
    }

    const labelStyle = {
        color: labelColor,     
    }

    return (
        <div className="progress rs-progress" style={containerStyles}>
            <div className="progress-bar progress-bar-success" style={fillerStyles}>
                <span className="pb-label" style={labelStyle}>{labelText ? labelText : 'Progress Label'}</span>
                <span className="pb-percent" style={countStyle}>{`${completed}%`}</span>
            </div>
        </div>
    );
};

export default TeamDetailsProgressBar;