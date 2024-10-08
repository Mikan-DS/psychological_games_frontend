import './css/CoverSection.css'

import Cover from "../img/cover_desktop.png";
import TitleImage from "../img/title.png";
import AgeImage from "../img/age.png"
import Icon from "../img/icon.png"

import React, {useState} from "react";
import AnimatedPictures from "../components/AnimatedPictures";

export default function CoverSection({
                                         username,
                                         authenticated,
                                         loginModalControl,
                                         playAction,
                                         screenVariant}){
    function userProfile(){
        if (authenticated){
            window.alert("Личный кабинет в разработке!")
        }
        else{
            loginModalControl.openModal()
            }
    }

    const [isDropDownMenuOpen, setIsDropDownMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsDropDownMenuOpen(!isDropDownMenuOpen);
    };

    const descriptionPlayBox = (
        <div className={"vertical-box align-end description-box"}>
            <div className={"accent-text2 description-text"}>
                Психологическая компьютерная игра
                <br/>
                Проблемы школьного буллинга
            </div>
            <div className={"align-center play-box"}>
            {!screenVariant.isPhone?
                    <img className={"age-image"} src={AgeImage || ""} alt="12+"/>:null
            }
            <button
                    className={"primary-button "+(
                        screenVariant.isDesktop?
                            "large":
                            screenVariant.isTablet?
                                "medium":
                                "small")}
                    onClick={playAction}>
                    ИГРАТЬ
                </button>
            </div>
        </div>
    )

    return (
        <div className={"cover-section"} style={{backgroundImage: "url(" + Cover + ")"}}>
            <header className={"content-box"}>
                <div className={"stretched-box align-center"}>
                    <img className={"icon"} src={Icon || ""} alt="КД"/>
                    {!screenVariant.isPhone ?
                        <div className={"menu-text menu-buttons horizontal-box"}>
                            <a href={"#forStudent"}>
                                ШКОЛЬНИКУ
                            </a>
                            <a href={"#forParent"}>
                                РОДИТЕЛЮ
                            </a>
                            <a href={"#Authors"}>
                                АВТОРЫ
                            </a>
                            <a href={"#FAQ"}>
                                ВОПРОСЫ
                            </a>
                            <a onClick={userProfile}> {/* TODO Заменить на кнопку */}
                                {authenticated ? username.split(' ')[0].toUpperCase() : "ВОЙТИ"}
                            </a>
                        </div>
                        :
                        <div className="dropdown-menu">
                            <button className="menu-button" onClick={toggleMenu}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.75 6H20.25M3.75 12H20.25M3.75 18H20.25" stroke="#FCFCFA"
                                          strokeWidth="1.5"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            {isDropDownMenuOpen && (
                                <div className="menu-content">
                                    <a href={"#forStudent"} onClick={toggleMenu}>ШКОЛЬНИКУ</a>
                                    <a href={"#forParent"} onClick={toggleMenu}>РОДИТЕЛЮ</a>
                                    <a href={"#Authors"} onClick={toggleMenu}>АВТОРЫ</a>
                                    <a href={"#FAQ"} onClick={toggleMenu}>ВОПРОСЫ</a>
                                    <a onClick={() => {
                                        userProfile();
                                        toggleMenu()
                                    }}>
                                        {authenticated ? username.split(' ')[0].toUpperCase() : "ВОЙТИ"}
                                    </a>
                                </div>
                            )}
                        </div>}
                </div>
                <hr/>
            </header>

            <div className={"content-box"}>
                <div className={"stretched-box"}>
                    <img className={"title-image"} src={TitleImage || ""} alt="Классные джунгли"/>
                    {screenVariant.isDesktop ?descriptionPlayBox:null}
                </div>
                <AnimatedPictures screenVariant={screenVariant}/>
                {!screenVariant.isDesktop ?descriptionPlayBox:null}
            </div>
        </div>
    );
}