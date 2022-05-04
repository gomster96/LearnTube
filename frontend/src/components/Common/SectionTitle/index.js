import { useEffect } from 'react';
import AOS from 'aos';
const SectionTitle = (props) => {
    const { titleClass, subtitleClass, bottomSubTitleClass, descClass, secondDescClass, effectClass, animateName, animateDelay, animateDuration } = props;

    useEffect(() => {
        AOS.init();
    })

    return (
        <div className={props.sectionClass} data-aos={animateName ? animateName : ''} data-aos-delay={animateDelay ? animateDelay : ''} data-aos-duration={animateDuration ? animateDuration : ''}>
            {subtitleClass ? <div className={props.subtitleClass}>{props.subtitle}</div> : ''}
            {titleClass ? <h2 className={props.titleClass}>{props.title}</h2> : ''}
            {bottomSubTitleClass ? <div className={props.bottomSubTitleClass}>{props.bottomSubTitle}</div> : ''}
            {descClass ? <div className={props.descClass}>{props.description}</div> : ''}
            {secondDescClass ? <div className={props.secondDescClass}>{props.secondDescription}</div> : ''}
            {effectClass ? <div className={props.effectClass}></div> : ''}
        </div>
    );
}

export default SectionTitle