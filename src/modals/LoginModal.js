import './css/LoginModal.css'

import Modal from "./Modal";
import CoverPics from "../img/cover_pic_modal_desktop.png"
import CoverPicsPhone from "../img/cover_pic_modal_phone.png"
import React, {useState} from "react";
import CodeInput from "../components/CodeInput";


export default function LoginModal({modalControl, openPayment, api, initialLogin, screenVariant, newUser}) {
    const {closeModal, isModalOpen} = modalControl;

    const [phone, setPhone] = useState(initialLogin);
    const [codes, _setCodes] = useState(['', '', '', '']);
    function setCodes(codes) {
        setErrors(
            {
                ...errors,
                ["code"]: null
            }
        )
        _setCodes(codes);
    }
    const [vkBot, setVkBot] = useState(null)
    const handlePhone = (e) => {
        const {value} = e.target;
        setErrors({
            ...errors,
            ["phone"]: null
        })
        setPhone(value);
    };

    const [errors, setErrors] = useState({
        phone: initialLogin && !newUser ? "Код неверен или устарел, получите новый." : null,
        wrongEmail: null,
        code: null
    });

    async function loginInit() {
        const newErrors = {
            phone: null,
            wrongEmail: null,
            code: null
        }
        let result = null;
        let newPhone = phone.replaceAll(/[^0-9]/g, "")
        if (newPhone.length === 0) {
            newErrors.phone = "Телефон это обязательный параметр!"
        } else if (!newPhone.match(/^[\d ]+$/)) {
            newErrors.phone = "Неправильный формат номера!"
        } else if (newPhone.at(0) !== "7" && newPhone.at(0) !== "8") {
            newErrors.phone = "Доступны только российские номера (+8)"
        } else {
            result = await api.loginInit(newPhone);
            if (!result || !result.result) {
                newErrors.phone = result ? result.message : "Неверный логин";
                newErrors.wrongEmail = true;
            }
        }
        setErrors(newErrors)
        if (result && !newErrors.phone) {
            setVkBot({
                message: result.message,
                url: result.bot_url,
                phone: newPhone
            })
        }
    }
    function login() {

        const newErrors = {
            phone: null,
            wrongEmail: null,
            code: null
        }

        if (codes.join("").length !== 4) {
            newErrors.code = "Код это обязательный параметр!"
            setErrors(newErrors)
        } else {
            window.location = "/auth/login/" + vkBot.phone + "/" + codes.join("")
        }

    }

    return (
        <Modal onClose={closeModal} isOpen={isModalOpen}>

            <div className={"login-modal vertical-box align-center"}>
                <h2>
                    ДОБРО ПОЖАЛОВАТЬ
                </h2>
                <div className={"body-text"}>
                    Так здорово снова встретиться!
                </div>
                <img src={(screenVariant.isPhone? CoverPicsPhone: CoverPics) || ""} alt="Скришоты из игры"/>

                <div className={"form-text-inputs" + (errors.phone ? " error" : "")}>
                    <label htmlFor="phone">{errors.phone ? errors.phone : "Ваш логин (номер телефона)"}</label>
                    <input
                        className="form-input-text"
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={handlePhone}
                        required
                    />
                </div>

                {vkBot ?
                    <div className={"get-code vertical-box align-center" + (errors.code ? " error" : "")}>
                        <div className={"body-text"}>
                            {vkBot.message} <a href={vkBot.url + "&ref_source=" + vkBot.phone} target="_blank">ВК
                            БОТЕ</a>
                        </div>

                        <CodeInput codes={codes} setCodes={setCodes}/>

                        <button className={"tertiary-button large"} onClick={login}>
                            ОТПРАВИТЬ
                        </button>

                        <div className={"vertical-box modal-sub-text"}>
                            <a onClick={loginInit}>
                                Получить код повторно
                            </a>
                        </div>
                    </div> :
                    <button className={"tertiary-button large"} onClick={loginInit}>
                        ВОЙТИ
                    </button>

                }

                {errors.wrongEmail ?
                    <div className={"vertical-box modal-sub-text"}>
                        Ещё не покупали игру?
                        <a onClick={() => {
                            closeModal();
                            openPayment()
                        }}>
                            Регистрация
                        </a>
                    </div> : null
                }
            </div>
        </Modal>
    )
}
