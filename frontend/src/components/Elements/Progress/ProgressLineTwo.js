import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

const ProgressAppTwo = () => {
    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
    }, []);

    return (
        <div className="ProgressAppTwo">
            <ProgressBar bgcolor={"#096bd8"} completed={completed} />
        </div>
    );
}

export default ProgressAppTwo;