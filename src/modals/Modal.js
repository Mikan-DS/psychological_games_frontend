import "./css/Modal.css"

import {useEffect} from "react";
import closeButtonImage from '../img/close_button.png'

export default function Modal({isOpen, onClose, children}) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;
    return (
        <div className={"modal-overlay "+(isOpen? "open":"close")}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    <img src={closeButtonImage || ""} alt="X"/>
                </button>
                {children}
            </div>
        </div>
    );
};