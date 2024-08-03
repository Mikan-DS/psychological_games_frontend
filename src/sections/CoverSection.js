import Cover from "../img/cover_desktop.png";
import TitleImage from "../img/title.png";
import AgeImage from "../img/age.png"
import CoverPics from "../img/Cover_pic_desktop.png"
import CoverPicsMobile from "../img/Cover_pic_mobile.png"

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
                    <svg id={"icon"} width="31" height="18" viewBox="0 0 31 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.9883 17.3684C18.9883 17.5188 18.5494 17.6692 17.6716 17.8195C16.8863 17.9398 16.2318 18 15.7082 18C14.7842 18 14.3222 17.5789 14.3222 16.7368C14.3222 16.5414 14.5224 16.1053 14.9228 15.4286C15.3078 14.7669 15.4926 14.3759 15.4772 14.2556C15.4464 14.0301 15.1692 13.8947 14.6456 13.8496C14.4916 13.8496 14.199 13.9624 13.7678 14.188C13.3674 14.3985 13.1056 14.4812 12.9825 14.4361C12.8901 14.406 12.8439 14.3158 12.8439 14.1654C12.8285 13.9549 13.121 13.7068 13.7216 13.4211C14.3068 13.1353 14.8458 12.9925 15.3386 12.9925C16.047 12.9925 16.4782 13.3684 16.6322 14.1203C16.6938 14.3759 16.6322 14.6391 16.4474 14.9098C16.124 15.391 15.9546 15.6391 15.9392 15.6541C15.5696 16.4211 15.3848 16.782 15.3848 16.7368C15.354 17.0075 15.5696 17.1729 16.0316 17.2331C16.278 17.2632 16.7323 17.2256 17.3944 17.1203C18.1644 16.985 18.5725 16.9173 18.6187 16.9173C18.8959 16.8872 19.0191 17.0376 18.9883 17.3684ZM21.252 8.07519C21.2366 8.4812 21.1442 8.84962 20.9749 9.18045C20.8209 9.51128 20.6515 9.68421 20.4667 9.69925C20.0971 9.72932 19.8815 9.53383 19.8199 9.11278L19.9123 8.4812C19.4041 8.67669 16.894 10.0451 12.3819 12.5865C10.4261 13.6992 8.77836 14.6767 7.43859 15.5188C5.57524 16.6767 4.58966 17.2481 4.48187 17.2331C4.18927 17.188 4.01988 17.0226 3.97368 16.7368C3.94288 16.4962 4.81296 15.7895 6.58391 14.6165C8.95545 13.0677 10.5031 11.985 11.2269 11.3684C13.9988 9.06767 15.7236 6.97744 16.4012 5.09774C16.2626 4.97744 16.124 4.91729 15.9854 4.91729C15.7698 4.91729 13.4136 5.92481 8.91695 7.93985C5.12865 9.6391 2.72631 10.812 1.70993 11.4586C1.60214 11.5338 1.47894 11.7444 1.34034 12.0902C1.23255 12.3759 1.07855 12.5263 0.878356 12.5414C0.277771 12.5414 -0.0148221 12.3459 0.000577486 11.9549C0.0313767 11.609 0.354769 11.2632 0.970753 10.9173C2.20272 10.2105 4.71286 9.00752 8.50116 7.30827C13.7678 4.90226 16.6168 3.69925 17.048 3.69925C17.4329 3.69925 17.6562 3.96241 17.7178 4.48872C17.7794 5.07519 16.8786 6.55639 15.0152 8.93233C14.815 9.20301 14.4454 9.60902 13.9064 10.1504C13.4598 10.6015 13.1518 10.9624 12.9825 11.2331L17.048 9.06767C19.2347 7.89474 20.4975 7.32331 20.8363 7.35338C21.1442 7.38346 21.2828 7.62406 21.252 8.07519Z"
                            fill="white"/>
                        <path
                            d="M31 3.63158C31 5.87218 29.9836 8.27068 27.9509 10.8271C25.9027 13.4436 24.1626 14.7519 22.7304 14.7519C22.1298 14.7519 21.7217 14.6617 21.5061 14.4812C21.2751 14.3008 21.1442 13.9549 21.1134 13.4436C21.0673 12.782 21.8526 11.7143 23.4696 10.2406C24.4552 9.33835 25.3021 8.90226 26.0105 8.93233C26.0259 8.93233 26.5187 9.20301 27.4889 9.74436C29.1828 7.98496 30.0298 6.01504 30.0298 3.83459C30.0298 2.45113 29.4061 1.54135 28.1588 1.10526C27.5582 0.909775 26.5803 0.81203 25.2251 0.81203C22.0374 0.81203 18.7265 1.33835 15.2924 2.39098C13.737 2.87218 11.8814 3.6015 9.72543 4.57895L6.8842 5.86466C6.69941 5.86466 6.60701 5.77444 6.60701 5.59399C6.62241 5.30827 7.63109 4.70677 9.63303 3.78947C11.558 2.91729 13.2904 2.2406 14.8304 1.7594C18.5417 0.586466 21.9296 0 24.9942 0C26.9037 0 28.3128 0.210526 29.2213 0.631579C30.4071 1.18797 31 2.18797 31 3.63158ZM26.5187 10.782C26.3955 10.4211 26.1799 10.1805 25.8719 10.0602C25.6563 9.98496 25.3098 10.0752 24.8325 10.3308C24.3705 10.5714 23.9778 10.8722 23.6544 11.2331C22.6688 12.3158 22.1452 13.0677 22.0836 13.4887C22.0528 13.6391 22.2684 13.7744 22.7304 13.8947C23.1462 14.015 23.9624 13.5489 25.1789 12.4962C25.8873 11.8647 26.3339 11.2932 26.5187 10.782Z"
                            fill="white"/>
                    </svg>

                    <div className={"menu-text menu-buttons"}>
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
                <img className={"content-box only-mobile"} src={CoverPicsMobile ? CoverPicsMobile : ""} alt="Фоны игры"/>

                <div className={"vertical-box align-right cover-description-box only-mobile"}>
                    <div className={"accent-text2 cover-description-text"}>
                        Психологическая компьютерная игра
                        <br/>
                        Проблемы школьного буллинга
                    </div>
                    <div className={"align-center cover-play-box"}>
                        <img className={"cover-age-image"} src={AgeImage ? AgeImage : ""} alt="12+"/>
                        <button className={"primary-button primary-button-medium"} onClick={playAction}>
                            ИГРАТЬ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}