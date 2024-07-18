import Modal from "./Modal";
import CoverPics from "./img/cover_pic_modal_desktop.png"
import React, {useState} from "react";
import CodeInput from "./CodeInput";



export default function LoginModal({modalControl, openPayment}){
    const {openModal, closeModal, isModalOpen, setIsModalOpen} = modalControl;

    const [phone, setPhone] = useState('');
    const [codes, setCodes] = useState(['', '', '', '']);


    const handlePhone = (e) => {
        const { name, value, type} = e.target;

        setPhone(value);
    };


    return(
        <Modal onClose={closeModal} isOpen={isModalOpen}>

            <div className="loginModal" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h1>
                    ДОБРО ПОЖАЛОВАТЬ
                </h1>
                <h2>
                    Так здорово снова встретиться!
                </h2>
                <img src={CoverPics} alt="Скришоты из игры"/>

                <div className="formTextInputs" style={{width: 350}}>
                    <label htmlFor="phone">Ваш логин (номер телефона)</label>
                    <input
                        className="formInputText"
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={handlePhone}
                        required
                    />
                </div>

                <h2>
                    Получите временный код для входа в <a href="#">ВК БОТЕ</a>
                </h2>

                <CodeInput codes={codes} setCodes={setCodes}/>

                <button className="tertiaryButton">
                    ОТПРАВИТЬ
                </button>
                <a style={{cursor: "pointer"}}>
                    Получить код повторно
                </a>
                <label>
                    Ещё не покупали игру?
                </label>
                <a onClick={() => {
                    closeModal();
                    openPayment()
                }} style={{cursor: "pointer"}}>
                    Регистрация
                </a>
            </div>

        </Modal>
    )
}
