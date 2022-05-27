import { useState } from "react";

export default function SearchBar(props) {
    const [input, setInput] = useState("");

    const onChange = (e) => {
        setInput(e.target.value);
    };

    const onClick = () => {
        props.setIsLast(false);
        props.setFilterStatus((prevState) => {
            return { ...prevState, page: 0, keyword: input };
        });
    };

    return (
        <div className="search-wrap-mk search-btn-mk">
            <input type="search" placeholder="Searching..." name="s" className="search-input" value={input} onChange={onChange} />
            <button type="submit" value="Search" onClick={onClick}>
                <i className=" flaticon-search"></i>
            </button>
        </div>
    );
}
