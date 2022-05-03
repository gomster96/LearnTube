import {Link} from 'react-router-dom';

const SinglePricing = (props) => {
    const { itemClass, badgeClass } = props;
	return(
        <div className={itemClass ? itemClass : 'pricing-table'}>
            <div className={badgeClass ? badgeClass : 'pricing-badge'}>{props.badge}</div>
            <div className="pricing-icon">
                <img
                    src={props.pricingImage}
                    alt={props.period}
                />
            </div>
            <div className="pricing-table-price">
                <div className="pricing-table-bags">
                    <span className="pricing-currency">{props.currency}</span>
                    <span className="table-price-text">{props.price}</span>
                    <span className="table-period">{props.period}</span>
                </div>
            </div>
            <div className="pricing-table-body">
                <ul>
                    <li className={props.ability1}>{props.featureText1}</li>
                    <li className={props.ability2}>{props.featureText2}</li>
                    <li className={props.ability3}>{props.featureText3}</li>
                    <li className={props.ability4}>{props.featureText4}</li>
                </ul>
            </div>
            <div className="btn-part">
                <Link href={props.buttonURL} as={'http://localhost:3000' + props.buttonURL}>
                    <a className={props.buttonClass}>{props.buttonText}</a>
                </Link>
            </div>
        </div>
	)
}

export default SinglePricing