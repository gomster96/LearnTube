import { useEffect, useState } from "react";
import "../../../assets/css/courseList.css";

export default function PagingBar(props) {
    const [pages, setPages] = useState([]);
    const onClickNumber = (e) => {
        props.setFilterStatus((prevState) => {
            return { ...prevState, page: e.target.getAttribute("value") };
        });
    };

    useEffect(() => {
        let list = [];
        const seq = parseInt(props.page / 5);
        for (let i = 0; i < 5; i++) {
            const nextPage = i + 5 * seq;
            if (nextPage >= parseInt(props.totalPage)) continue;
            list.push(nextPage);
        }
        setPages(list);
    }, [props.page, props.totalPage]);

    const onClickRightArrow = () => {
        let next = props.page + 1;
        if (next >= props.totalPage) next = props.totalPage - 1;

        props.setFilterStatus((prevState) => {
            return { ...prevState, page: next };
        });
    };
    const onClickLeftArrow = () => {
        let next = props.page - 1;
        if (next < 0) next = 0;

        props.setFilterStatus((prevState) => {
            return { ...prevState, page: next };
        });
    };
    return (
        <div className="pagination-area orange-color text-center mt-30 md-mt-0">
            <ul className="pagination-part">
                <li key="leftArrow">
                    <div class="arrow">
                        <i className="fa fa-arrow-left" onClick={onClickLeftArrow}></i>
                    </div>
                </li>
                {pages.map((pageNum) => {
                    if (pageNum === parseInt(props.page)) {
                        return (
                            <li key={pageNum + 1} className="active">
                                <div class="active pages" value={pageNum} onClick={onClickNumber}>
                                    {pageNum + 1}
                                </div>
                            </li>
                        );
                    }
                    return (
                        <li key={pageNum + 1}>
                            <div class="pages" value={pageNum} onClick={onClickNumber}>
                                {pageNum + 1}
                            </div>
                        </li>
                    );
                })}

                <li>
                    <div class="arrow" key="leftArrow">
                        <i className="fa fa-arrow-right" onClick={onClickRightArrow}></i>
                    </div>
                </li>
            </ul>
        </div>
    );
}
