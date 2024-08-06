import React, {useState} from 'react';
import ToggleImage from '../img/toggle.png'

export default function ToggleQuestion({question, children}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleContent = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={"toggle-question body-text2"}>
            <div className={"stretched-box"} onClick={toggleContent}>
                <h3>{question}</h3>
                <img src={ToggleImage || ""} style={{
                    transform: isOpen ? null : "scaleY(-1)",
                    aspectRatio: "1/1",
                    objectFit: "cover",
                    height: "100%"
                }} alt={">"}/>

            </div>
            {isOpen && <div className={"answer"}>{children}</div>}
            <hr/>
        </div>
    );
}
