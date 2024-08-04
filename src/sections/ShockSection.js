import shockImage1 from "../img/shockSection/pic_desktop.webp";
import shockImage2 from "../img/shockSection/pic_desktop_2.webp";
import React from "react";

export default function ShockSection(){
    return (
        <div id={"ShockSection"}>

            <div
                className={"shock-image"}
                style={{backgroundImage: "url(" + shockImage1 + ")"}}>
                <img src={shockImage2} alt="Персонажи"/>
            </div>

            <div className={"content-box body-text"}>
                <div>
                    Вас шокировала надпись, что какого-то выдуманного Саню,
                    которого вы лично не знаете, назвали лохом?
                    Но это самое милое, что можно услышать в школах на переменах!
                    <br/>
                    <br/>
                    Не верите нам?
                    <br/>
                    <br/>
                    Они ожидают, что вы им не поверите,
                    поэтому только 20% детей рассказывают о буллинге родителям! Сыграйте в
                    нашу игру с детьми – наладьте с ними контакт. Узнаете много интересного!
                </div>
            </div>
        </div>
    );
}