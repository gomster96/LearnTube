import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import AOS from 'aos';

const Counter = () => {

    useEffect(() => {
        AOS.init();
    })

    const [state, setState] = useState(true);

    const counters = [
        {
            countNum: 2958,
            countTitle: 'Finished Sessions',
            counterPrefix: '',
        },
        {
            countNum: 4523,
            countTitle: 'Enrolled Learners',
            counterPrefix: '+',
        },
        {
            countNum: 120,
            countTitle: 'Online Instructors',
            counterPrefix: '+',
        },
        {
            countNum: 100,
            countTitle: 'Satisfaction Rate',
            counterPrefix: '%',
        },

    ];

    return (
        <div className="rs-counter style2-about">
            <div className="container">
                {counters &&
                    <div className="row rs-counter couter-area">
                        {counters.map((counter, num) => (
                            <div key={num} className="col-lg-3 col-md-6 md-mb-30">
                                <div className="counter-item text-center">
                                    <h2 className="number rs-count">
                                        <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={5} onEnd={() => setState(false)} />
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                        <span className="counter-prefix">{counter.counterPrefix}</span>
                                    </h2>
                                    <h4 className="title mb-0">{counter.countTitle}</h4>
                                </div>
                            </div>
                        )).slice(0, 1)}
                        {counters.map((counter, num) => (
                            <div key={num} className="col-lg-3 col-md-6 md-mb-30">
                                <div className="counter-item text-center">
                                    <h2 className="number rs-count">
                                        <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={5} onEnd={() => setState(false)} />
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                        <span className="counter-prefix">{counter.counterPrefix}</span>
                                    </h2>
                                    <h4 className="title mb-0">{counter.countTitle}</h4>
                                </div>
                            </div>
                        )).slice(1, 2)}
                        {counters.map((counter, num) => (
                            <div key={num} className="col-lg-3 col-md-6 md-mb-30">
                                <div className="counter-item text-center">
                                    <h2 className="number rs-count">
                                        <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={5} onEnd={() => setState(false)} />
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                        <span className="counter-prefix">{counter.counterPrefix}</span>
                                    </h2>
                                    <h4 className="title mb-0">{counter.countTitle}</h4>
                                </div>
                            </div>
                        )).slice(2, 3)}
                        {counters.map((counter, num) => (
                            <div key={num} className="col-lg-3 col-md-6 md-mb-30">
                                <div className="counter-item text-center">
                                    <h2 className="number rs-count">
                                        <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={5} onEnd={() => setState(false)} />
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                        <span className="counter-prefix">{counter.counterPrefix}</span>
                                    </h2>
                                    <h4 className="title mb-0">{counter.countTitle}</h4>
                                </div>
                            </div>
                        )).slice(3, 4)}
                    </div>
                }
            </div>
        </div >
    );
}

export default Counter;