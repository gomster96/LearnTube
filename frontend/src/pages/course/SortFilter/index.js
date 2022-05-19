export default function SortFilter(props) {
    const onChange = (e) => {
        props.setFilterStatus((prevState) => {
            return { ...prevState, condition: parseInt(e.target.value) };
        });
    };

    return (
        <div className="widget-area">
            <div className="type-form-mk">
                <div className="form-group mb-0">
                    <div className="custom-select-box">
                        <select id="timing" onChange={onChange}>
                            <option value={0}>최신순</option>
                            <option value={1}>인기순</option>
                            <option value={2}>이름순</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
