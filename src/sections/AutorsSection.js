import AuthorImage1 from "../img/autors/Autor_1.webp";
import AuthorImage2 from "../img/autors/Autor_2.webp";
import NumberAnimation from "../NumberAnimation";
import winnersImage from "../img/autors/image_winner.webp";
import React from "react";

export default function AutorsSection(){
    return (
        <div id="Authors" className={"content-box"}>
            <h1>
                АВТОРЫ ПРОЕКТА
            </h1>
            <div className={"accent-text3"}>
                Проект разработан под руководством профессора,
                доктора психологических наук,
                прошёл тестирование на школьниках и занял первое место на Всероссийском конкурсе “Золотая
                Психея”
            </div>

            <div>
                <div className={"autors-autor body-text2"}>
                    <img src={AuthorImage1 || ""} alt="Доценко Евгений Леонидович"/>
                    <h3>
                        Доценко Евгений Леонидович
                    </h3>
                    <div>
                        — Профессор, доктор психологических наук
                    </div>
                    Больше 40 лет работы психологом-консультантом.
                    <br/>
                    8 лет командной работы над IT-продуктами.
                    <br/>
                    Автор популярной книги «Не будь попугаем
                    <br/>
                    или Как защититься от психологического нападения» и научной монографии «Психология
                    манипуляции».
                </div>
                <div className={"autors-autor body-text2"}>
                    <img src={AuthorImage2 || ""} alt="Потёмкин Сергей Александрович"/>
                    <h3>
                        Потёмкин Сергей Александрович
                    </h3>
                    <div>
                        — Писатель, автор текстов игры
                    </div>
                    Писатель, автор текстов игры.
                    <br/>
                    Больше 14 лет работы психологом-консультантом.
                    <br/>
                    8 лет командной работы над IT-продуктами.
                    <br/>
                    Выпускник литературной мастерской Владислава Петровича Крапивина.
                </div>

                <button>
                    <h3>ЕЩЕ АВТОРЫ</h3>
                </button>
            </div>


            <a href="https://psy.su/psyche/projects/3043/?ysclid=lxewujg7zo638636246">
                ПРОЕКТ ЗАНЯЛ 1 МЕСТО НА ВСЕРОССИЙСКОМ КОНКУРСЕ «ЗОЛОТАЯ ПСИХЕЯ»
            </a>

            <div>
                <NumberAnimation targetNumber={1700} duration={1000}/>
                <div className="NumberAnimation">+</div>
            </div>

            <div className={"body-text"}>
                Школьников протестировано и результаты проверены психологами
            </div>

            <img src={winnersImage || ""} alt='Победители конкурса "ЗОЛОТАЯ ПСИХЕЯ"' style={{width: 690}}/>

            <div className={"body-text"}>
                Эффективность игры показана на 2 магистерских диссертациях
            </div>

            <button className="secondaryButton"
                    onClick={() => {
                        window.alert("Этот раздел в разработке!")
                    }}>
                ПОДРОБНЕЕ О ПРОЕКТЕ
            </button>
        </div>
    );
}