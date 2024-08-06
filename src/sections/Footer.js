import './css/Footer.css'

import footerTitle from "../img/footer_title.png";
import footerBackground from "../img/footer_bg.png";

import React from "react";

export default function Footer({user, api, openLogin, openPolicy, screenVariant}){
    const policyButton = (
        <button onClick={openPolicy} className={"policy-button"}>
            ПОЛИТИКА ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ
        </button>
    )
    return (
        <footer className={"footer-section"} style={{backgroundImage: "url(" + footerBackground + ")"}}>
            <div className={"content-box menu-text"}>
                <img src={footerTitle || ""} alt="Логотип"/>
                <div className={"menu"}>
                    <div>
                        <a href={"#forStudent"}>ЕСЛИ ТЫ - ШКОЛЬНИК</a>
                        <a href={"#forParent"}>ЕСЛИ ВЫ - РОДИТЕЛЬ</a>
                        <a href={"#Authors"}>АВТОРЫ</a>
                        <a href={"#FAQ"}>ВОПРОСЫ</a>
                    </div>
                    <div>
                        <button onClick={() => {
                            window.alert("Этот раздел в разработке!")
                        }}>
                            ПОДРОБНЕЕ О ПРОЕКТЕ
                        </button>
                        {user.authenticated ?
                            <button onClick={api.logout}>
                                ВЫЙТИ
                            </button> :
                            <button onClick={openLogin}>
                                АВТОРИЗАЦИЯ
                            </button>
                        }
                    </div>
                </div>
                {!screenVariant.isDesktop ? policyButton:null}
            </div>
            <div className={"content-box menu-text"}>
                {screenVariant.isDesktop ? policyButton:null}
            </div>
        </footer>
    );
}
