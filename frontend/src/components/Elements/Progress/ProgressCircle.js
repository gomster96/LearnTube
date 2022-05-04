import React from 'react'
import ProgressBar from 'react-customizable-progressbar'

const ProgressBarCircle = ({ progress }) => (
    <div className="item position-relative">
        <ProgressBar
            radius={100}
            progress={progress}
            // cut={120}
            rotate={-210}
            strokeWidth={16}
            strokeColor="#5d9cec"
            strokeLinecap="square"
            trackStrokeWidth={8}
            trackStrokeColor="#e6e6e6"
            trackStrokeLinecap="square"
            pointerRadius={0}
            initialAnimation={true}
            transition="1.5s ease 0.5s"
            trackTransition="0s ease"
        >
            <div className="indicator-volume circular-progress">
                <span><i className="fa fa-heart"></i></span>
            </div>
        </ProgressBar>
    </div>
)

export default ProgressBarCircle;