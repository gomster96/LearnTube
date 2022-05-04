import { Link } from 'react-router-dom';

const SingleTestimonial4 = (props) => {
    const { itemClass, description, name, authorLink, designation } = props;
    return (
        <div className={itemClass ? itemClass : 'testi-item'}>
            <div className="row no-gutter">
                <div className="col-md-4">
                    <div className="user-img">
                        <img
                            src={props.authorImg}
                            alt={name}
                        />
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="user-info">
                        <span className="quote">
                            <i className="flaticon-phrase"></i>
                        </span>
                        <div className="desc">{description ? description : 'Education is the passport to the future for tomorrow belongs to those who pre pare for it today.Sed ut perspiciatis unde omnis  iste natus error sit vo luptatem accusantium do loremque laudantium,'}</div>
                        <Link className="name" to={authorLink ? authorLink : '#'}>{name ? name : 'Mahadi Monsura'}</Link>
                        <span className="designation">{designation ? designation : 'Student'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleTestimonial4