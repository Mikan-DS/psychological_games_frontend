import AuthorImage1 from "../img/autors/autor_1.webp";
import AuthorImage2 from "../img/autors/autor_2.webp";
import AuthorImage3 from "../img/autors/autor_3.webp";
import AuthorImage4 from "../img/autors/autor_4.webp";
import AuthorImage5 from "../img/autors/autor_5.webp";
import NumberAnimation from "../NumberAnimation";
import winnersImage from "../img/autors/image_winner.webp";
import React, {useState} from "react";
import ToggleImage from "../img/toggle.png";

export default function AutorsSection(){

    const [isOpenMoreAuthors, setIsOpenMoreAuthors] = useState(false);

    const toggleContent = () => {
        setIsOpenMoreAuthors(!isOpenMoreAuthors);
    };

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

            <div className={"authors-box"}>
                <div className={"body-text2 authors-author"}>
                    <img src={AuthorImage1 || ""} alt="Доценко Евгений Леонидович"/>
                    <div>
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
                </div>
                <div className={"authors-author body-text2"}>
                    <img src={AuthorImage2 || ""} alt="Потёмкин Сергей Александрович"/>
                    <div>
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
                </div>
            </div>

            <div className={"authors-more"}>

                <button className={"stretched-box"} onClick={toggleContent}>
                    <h3>ЕЩЕ АВТОРЫ</h3>
                    <img src={ToggleImage || ""} style={{
                        transform: isOpenMoreAuthors ? null : "scaleY(-1)",
                        aspectRatio: "1/1",
                        objectFit: "cover",
                        height: "100%"
                    }}/>
                </button>

                {isOpenMoreAuthors?(
                    <div className={"authors-box"}>
                        <div className={"authors-author body-text2"}>
                            <img src={AuthorImage3 || ""} alt="Волкова Александра Андреевна"/>
                            <div>
                                <h3>
                                    Волкова Александра Андреевна
                                </h3>
                                <div>
                                    — Художник
                                </div>
                                Концепт-художник, разрабатывающий образы персонажей в игре.
                                <br/>
                                Практикующий психолог.
                            </div>
                        </div>
                        <div className={"authors-author body-text2"}>
                            <img src={AuthorImage4 || ""} alt="Волкова Александра Андреевна"/>
                            <div>
                                <h3>
                                    Волощенко Полина Сергеевна
                                </h3>
                                <div>
                                    — Педагог, художник
                                </div>
                                Художественно-педагогическое образование ТюмГу.
                                <br/>
                                2 года магистратуры по направлению «личностное и организационное консультирование».
                            </div>
                        </div>
                        <div className={"authors-author body-text2"}>
                            <img src={AuthorImage5 || ""} alt="Иванова Ева Константиновна"/>
                            <div>
                                <h3>
                                    Иванова Ева Константиновна
                                </h3>
                                <div>
                                    — Художник
                                </div>
                                2D художник, рисующий графику для компьютерных игр и не только.
                                <br/>
                                Автор спрайтов персонажей.
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>


            <a className={"authors-project-link"} href="https://psy.su/psyche/projects/3043/?ysclid=lxewujg7zo638636246">
                ПРОЕКТ ЗАНЯЛ 1 МЕСТО НА ВСЕРОССИЙСКОМ КОНКУРСЕ «ЗОЛОТАЯ ПСИХЕЯ»
            </a>

            <div className={"authors-statistic"}>
                <div className={"authors-number-animation"}>
                    <NumberAnimation targetNumber={1700} duration={1000}/>
                    <div className="NumberAnimation">+</div>
                </div>

                <div className={"body-text"}>
                    Школьников протестировано и результаты проверены психологами
                </div>
            </div>

            <div className={"authors-results"}>
                <img className={"authors-winners-image"} src={winnersImage || ""}
                     alt='Победители конкурса "ЗОЛОТАЯ ПСИХЕЯ"'/>

                <div className={"body-text"}>
                    Эффективность игры показана на 2 магистерских диссертациях
                </div>
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