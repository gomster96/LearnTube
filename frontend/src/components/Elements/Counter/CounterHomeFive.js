import React, { useState } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const CounterHomeFive = (props) => {
    const { counterSectionClass } = props;

    const [state, setState] = useState(true);

    const counters = [
        {
            countNum: 450,
            countTitle: 'Happy Clients',
            counterPrefix: '+',
            counterClass: 'rs-count orange-color'
        },
        {
            countNum : 750,
            countTitle: 'Project Delivered',
            counterPrefix: '+',
            counterClass: 'rs-count'
        }

    ];

    return(
        <div className={ counterSectionClass ? counterSectionClass : 'rs-counter style3'}>
            <div className="container">
                <div className="counter-top-area">
                    {counters &&
                    <div className="row">
                        {counters.map( (counter, num) => (
                        <div key={num} className="col-sm-6 sm-pr-0 sm-pl-0 xs-mb-30">
                            <div className="counter-list">
                                <div className="counter-text">
                                    <div className="count-number">
                                        <span className={counter.counterClass}>
                                            <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={10} onEnd= {()=> setState(false)} />
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                            <span className="prefix">{counter.counterPrefix}</span>
                                        </span>                                        
                                    </div>
                                    <h3 className="title">{counter.countTitle}</h3>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default CounterHomeFive;