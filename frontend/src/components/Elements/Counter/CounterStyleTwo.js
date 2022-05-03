import React, { useState } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

// Counter Icon Image
import iconImg1 from '../../../assets/img/counter/1.png';
import iconImg2 from '../../../assets/img/counter/2.png';
import iconImg3 from '../../../assets/img/counter/3.png';
import iconImg4 from '../../../assets/img/counter/4.png';

const CounterStyleTwo = () => {

    const [state, setState] = useState(true);

    const counters = [
        {
            counterIcon: iconImg1,
            countNum: 100,
            countTitle: 'Happy Clients',
            counterPrefix: 'k',
        },
        {
            counterIcon: iconImg2,
            countNum: 30,
            countTitle: 'Years Experience',
            counterPrefix: '+',
        },
        {
            counterIcon: iconImg3,
            countNum: 200,
            countTitle: 'Products',
            counterPrefix: '+',
        },
        {
            counterIcon: iconImg4,
            countNum: 100,
            countTitle: 'Expert Engineers',
            counterPrefix: '+',
        }

    ];

    return (
        <div className="rs-counter style2 bg2 pt-100 pb-200 md-pt-80 md-pb-40">
            <div className="container">
                <div className="counter-top-area">
                    {counters &&
                        <div className="row">
                            {counters.map((counter, num) => (
                                <div key={num} className="col-lg-3 col-sm-6 md-mb-40">
                                    <div className="counter-list md-text-center">
                                        <div className="count-icon">
                                            <img
                                                src={counter.counterIcon}
                                                alt={counter.countTitle}
                                            />
                                        </div>
                                        <div className="counter-text">
                                            <h3 className="count-number">
                                                <div className="rs-count">
                                                    <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={10} onEnd= {()=> setState(false)} />
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                    <span className="counter-prefix">{counter.counterPrefix}</span>
                                                </div>
                                            </h3>
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
export default CounterStyleTwo;