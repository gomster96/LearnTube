import { Link } from 'react-router-dom';

const SingleTestimonial3 = (props) => {
    const { itemClass, authorImage, Title, Designation, Description } = props;
    return (

        <div className={itemClass ? itemClass : 'testi-item'}>
            <div className="row y-middle no-gutter">
                <div className="col-md-4">
                    <div className="user-info">
                        <img
                            src={authorImage}
                            alt={Title}
                        />
                        <h4 className="name">{Title ? Title : 'Saiko Najran'}</h4>
                        <span className="designation">{Designation ? Designation : 'Student'}</span>
                        <ul className="ratings">
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="desc">{Description ? Description : 'The charms of pleasure of the moment so blinded by desire that they cannot foresee the pain and trouble that are bound ensue and equal blame belongs to those who fail in their duty.'}</div>
                </div>
            </div>
        </div>
    )
}

export default SingleTestimonial3