import Cover from "../img/cover_desktop.png";
import TitleImage from "../img/title.png";
import AgeImage from "../img/age.png"
import CoverPics from "../img/Cover_pic_desktop.png"
import CoverPicsMobile from "../img/Cover_pic_mobile.png"
import Icon from "../img/icon.png"

import React from "react";

export default function CoverSection({user, loginModalControl, playAction}){
    function userProfile(){
        if (user.authenticated){
            window.alert("Личный кабинет в разработке!")
        }
        else{
            loginModalControl.openModal()
            }
    }

    return (
        <div className={"cover-section"} style={{backgroundImage: "url(" + Cover + ")"}}>

            <header className={"content-box"}>
                <div className={"stretched-box align-center"}>

                    <img className={"icon"} src={Icon ? Icon : ""} alt="КД"/>

                    <div className={"menu-text menu-buttons only-mobile only-desktop"}>
                        <a href={"#forStudent"}>
                            ШКОЛЬНИКУ
                        </a>
                        <a href="#forParents">
                            РОДИТЕЛЮ
                        </a>
                        <a href="#Authors">
                            АВТОРЫ
                        </a>
                        <a href="#FAQ">
                            ВОПРОСЫ
                        </a>
                        <a onClick={userProfile}>
                            {user.authenticated ? user.name.split(' ')[0].toUpperCase() : "ВОЙТИ"}
                        </a>
                    </div>
                </div>
                <hr/>
            </header>

            <div className={"content-box"}>
                <div className={"stretched-box"}>
                    <img className={"cover-title-image"} src={TitleImage ? TitleImage : ""} alt="Классные джунгли"/>
                    <div className={"vertical-box align-right cover-description-box only-desktop"}>
                        <div className={"accent-text2 cover-description-text"}>
                            Психологическая компьютерная игра
                            <br/>
                            Проблемы школьного буллинга
                        </div>
                        <div className={"align-center cover-play-box"}>
                            <img className={"cover-age-image"} src={AgeImage ? AgeImage : ""} alt="12+"/>
                            <button className={"primary-button primary-button-large"} onClick={playAction}>
                                ИГРАТЬ
                            </button>
                        </div>
                    </div>
                </div>
                <img className={"content-box only-desktop"} src={CoverPics ? CoverPics : ""} alt="Фоны игры"/>
                <img className={"content-box only-mobile only-phone"} src={CoverPicsMobile ? CoverPicsMobile : ""} alt="Фоны игры"/>

                <div className={"vertical-box align-right cover-description-box only-mobile only-phone"}>
                    <div className={"accent-text2 cover-description-text"}>
                        Психологическая компьютерная игра
                        <br/>
                        Проблемы школьного буллинга
                    </div>
                    <div className={"align-center cover-play-box"}>
                        <img className={"cover-age-image"} src={AgeImage ? AgeImage : ""} alt="12+"/>
                        <button className={"primary-button primary-button-small only-phone"} onClick={playAction}>
                            ИГРАТЬ
                        </button>
                        <button className={"primary-button primary-button-medium only-mobile"} onClick={playAction}>
                            ИГРАТЬ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}