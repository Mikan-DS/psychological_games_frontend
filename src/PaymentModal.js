import React, {useState} from "react";
import Modal from "./Modal";
import RadioButton from "./RadioButton";
import CoverPics from "./img/cover_pic_modal_desktop.png"



export default function PaymentModal({modalControl}){

    const {openModal, closeModal, isModalOpen, setIsModalOpen} = modalControl;

    const [selectedOption, setSelectedOption] = useState('game');

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        custom_question: '',
        vk_link: '',
        consent: false,
    });

    const handleChangeFormData = (e) => {
        const { name, value, type, checked } = e.target;
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

                    <div>
                        <label htmlFor="name">Имя*</label>
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
                        <div style={{width: "100%"}}>
                            <label htmlFor="phone">Телефон*</label>
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
                        <div style={{width: "100%"}}>
                            <label htmlFor="email">E-mail</label>
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


                    <label htmlFor="vk_link">Ссылка на ваш вк*</label>
                    <input
                        className="formInputText"
                        type="url"
                        id="vk_link"
                        name="vk_link"
                        value={formData.vk_link}
                        onChange={handleChangeFormData}
                    />

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
                <label style={{display: "flex", alignItems: "center"}}>
                    <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChangeFormData}
                        style={{marginRight: 10}}
                    />
                    Я согласен на обработку&nbsp;<a href="#">Персональных данных</a>
                </label>

                {selectedOption === "game_consultation" ? (<div className="consultationParameters">
                        <h3 style={{marginTop:0}}>
                            ВОЗРАСТ ВАШЕГО РЕБЕНКА
                        </h3>

                        <div style={{marginLeft:-40}}>
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
                        <div style={{marginLeft:-40}}>
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
                        <div style={{marginLeft:-40}}>
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

            <button className="tertiaryButton">
                ОПЛАТИТЬ
            </button>

            <div className="formInputs" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <label style={{display: "block", marginTop: 40, marginBottom: 4}}>
                    Уже покупали игру?
                </label>
                <a href="#">
                    Авторизоваться
                </a>
            </div>
        </Modal>
    )
}