import React from "react";
import "../../style/Filter.css"
import { useState } from "react";
function Filter(props) {
    const [selected, setSelected] = useState(0);

    return (
        <div className="filter">
            <div style={{ display: "flex" }}>
                <div onClick={() => { setSelected(0) }} className={`filter-name ${selected === 0 && "active"}`}>Motion trend pick</div>
                <div onClick={() => { setSelected(1) }} className={`filter-name ${selected === 1 && "active"}`}>Latest</div>
                <div onClick={() => { setSelected(2) }} className={`filter-name ${selected === 2 && "active"}`}>Recommended</div>
            </div>
            <div style={{fontSize: "13px", fontWeight: "500"}}>
                Selection criteria
            </div>
        </div>
    );
}

export default Filter;