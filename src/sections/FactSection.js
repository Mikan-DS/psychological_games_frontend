import './css/FactSection.css'

import TapeImage from "../img/tape_1.webp";
import TapeMobileImage from "../img/tape_mobile.png";
import React from "react";

export default function FactSection({children, reverse}) {
    return (
        <div className={"fact-section stretched-box card-text"}>
            <div className={"content-box"}>
                <div className={reverse?"reversed":"normal"}>
                    {children}
                </div>
            </div>
            <img className={"only-phone"} src={TapeMobileImage || ""} alt={"Лента"}/>
            <img
                className={"only-mobile only-desktop"}
                src={TapeImage || ""} alt={"Лента"}
                style={{transform: reverse? "scaleY(-1)": "none"}}/>
        </div>
    );
}