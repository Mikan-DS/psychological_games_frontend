import './css/PaymentModal.css'

import React, {useState} from "react";
import Modal from "./Modal";
import RadioButton from "../components/RadioButton";
import CoverPics from "../img/cover_pic_modal_desktop.png"
import CoverPicsPhone from "../img/cover_pic_modal_phone.png";


export default function PaymentModal({modalControl, openPolicy, openLogin, api, screenVariant}) {

    const {closeModal, isModalOpen} = modalControl;

    const [selectedOption, setSelectedOption] = useState('game');

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        custom_question: '',
        consent: false,
    });

    const handleChangeFormData = (e) => {
        const {name, value, type, checked} = e.target;
        setErrors({
            ...errors,
            [name]: null
        })
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const [consultationData, setConsultationData] = useState({
        age: '10-12 ЛЕТ',
        gender: 'М',
        contactWay: "phone"
    });

    const setAge = (value) => {
        setConsultationData({
            ...consultationData,
            ["age"]: value,
        });
    };
    const setGender = (value) => {
        setConsultationData({
            ...consultationData,
            ["gender"]: value,
        });
    };
    const setContactWay = (value) => {
        setConsultationData({
            ...consultationData,
            ["contactWay"]: value,
        });
    };

    const [errors, setErrors] = useState({
        name: null,
        phone: null,
        email: null,
        consent: null,
    });

    async function pay() {
        const newErrors = {
            name: null,
            phone: null,
            email: null,
            consent: null,
        }

        if (formData.name.length < 2) {
            newErrors.name = "Имя слишком короткое!"
        }


        let phone = formData.phone;
        phone = phone.replace("(", "").replace(")", "").replace("+", "").replace("-", "").replace("-", "").replace(" ", "").replace(" ", "")

        if (phone.length === 0) {
            newErrors.phone = "Телефон это обязательный параметр!"
        } else if (!phone.match(/^[\d ]+$/)) {
            newErrors.phone = "Неправильный формат номера!"
        } else if (phone.at(0) !== "7" && phone.at(0) !== "8") {
            newErrors.phone = "Доступны только российские номера (+8)"
        } else if (!await api.isPhoneNew(phone)) {
            newErrors.phone = "Этот номер уже зарегистрирован!"
        }

        if (formData.email.length > 0 && !formData.email.match(/^[^@ ]+@[^@ .]+\.[^@ .]+$/)) {
            newErrors.email = "Неправильный формат почты!"
        }

        if (!formData.consent) {
            newErrors.consent = "Необходимо согласиться на обработку"
        }

        setErrors(newErrors)

        if (!newErrors.phone && !newErrors.name && !newErrors.consent && !newErrors.email) {
            const buy_parameters = {
                buy_type: selectedOption,
                name: formData.name,
                phone: phone,
                email: formData.email,
                consultation_parameters: null
            }

            if (selectedOption === "game_consultation") {
                buy_parameters.consultation_parameters = {
                    custom_question: formData.custom_question,
                    age: consultationData.age,
                    gender: consultationData.gender === "М",
                    contact_way: consultationData.contactWay
                }
            }

            const result = await api.buyInit(buy_parameters);

            if (result && result.url) {
                window.location = result.url;
            } else {
                window.alert("Произошла ошибка при регистрации!")
            }
        }


    }


    return (
        <Modal onClose={closeModal} isOpen={isModalOpen}>
            <div className={"payment-modal modal-text"}>
                <h2>
                    Играть
                </h2>
                <hr/>
                <div className={"variant horizontal-box"} onClick={() => setSelectedOption("game")}>
                    <div className={"vertical-box"}>
                        <div className={"horizontal-box name"}>
                            <RadioButton onChange={setSelectedOption} currentSelected={selectedOption} value="game"/>
                            ИГРА
                        </div>
                        <div className={"description"}>
                            — Неограниченное количество прохождений игры.
                            <br/>
                            — Доступ к личному кабинету со статистикой ваших прохождений (в разработке)
                        </div>
                    </div>
                    3 750 ₽
                </div>
                <hr/>
                <div className={"variant horizontal-box"}
                     onClick={() => setSelectedOption("game_consultation")}>
                    <div className={"vertical-box"}>
                        <div className={"horizontal-box name"}>
                            <RadioButton
                                onChange={setSelectedOption}
                                currentSelected={selectedOption} value="game_consultation"/>
                            ИГРА И КОНСУЛЬТАЦИЯ
                        </div>
                        <div className={"description"}>
                            — Неограниченное количество прохождений игры.
                            <br/>
                            — Доступ к личному кабинету со статистикой ваших прохождений (в разработке)
                            <br/>
                            — Консультация по результатам первого прохождения.
                            <br/>
                            — Методические рекомендации от психолога для родителей.
                            <br/>
                            — Коллектив консультантов руководствуется идеями семантической теории общения
                            руководителя проекта Евгения Доценко.
                        </div>
                    </div>
                    7 900 ₽
                </div>
                <hr/>
                <img src={(screenVariant.isPhone ? CoverPicsPhone : CoverPics) || ""} alt="Скришоты из игры"/>
                <div className={"form-input"}>
                    <div className={"form-text-inputs vertical-box personal"}>
                        <h3 className={"align-center"}>
                            ПЕРСОНАЛЬНАЯ ИНФОРМАЦИЯ
                        </h3>
                        <div className={errors.name ? "errorInput" : ""}>
                            <label htmlFor="name">{errors.name ? errors.name : "Имя*"}</label>
                            <input
                                className="form-input-text"
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChangeFormData}
                                required
                            />
                        </div>
                        <div className={"vertical-box personal"}>
                            <div className={errors.phone ? "errorInput" : ""}>
                                <label htmlFor="phone">{errors.phone ? errors.phone : "Телефон*"}</label>
                                <input
                                    className="form-input-text"
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChangeFormData}
                                    required
                                />
                            </div>
                            <div className={errors.email ? "errorInput" : ""}>
                                <label htmlFor="email">{errors.email ? errors.email : "E-mail"}</label>
                                <input
                                    className="form-input-text"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChangeFormData}
                                />
                            </div>
                        </div>
                        {selectedOption === "game_consultation" ? (
                            <div><label htmlFor="custom_question">Напишите ваш вопрос</label>
                                <input
                                    className="form-input-text"
                                    type="text"
                                    id="custom_question"
                                    name="custom_question"
                                    value={formData.custom_question}
                                    onChange={handleChangeFormData}
                                /></div>) : null}

                        <div
                            className={"horizontal-box align-start policy-confirmation" + (errors.consent ? " errorInput" : "")}>

                            <input
                                type="checkbox"
                                id="consent"
                                name="consent"
                                checked={formData.consent}
                                onChange={handleChangeFormData}
                                required
                            />
                            <div>
                                {errors.consent ? errors.consent : "Я согласен на обработку"}
                                <a onClick={() => {
                                    closeModal();
                                    openPolicy()
                                }}> Персональных данных</a>
                            </div>

                        </div>
                    </div>

                    {selectedOption === "game_consultation" ? (<div className={"vertical-box consultation"}>

                            <div className={"block age"}>
                                <h3>
                                    ВОЗРАСТ ВАШЕГО РЕБЕНКА
                                </h3>

                                <div>
                                    <div>
                                        <RadioButton onChange={setAge} currentSelected={consultationData.age}
                                                     value="10-12 ЛЕТ"/>
                                        10-12 ЛЕТ
                                    </div>
                                    <div>
                                        <RadioButton onChange={setAge} currentSelected={consultationData.age}
                                                     value="12-14 ЛЕТ"/>
                                        12-14 ЛЕТ
                                    </div>
                                    <div>
                                        <RadioButton onChange={setAge} currentSelected={consultationData.age}
                                                     value="14-16 ЛЕТ"/>
                                        14-16 ЛЕТ
                                    </div>
                                    <div>
                                        <RadioButton onChange={setAge} currentSelected={consultationData.age}
                                                     value="16-18 ЛЕТ"/>
                                        16-18 ЛЕТ
                                    </div>
                                    <div>
                                        <RadioButton onChange={setAge} currentSelected={consultationData.age}
                                                     value="КОНСУЛЬТАЦИЯ ДЛЯ РОДИТЕЛЯ"/>
                                        КОНСУЛЬТАЦИЯ ДЛЯ РОДИТЕЛЯ
                                    </div>
                                </div>


                            </div>

                            <div className={"block gender"}>
                                <h3>
                                    ПОЛ ВАШЕГО РЕБЕНКА
                                </h3>
                                <div>
                                    <div>
                                        <RadioButton onChange={setGender} currentSelected={consultationData.gender}
                                                     value="М"/>
                                        М
                                    </div>
                                    <div>
                                        <RadioButton onChange={setGender} currentSelected={consultationData.gender}
                                                     value="Ж"/>
                                        Ж
                                    </div>
                                </div>

                            </div>

                            <div className={"block contact-way"}>
                                <h3>
                                    КАК ВЫ ХОТИТЕ, ЧТОБЫ МЫ С ВАМИ СВЯЗАЛИСЬ ДЛЯ ВЫБОРА ВРЕМЕНИ КОНСУЛЬТАЦИИ?
                                </h3>
                                <div>
                                    <div>
                                        <RadioButton onChange={setContactWay}
                                                     currentSelected={consultationData.contactWay}
                                                     value="phone"/>
                                        ПО ТЕЛЕФОНУ
                                    </div>
                                    <div>
                                        <RadioButton onChange={setContactWay}
                                                     currentSelected={consultationData.contactWay}
                                                     value="telegram"/>
                                        ТЕЛЕГРАМ
                                    </div>
                                    <div>
                                        <RadioButton onChange={setContactWay}
                                                     currentSelected={consultationData.contactWay}
                                                     value="whatsapp"/>
                                        WHATS APP
                                    </div>

                                    <div>
                                        <RadioButton onChange={setContactWay}
                                                     currentSelected={consultationData.contactWay}
                                                     value="viber"/>
                                        VIBER
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null}

                </div>

                <button className={"tertiary-button large"} onClick={pay}>
                    ОПЛАТИТЬ
                </button>

                <div className={"vertical-box modal-sub-text"}>
                    Уже покупали игру?
                    <a onClick={() => {
                        closeModal();
                        openLogin()
                    }}>
                        Авторизоваться
                    </a>
                </div>
            </div>
        </Modal>
    )
}