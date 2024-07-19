import React, {useState} from "react";
import Modal from "./Modal";
import RadioButton from "./RadioButton";
import CoverPics from "./img/cover_pic_modal_desktop.png"


export default function PaymentModal({modalControl, openPolicy, openLogin, api}) {

    const {openModal, closeModal, isModalOpen, setIsModalOpen} = modalControl;

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
            <h1>
                Играть
            </h1>

            <hr style={{width: '100%', backgroundColor: '#F3F2EE', border: 0, height: 1}}/>

            <div className="paymentVariant" onClick={() => setSelectedOption("game")}>
                <RadioButton onChange={setSelectedOption} currentSelected={selectedOption} value="game"/>
                <div style={{width: "100%"}}>
                    <div className="StretchedList">
                        <div>
                            <label>
                                Игра
                            </label>
                            <p>
                                — Неограниченное количество прохождений игры.
                                <br/>
                                — Доступ к личному кабинету со статистикой ваших прохождений (в разработке)
                            </p>
                        </div>
                        <label>
                            3 750 ₽
                        </label>
                    </div>
                </div>

            </div>
            <hr style={{width: '100%', backgroundColor: '#F3F2EE', border: 0, height: 1}}/>
            <div className="paymentVariant" onClick={() => setSelectedOption("game_consultation")}>
                <RadioButton
                    onChange={setSelectedOption}
                    currentSelected={selectedOption}
                    value="game_consultation"/>

                <div style={{width: "100%"}}>
                    <div className="StretchedList">
                        <div>
                            <label>
                                ИГРА И КОНСУЛЬТАЦИЯ
                            </label>
                            <p>
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
                            </p>
                        </div>
                        <label>
                            7 900 ₽
                        </label>
                    </div>
                </div>
            </div>
            <hr style={{width: '100%', backgroundColor: '#F3F2EE', border: 0, height: 1}}/>

            <img src={CoverPics} alt="Скришоты из игры" style={{width: "100%"}}/>

            <div className="formInputs">
                <div className="formTextInputs">

                    <h2>
                        ПЕРСОНАЛЬНАЯ ИНФОРМАЦИЯ
                    </h2>

                    <div className={errors.name ? "errorInput" : ""}>
                        <label htmlFor="name">{errors.name ? errors.name : "Имя*"}</label>
                        <input
                            className="formInputText"
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChangeFormData}
                            required
                        />
                    </div>

                    <div style={{display: "flex", width: "100%", gap: 20}}>
                        <div className={errors.phone ? "errorInput" : ""} style={{width: "100%"}}>
                            <label htmlFor="phone">{errors.phone ? errors.phone : "Телефон*"}</label>
                            <input
                                className="formInputText"
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChangeFormData}
                                required
                            />
                        </div>
                        <div className={errors.email ? "errorInput" : ""} style={{width: "100%"}}>
                            <label htmlFor="email">{errors.email ? errors.email : "E-mail"}</label>
                            <input
                                className="formInputText"
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
                                className="formInputText"
                                type="text"
                                id="custom_question"
                                name="custom_question"
                                value={formData.custom_question}
                                onChange={handleChangeFormData}
                            /></div>) : null}
                </div>
                <div className={errors.consent ? "errorInput" : ""}>
                    <label style={{display: "flex", alignItems: "center"}}>
                        <input
                            type="checkbox"
                            id="consent"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleChangeFormData}
                            style={{marginRight: 10}}
                            required
                        />
                        {errors.consent ? errors.consent : "Я согласен на обработку"}&nbsp;<a onClick={() => {
                        closeModal();
                        openPolicy()
                    }} style={{cursor: "pointer"}}>Персональных данных</a>
                    </label>
                </div>


                {selectedOption === "game_consultation" ? (<div className="consultationParameters">
                        <h3 style={{marginTop: 0}}>
                            ВОЗРАСТ ВАШЕГО РЕБЕНКА
                        </h3>

                        <div style={{marginLeft: -40}}>
                            <RadioButton onChange={setAge} currentSelected={consultationData.age} value="10-12 ЛЕТ"/>
                            <label>10-12 ЛЕТ</label>
                        </div>
                        <div>
                            <RadioButton onChange={setAge} currentSelected={consultationData.age} value="12-14 ЛЕТ"/>
                            <label>12-14 ЛЕТ</label>
                        </div>
                        <div>
                            <RadioButton onChange={setAge} currentSelected={consultationData.age} value="14-16 ЛЕТ"/>
                            <label>14-16 ЛЕТ</label>
                        </div>
                        <div>
                            <RadioButton onChange={setAge} currentSelected={consultationData.age} value="16-18 ЛЕТ"/>
                            <label>16-18 ЛЕТ</label>
                        </div>
                        <div>
                            <RadioButton onChange={setAge} currentSelected={consultationData.age}
                                         value="КОНСУЛЬТАЦИЯ ДЛЯ РОДИТЕЛЯ"/>
                            <label>КОНСУЛЬТАЦИЯ ДЛЯ РОДИТЕЛЯ</label>
                        </div>

                        <h3>
                            ПОЛ ВАШЕГО РЕБЕНКА
                        </h3>
                        <div style={{marginLeft: -40}}>
                            <RadioButton onChange={setGender} currentSelected={consultationData.gender}
                                         value="М"/>
                            <label>М</label>
                        </div>
                        <div>
                            <RadioButton onChange={setGender} currentSelected={consultationData.gender}
                                         value="Ж"/>
                            <label>Ж</label>
                        </div>

                        <h3>
                            КАК ВЫ ХОТИТЕ, ЧТОБЫ МЫ С ВАМИ СВЯЗАЛИСЬ ДЛЯ ВЫБОРА ВРЕМЕНИ КОНСУЛЬТАЦИИ?
                        </h3>
                        <div style={{marginLeft: -40}}>
                            <RadioButton onChange={setContactWay} currentSelected={consultationData.contactWay}
                                         value="phone"/>
                            <label>ПО ТЕЛЕФОНУ</label>
                        </div>
                        <div>
                            <RadioButton onChange={setContactWay} currentSelected={consultationData.contactWay}
                                         value="telegram"/>
                            <label>ТЕЛЕГРАМ</label>
                        </div>
                        <div>
                            <RadioButton onChange={setContactWay} currentSelected={consultationData.contactWay}
                                         value="whatsapp"/>
                            <label>WHATS APP</label>
                        </div>

                        <div>
                            <RadioButton onChange={setContactWay} currentSelected={consultationData.contactWay}
                                         value="viber"/>
                            <label>VIBER</label>
                        </div>
                    </div>
                ) : null}

            </div>

            <button className="tertiaryButton" onClick={pay}>
                ОПЛАТИТЬ
            </button>

            <div className="formInputs" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <label style={{display: "block", marginTop: 40, marginBottom: 4}}>
                    Уже покупали игру?
                </label>
                <a onClick={() => {
                    closeModal();
                    openLogin()
                }} style={{cursor: "pointer"}}>
                    Авторизоваться
                </a>
            </div>
        </Modal>
    )
}