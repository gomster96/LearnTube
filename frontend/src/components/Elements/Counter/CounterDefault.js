import React, { useState } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'; 

const CounterDefault = () => {

    const [state, setState] = useState(true);

    const counters = [
        {
            countNum: 80,
            countTitle: 'Happy Clients',
            counterPrefix: 'k',
        },
        {
            countNum: 50,
            countTitle: 'Companies',
            counterPrefix: '+',
        },
        {
            countNum : 230,
            countTitle: 'Projects Done',
            counterPrefix: '+',
        }

    ];

    return(
        <div className="rs-counter style1">
            {counters &&
            <div className="row">
                {counters.map( (counter, num) => (
                <div key={num} className="col-md-4 sm-mb-40">
                    <div className="counter-wrapper single-counter text-center">
                        <div className="counter-text">
                            <h3 className="counter">
                                <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={10} onEnd= {()=> setState(false)} />
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                                <span className="counter-prefix">{counter.counterPrefix}</span>
                            </h3>
                            <span className="counter-title">{counter.countTitle}</span>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            }
        </div>
    )
}
export default CounterDefault;