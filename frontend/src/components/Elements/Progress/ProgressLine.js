import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

const ProgressApp = () => {
    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
    }, []);

    return (
        <div className="ProgressApp">
            <ProgressBar bgcolor={"#ff9900"} completed={completed} />
        </div>
    );
}

export default ProgressApp;