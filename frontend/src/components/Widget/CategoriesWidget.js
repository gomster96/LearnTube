import React from "react";
import { Link } from "react-router-dom";

const CategoriesWidget = () => {
    return (
        <div className="widget-archives mb-50">
            <h3 className="widget-title">Categories</h3>
            <ul>
                <li>
                    <Link to="/learntube/blog">College</Link>
                </li>
                <li>
                    <Link to="/learntube/blog">High School</Link>
                </li>
                <li>
                    <Link to="/learntube/blog">Primary</Link>
                </li>
                <li>
                    <Link to="/learntube/blog">School</Link>
                </li>
                <li>
                    <Link to="/learntube/blog">University</Link>
                </li>
            </ul>
        </div>
    );
};

export default CategoriesWidget;
