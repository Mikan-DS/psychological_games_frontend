import TapeImage from "../img/tape_1.webp";
import TapeMobileImage from "../img/tape_mobile.png";
import React from "react";

export default function FactSection({children}) {
    // style={{backgroundImage: "url(" + TapeImage + ")"}}
    return (
        <div className={"fact-section stretched-box card-text"}>
            <div className={"content-box"}>
                {children}
            </div>
            <img src={TapeMobileImage || ""} alt={"Лента"}/>
        </div>
    );
}