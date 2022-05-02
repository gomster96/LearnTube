import React, { useState } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const CounterStyleThree = () => {

    const [state, setState] = useState(true);

    const counters = [
        {
            countNum: 569,
            countTitle: 'Projct Complate',
            counterPrefix: 'k',
        },
        {
            countNum: 356,
            countTitle: 'Happy Clients',
            counterPrefix: '+',
        },
        {
            countNum: 783,
            countTitle: 'Business Partners',
            counterPrefix: '+',
        },
        {
            countNum: 894,
            countTitle: 'IT Consultant',
            counterPrefix: '+',
        }

    ];

    return (
        <div className="rs-counter style3 modify1 pt-90 pb-80 md-pb-30">
            <div className="container">
                <div className="counter-top-area">
                    {counters &&
                        <div className="row">
                            {counters.map((counter, num) => (
                                <div key={num} className="col-xl-3 col-lg-3 col-md-6 md-mb-50">
                                    <div className="counter-list">
                                        <div className="counter-text">
                                            <div className="count-number">
                                                <span className="rs-count">
                                                    <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={10} onEnd= {()=> setState(false)} />
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </span>
                                                <span className="prefix">{counter.counterPrefix}</span>
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
export default CounterStyleThree;