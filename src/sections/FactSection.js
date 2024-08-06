import './css/FactSection.css'

import TapeImage from "../img/tape_1.webp";
import TapeMobileImage from "../img/tape_mobile.png";
import React from "react";

export default function FactSection({children, reverse, screenVariant}) {
    return (
        <div className={"fact-section stretched-box card-text"}>
            <div className={"content-box"}>
                <div className={reverse?"reversed":"normal"}>
                    {children}
                </div>
            </div>
            <img
                src={(screenVariant.isPhone?TapeMobileImage:TapeImage) || ""} alt={"Лента"}
                style={{transform: !screenVariant.isPhone && reverse? "scaleY(-1)": "none"}}/>
        </div>
    );
}