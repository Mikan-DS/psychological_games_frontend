import Modal from "./Modal";
import CoverPics from "./img/cover_pic_modal_desktop.png"
import React, {useState} from "react";
import CodeInput from "./CodeInput";



export default function LoginModal({modalControl, openPayment, api}){
    const {openModal, closeModal, isModalOpen, setIsModalOpen} = modalControl;

    const [phone, setPhone] = useState('');
    const [codes, setCodes] = useState(['', '', '', '']);

    const [vkBot, setVkBot] = useState(null)

    const handlePhone = (e) => {
        const { name, value, type} = e.target;
        setErrors({
            ...errors,
            ["phone"]: null
        })
        setPhone(value);
    };

    const [errors, setErrors] = useState({
        phone: null,
        wrongEmail: null
    });

    async function loginInit() {

        const newErrors = {
            phone: null,
            wrongEmail: null
        }

        let result = null;

        let newPhone = phone.replace("(", "").replace(")", "").replace("+", "").replace("-", "").replace("-", "").replace(" ", "").replace(" ", "")

        if (newPhone.length === 0) {
            newErrors.phone = "Телефон это обязательный параметр!"
        } else if (!newPhone.match(/^[\d ]+$/)) {
            console.log(newPhone)
            newErrors.phone = "Неправильный формат номера!"
        } else if (newPhone.at(0) !== "7" && phone.at(0) !== "8") {
            newErrors.phone = "Доступны только российские номера (+8)"
        } else {
            result = await api.loginInit(newPhone);
            console.log(result)
            if (!result || !result.result){
                newErrors.phone = result? result.message: "Неверный логин";
                newErrors.wrongEmail = true;
            }

        }


        setErrors(newErrors)

        if (result && !newErrors.phone){
            setVkBot({
                message: result.message,
                url: result.bot_url,
                phone: newPhone
            })
        }
    }


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

                <div className={"formTextInputs" + (errors.phone ? " errorInput" : "")} style={{width: 350}}>
                    <label htmlFor="phone">{errors.phone?errors.phone:"Ваш логин (номер телефона)"}</label>
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

                {vkBot ?
                    <div className="loginModal" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <h2>
                            {vkBot.message} <a href={vkBot.url+"?ref_source="+vkBot.phone}>ВК БОТЕ</a>
                        </h2>

                        <CodeInput codes={codes} setCodes={setCodes}/>

                        <button className="tertiaryButton">
                            ОТПРАВИТЬ
                        </button>
                        <a style={{cursor: "pointer"}}>
                            Получить код повторно
                        </a>
                    </div> :
                    <button className="tertiaryButton" onClick={loginInit}>
                        ВОЙТИ
                    </button>

                }

                {errors.wrongEmail? <div className="loginModal" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <label>
                        Ещё не покупали игру?
                    </label>
                    <a onClick={() => {
                        closeModal();
                        openPayment()
                    }} style={{cursor: "pointer"}}>
                        Регистрация
                    </a></div>:null
                    }


                </div>

    </Modal>
    )
}
