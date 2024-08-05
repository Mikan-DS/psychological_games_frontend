import './css/AboutSection.css'

import Screenshot1 from "../img/screenshots/1.png";
import Screenshot2 from "../img/screenshots/2.png";
import Screenshot3 from "../img/screenshots/3.png";

import NumberAnimation from "../components/NumberAnimation";

import React from "react";

export default function ForStudentSection({user, playAction}){

    return (
        <div id={"forStudent"} className={"content-box body-text"}>
            <h1>
                Если ты школьник
            </h1>
            <div className={"accent-text"}>
                играй дома, чтобы выигрывать в классе
            </div>

            <div className={"stretched-box about-list"}>
                <div>
                    <img src={Screenshot1 ? Screenshot1 : ""} alt="Скриншот 1"/>
                    <h4>Отдохнуть</h4>
                    <div>
                        Погрузись в игру, по жанру это визуальная новелла, основанная на реальных событиях.
                        Стань Новеньким в этом классе:
                        найди друзей, решай конфликты и просто получи удовольствие от общения.
                    </div>
                </div>
                <div>
                    <img src={Screenshot2 ? Screenshot2 : ""} alt="Скриншот 2"/>
                    <h4>Понять себя</h4>
                    <div>
                        Честно делай выборы в игре, так же,
                        как поступаешь в реальной жизни – и ты узнаешь свою роль в случае буллинга.
                        Ты получишь заключение по результат психологическое теста и рекомендации.
                    </div>
                </div>
                <div>
                    <img src={Screenshot3 ? Screenshot3 : ""} alt="Скриншот 3"/>
                    <h4>Прокачать себя</h4>
                    <div>
                        Пройдя игру несколько раз, ты поймешь, как выйти из своей старой роли,
                        и как своим поведением влиять на одноклассников, меняя отношения в классе.
                        Немножко изобретательности и смекалки, и можешь смело ходить в школу!
                    </div>
                </div>
            </div>

            <button className={"secondary-button large"} onClick={playAction}>
                ХОЧУ ИГРАТЬ
            </button>

            <div className={"stretched-box about-statistic"}>
                <div>
                    <NumberAnimation targetNumber={357} duration={2100}/>
                    Варианта развития событий
                </div>
                <div>
                    <NumberAnimation targetNumber={6} duration={1500}/>
                    <div className={"only-phone only-mobile"}>Концовок | ролей</div>
                    <div className={"only-desktop"}>Концовок |<br/> ролей</div>

                </div>
                <div>
                    <NumberAnimation targetNumber={10} duration={2000}/>
                    Прохождений, чтобы открыть весь контент
                </div>
            </div>
        </div>
    )
}