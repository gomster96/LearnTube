const SingleTestimonialSix = (props) => {
    const { itemClass, description, name, designation } = props;
    return (
        <div className={itemClass ? itemClass : 'testimonial-item'}>
            <div className="row justify-content-end">
                <div className="col-lg-4">
                    <div className="img-part">
                        <img
                            src={props.authorImg}
                            alt={name}
                        />
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="content-part">
                        <div className="content-wrap">
                            <div className="text">
                                <p>
                                    {description ? description : 'Education is the passport to the future for tomorrow belongs to those who pre pare for it today.Sed ut perspiciatis unde omnis  iste natus error sit vo luptatem accusantium do loremque laudantium,'}
                                </p>
                            </div>
                            <div className="info">
                                <div className="cite">
                                    <h3 className="name">{name ? name : 'Mahadi Mansura'}</h3>
                                </div>
                                <span className="position">{designation ? designation : 'CSE Student'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleTestimonialSix