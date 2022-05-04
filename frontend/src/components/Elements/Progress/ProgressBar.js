import React from "react";

const ProgressBar = (props) => {
    const { boxbg, figurebg, labelColor, countColor, completed, height } = props;

    const containerStyles = {
        height: `${height}px`,
        width: '100%',
        backgroundColor: boxbg,
        borderRadius: 0,
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: figurebg,
        transition: 'width 1s ease-in-out',
        borderRadius: 'inherit',
        textAlign: 'right',
    }

    const countStyle = {
        color: countColor,
        padding: 0,
        fontWeight: 'bold',
    }

    const labelStyle = {
        marginBottom: 10,
        fontWeight: '500',
        fontSize: 14,       
    }

    const labelStyleUpdated = {
        marginBottom: 10,
        fontWeight: '500',
        fontSize: 14,
        color: labelColor,        
    }

    return (
        <div className={props.ProgressParent}>
            <p className={props.ProgressLabel} style={ labelColor ? labelStyleUpdated : labelStyle}>{props.label}</p>
            <div className={props.ProgressBox} style={containerStyles}>
                <div className={props.ProgressFigure} style={fillerStyles}>
                    <span className={props.ProgressCount} style={countStyle}>{`${completed}%`}</span>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;