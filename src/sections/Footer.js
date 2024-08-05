import footerTitle from "../img/footer_title.png";
import React from "react";
import footerBackground from "../img/footer_bg.png";

export default function Footer({user, api, openLogin}){

    return (
        <footer style={{backgroundImage: "url(" + footerBackground + ")"}}>
            <div className={"content-box footer-menu-text"}>
                <img src={footerTitle || ""} alt="Логотип"/>

                <div className={"footer-menu"}>
                    <div>
                        <a href={"#forStudent"}>ЕСЛИ ТЫ - ШКОЛЬНИК</a>
                        <a href={"#forParents"}>ЕСЛИ ВЫ - РОДИТЕЛЬ</a>
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

                <button>
                    ПОЛИТИКА ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ
                </button>

            </div>
        </footer>
    );
}