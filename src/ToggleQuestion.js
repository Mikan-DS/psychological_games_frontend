import React, {useState} from 'react';
import ToggleImage from './img/toggle.png'

export default function ToggleQuestion({question, children}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleContent = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="ToggleQuestion">
            <div className="StretchedList" onClick={toggleContent}
                 style={{cursor: 'pointer', paddingRight: 40, alignItems: "center", marginTop: 40, marginBottom: 40}}>
                <h3 style={{display: "inline", fontSize: 26, margin: 0, maxWidth: 1045}}>
                    {question}
                </h3>
                <img src={ToggleImage} style={{
                    transform: isOpen ? null : "scaleY(-1)",
                    aspectRatio: "1/1",
                    objectFit: "cover",
                    height: "100%"
                }}/>

            </div>
            {isOpen && <div style={{marginBottom: 40, width: 1050}}>{children}</div>}
            <hr style={{width: '100%', backgroundColor: '#9E9F9A'}}/>
        </div>
    );
}
