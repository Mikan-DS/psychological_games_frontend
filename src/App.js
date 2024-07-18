import "./App.css";
import React, {useEffect, useState} from "react";
import Cover from "./img/cover_desktop.png";
import TitleImage from "./img/title.png"
import AgeImage from "./img/age.png"
import CoverPics from "./img/Cover_pic_desktop.png"
// import GogolFont from "./fonts/Gogol Regular.ttf"

import Screenshot1 from "./img/screenshots/1.png"
import Screenshot2 from "./img/screenshots/2.png"
import Screenshot3 from "./img/screenshots/3.png"
import NumberAnimation from "./NumberAnimation";
import TapeImage from "./img/tape_1.webp"
import Screenshot4 from "./img/screenshots/4.png"
import Screenshot5 from "./img/screenshots/5.png"
import Screenshot6 from "./img/screenshots/6.png"
import shockImage1 from "./img/shockSection/pic_desktop.webp"
import shockImage2 from "./img/shockSection/pic_desktop_2.webp"
import AuthorImage1 from "./img/autors/Autor_1.webp"
import AuthorImage2 from "./img/autors/Autor_2.webp"
import winnersImage from "./img/autors/image_winner.webp"
import ToggleQuestion from "./ToggleQuestion";
import footerBackground from "./img/footer_bg.png"
import footerTitle from "./img/footer_title.png"
import PaymentModal from "./PaymentModal";
import ModalControl from "./ModalControl";
import LoginModal from "./LoginModal";
import PolicyModal from "./PolicyModal";
import API from "./API";

let onlyOne = true;


function App() {

    const api = API()

    const [user, setUser] = useState({
        authenticated: false,
        username: "",
        name: "",
        id: "",
        email: ""
    })

    const paymentModalControl = ModalControl();
    const openPayment = paymentModalControl.openModal;
    const loginModalControl = ModalControl();
    const openLogin = loginModalControl.openModal;
    const policyModalControl = ModalControl();
    const openPolicy = policyModalControl.openModal;

    useEffect(() => {
        if (onlyOne){
            api.get_user().then(r => {
                if (r !== null){
                    setUser(r)
                }
            });
            onlyOne = false;
        }
    }, [user]);




    return (
        <div className="App">

            <PaymentModal modalControl={paymentModalControl} openPolicy={openPolicy} openLogin={openLogin}/>
            <LoginModal modalControl={loginModalControl} openPayment={openPayment}/>
            <PolicyModal modalControl={policyModalControl}/>

            <div id="coverSection" style={{backgroundImage: "url(" + Cover + ")"}}>

                <header className="App-header">
                    <div>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="18" height="18" rx="9" fill="#FCFCFA"/>
                        </svg>
                        <div>
                            <a href="#forStudent">
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
                            <a onClick={user.authenticated?()=>{window.alert("Личный кабинет в разработке!")}:openLogin} style={{cursor: "pointer"}}>
                                {user.authenticated?user.name.toUpperCase():"ВОЙТИ"}
                            </a>
                        </div>
                    </div>
                    <hr style={{width: '100%', backgroundColor: '#FCFCFA', marginTop: '10px', border: 0, height:1}}/>
                </header>

                <div style={{maxWidth: "1400px", marginLeft: "auto", marginRight: "auto"}}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: 'space-between',
                        alignItems: 'flex-start'
                    }}>
                        <img src={TitleImage} alt="Классные джунгли"/>
                        <div>
                            <div className={"GogolText"} style={{fontSize: 40, textAlign: "right"}}>
                                Психологическая компьютерная игра
                                <br/>
                                Проблемы школьного буллинга
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                                <img src={AgeImage} alt="12+"/>
                                <button className="primaryButton" style={{fontSize: 80}} onClick={!user.authenticated?openPayment:()=>{window.alert("Игры в разработке!")}}>
                                    ИГРАТЬ
                                </button>
                            </div>
                        </div>
                    </div>
                    <img src={CoverPics} alt="Фоны игры" style={{marginTop: -38}}/>
                </div>

            </div>
            <div id="forStudent" style={{maxWidth: "1400px", marginLeft: "auto", marginRight: "auto"}}>
                <div>
                    <h1>
                        ЕСЛИ ТЫ - ШКОЛЬНИК
                    </h1>
                    <h2 style={{paddingLeft: "25%"}}>
                        играй дома, чтобы выигрывать в классе
                    </h2>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginTop: 80,
                    marginBottom: 40
                }}>
                    <div className="screenshotsBlock">
                        <img src={Screenshot1} alt="Скриншот 1"/>
                        <h4>
                            Отдохнуть
                        </h4>
                        <p>
                            Погрузись в игру, по жанру это визуальная новелла, основанная на реальных событиях.
                            Стань Новеньким в этом классе:
                            найди друзей, решай конфликты и просто получи удовольствие от общения.
                        </p>
                    </div>
                    <div className="screenshotsBlock">
                        <img src={Screenshot2} alt="Скриншот 2"/>
                        <h4>
                            ПОНЯТЬ СЕБЯ
                        </h4>
                        <p>
                            Честно делай выборы в игре, так же,
                            как поступаешь в реальной жизни – и ты узнаешь свою роль в случае буллинга.
                            Ты получишь заключение по результат психологическое теста и рекомендации.
                        </p>
                    </div>
                    <div className="screenshotsBlock">
                        <img src={Screenshot3} alt="Скриншот 3"/>
                        <h4>
                            ПРОКАЧАТЬ СЕБЯ
                        </h4>
                        <p>
                            Пройдя игру несколько раз, ты поймешь, как выйти из своей старой роли,
                            и как своим поведением влиять на одноклассников, меняя отношения в классе.
                            Немножко изобретательности и смекалки, и можешь смело ходить в школу!
                        </p>
                    </div>
                </div>
                <button className="secondaryButton" style={{fontSize: 26}} onClick={!user.authenticated?openPayment:()=>{window.alert("Игры в разработке!")}}>
                    ИГРАТЬ
                </button>
                <div className="statisticBlock StretchedList" style={{
                    width: 927,
                    marginLeft: "auto",
                    marginTop: 100,
                    marginBottom: 100
                }}>
                    <div style={{width: 220}}>
                        <NumberAnimation targetNumber={357} duration={2100}/>
                        <p>
                            Варианта развития событий
                        </p>
                    </div>
                    <div style={{width: 150}}>
                        <NumberAnimation targetNumber={6} duration={1500}/>
                        <p style={{paddingRight: 20}}>
                            Концовок | ролей
                        </p>
                    </div>
                    <div style={{width: 220}}>
                        <NumberAnimation targetNumber={10} duration={2000}/>
                        <p>
                            Прохождений, чтобы открыть весь контент
                        </p>
                    </div>
                </div>

            </div>
            <div className="factSection" style={{backgroundImage: "url(" + TapeImage + ")"}}>
                <div style={{
                    width: 1400,
                    marginLeft: "auto",
                    marginRight: "auto",
                    height: "100%",
                    display: "flex",
                    alignItems: "center"
                }}>
                    <div style={{width: 947}}>
                        <h2 style={{margin: 5}}>
                            ЖЕРТВАМИ БУЛЛИНГА В РОССИИ СТАЛИ <span style={{color: "#D44C02"}}>57%</span> ДЕТЕЙ
                            И <span style={{color: "#D44C02"}}>70%</span> УЧИТЕЛЕЙ
                        </h2>
                        <p style={{margin: 5}}>
                            По статистике за Ноябрь 2023
                        </p>
                    </div>
                </div>
            </div>
            <div id="forParents" style={{maxWidth: "1400px", marginLeft: "auto", marginRight: "auto"}}>
                <div style={{marginTop: 100}}>
                    <h1>
                        ЕСЛИ ТЫ - РОДИТЕЛЬ
                    </h1>
                    <h2 style={{paddingLeft: "25%"}}>
                        и хотите помочь своему ребёнку
                    </h2>
                </div>

                <div className="StretchedList" style={{
                    alignItems: 'flex-start',
                    marginTop: 80,
                    marginBottom: 40
                }}>
                    <div className="screenshotsBlock">
                        <img src={Screenshot4} alt="Скриншот 4"/>
                        <h4>
                            ВЕРНУТЬСЯ В ДЕТСТВО
                        </h4>
                        <p>
                            В основе игры лежат реальные события.
                            Поиграйте в игру, возможно, у вас было то же самое.
                            Погрузитесь в своё детство, вспомните его, вы можете найти там невольные ошибки.
                            С позиции главного героя исправьте их – и вы увидите изменения в своём взрослом поведении.
                            Все мы родом из детства!
                        </p>
                    </div>
                    <div className="screenshotsBlock">
                        <img src={Screenshot5} alt="Скриншот 5"/>
                        <h4>
                            ПОНЯТЬ РЕБЕНКА
                        </h4>
                        <p>
                            Пройдите игру вместе с ребенком или понаблюдайте за его игрой.
                            Может вы узнаете в нём себя и увидите те же ошибки?
                            Кроме того, вы поймёте в какой реальной ситуации он
                            каждый день находится и с какими проблемами сталкивается.
                            Это даст вам возможность обсуждать именно его жизнь и трудности в классе.
                        </p>
                    </div>
                    <div className="screenshotsBlock">
                        <img src={Screenshot6} alt="Скриншот 6"/>
                        <h4>
                            ПОМОЧЬ РЕБЕНКУ
                        </h4>
                        <p>
                            Может быть, ваш ребенок стал замкнутым и подавленным,
                            вы подозреваете, что его травят в школе, или вам говорят,
                            что он агрессивно себя ведет. Опираясь на сюжет игры,
                            вы сможете обсудить её с подростком. Понять, насколько опасна текущая ситуация.
                            Дать ли ребенку возможность решать конфликты самостоятельно,
                            или уже необходимо вмешательство взрослых. Так чтобы не навредить.
                        </p>
                    </div>
                </div>
                <button className="secondaryButton" style={{fontSize: 26, marginBottom: 100}} onClick={!user.authenticated?openPayment:()=>{window.alert("Игры в разработке!")}}>
                    ИГРАТЬ
                </button>
            </div>
            <div className="factSection" style={{backgroundImage: "url(" + TapeImage + ")", transform: "scaleY(-1)"}}>
                <div style={{
                    width: 1400,
                    marginLeft: "auto",
                    marginRight: "auto",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    transform: "scaleY(-1)" // Я немного упоролся
                }}>
                    <div style={{width: 947}}>
                        <h2 style={{margin: 5}}>
                            Каждый <span style={{color: "#D44C02"}}>ВТОРОЙ</span> РЕБЕНОК СТАЛКИВАЕТСЯ С АГРЕССИЕЙ И
                            КАЖДЫЙ <span style={{color: "#D44C02"}}>ТРЕТИЙ</span> — С ЕЁ ФИЗИЧЕСКИМИ ПРОЯВЛЕНИЯМИ
                        </h2>
                    </div>
                </div>
            </div>
            <div id="shockSection">
                <div id="shockImage"
                     style={{backgroundImage: "url(" + shockImage1 + ")", display: "flex", alignItems: "end"}}>
                    <img src={shockImage2} alt="Персонажи" style={{width: 1600}}/>
                </div>
                <div style={{width: 1400, marginTop: 100, marginBottom: 100, marginLeft: "auto", marginRight: "auto"}}>
                    <div style={{width: 926, marginLeft: "auto"}}>
                        <p>
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
                        </p>
                    </div>
                </div>
            </div>
            <div className="factSection" style={{backgroundImage: "url(" + TapeImage + ")"}}>
                <div style={{
                    width: 1400,
                    marginLeft: "auto",
                    marginRight: "auto",
                    height: "100%",
                    display: "flex",
                    alignItems: "center"
                }}>
                    <div style={{width: 947}}>
                        <h2 style={{margin: 5}}>
                            У <span style={{color: "#D44C02"}}>ТРЕТИ</span> УЧЕНИКОВ, КОТОРЫХ ТРАВИЛИ В ШКОЛЕ, В БУДУЩЕМ
                            ВОЗНИКАЮТ <span
                            style={{color: "#D44C02"}}>ПСИХИЧЕСКИЕ РАССТРОЙСТВА</span>
                        </h2>
                    </div>
                </div>
            </div>
            <div id="Authors">
                <h1 style={{textAlign: "center"}}>
                    АВТОРЫ ПРОЕКТА
                </h1>
                <div>
                    <h2>
                        Проект разработан под руководством профессора,
                        доктора психологических наук,
                        прошёл тестирование на школьниках и занял первое место на Всероссийском конкурсе “Золотая
                        Психея”
                    </h2>
                    <div className="AuthorsBlock">
                        <div className="Author StretchedList">
                            <img src={AuthorImage1} alt="Доценко Евгений Леонидович"/>
                            <div>
                                <h3>
                                    Доценко Евгений Леонидович
                                </h3>
                                <p>
                                    — Профессор, доктор психологических наук
                                </p>
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
                        <div className="Author StretchedList">
                            <img src={AuthorImage2} alt="Потёмкин Сергей Александрович"/>
                            <div>
                                <h3>
                                    Потёмкин Сергей Александрович
                                </h3>
                                <p>
                                    — Писатель, автор текстов игры
                                </p>
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
                    <a href="https://psy.su/psyche/projects/3043/?ysclid=lxewujg7zo638636246">
                        ПРОЕКТ ЗАНЯЛ 1 МЕСТО НА ВСЕРОССИЙСКОМ КОНКУРСЕ «ЗОЛОТАЯ ПСИХЕЯ»
                    </a>
                    <div className="StretchedList" style={{alignItems: "center", marginTop: 82}}>
                        <div style={{width: 293, marginTop: 40}}>
                            <NumberAnimation targetNumber={1700} duration={1000}/>
                            <div className="NumberAnimation">
                                +
                            </div>
                            <p style={{color: "#75766E", fontSize: "18px", marginTop: 10, marginBottom: 0}}>
                                Школьников протестировано и результаты проверены психологами
                            </p>
                        </div>
                        <img src={winnersImage} alt='Победители конкурса "ЗОЛОТАЯ ПСИХЕЯ"' style={{width: 690}}/>
                    </div>
                    <p style={{textAlign: "right"}}>
                        Эффективность игры показана на 2 магистерских диссертациях
                    </p>
                    <button className="secondaryButton" style={{fontSize: 26, marginTop: 100, marginBottom: 50}} onClick={()=>{window.alert("Этот раздел в разработке!")}}>
                        ПОДРОБНЕЕ О ПРОЕКТЕ
                    </button>
                </div>
            </div>
            <div id="FAQ" style={{paddingTop: 100, paddingBottom: 100}}>
                <div style={{width: 1400, marginLeft: "auto", marginRight: "auto"}}>
                    <h1 style={{marginTop: 0, marginBottom: 80}}>
                        ЧАСТЫЕ ВОПРОСЫ
                    </h1>
                    <hr style={{width: '100%', backgroundColor: '#9E9F9A', border: 0, height:1}}/>
                    <ToggleQuestion question="Как возврат в детство помогает во взрослой жизни?">
                        <p>
                            Все мы родом из детства.
                            Способность противостоять социальному давления складывается к концу подросткового возраста.
                            Поэтому, чтобы изменить свои привычку, нужно посмотреть,
                            как они сформировались и изменить их там, в детстве. Например, с помощью этой игры.
                        </p>
                    </ToggleQuestion>
                    <ToggleQuestion question="Как школьный буллинг может повлиять на взрослую жизнь?">
                        <p>
                            28% учеников, которых травили,
                            в будущем сталкиваются с психическими расстройствами,
                            возникшими на фоне пережитого в детстве или подростковом возрасте абьюза.
                            Не говоря уже о том, что часть жертв абьюза позднее сами становится агрессорами
                            по отношению к слабым во взрослой жизни. Так что буллинг и его последствия -
                            это очень серьёзное явление, которое требует профилактики.
                        </p>
                    </ToggleQuestion>
                    <ToggleQuestion question="Эта игра только для мальчиков?">
                        <p>
                            Эта игра разрабатывалась на основании эпизодов буллинга,
                            жертвами которого были мальчики. Девочки могут пройти эту игру и посмотреть,
                            на школьную жизнь глазами мальчиков. Но женский буллинг уникальный,
                            со своими характерными особенностями и сценариями поведения. То есть,
                            если бы мы просто заменили имена главных героев на женские или сделали бы
                            главного героя девочкой, оставив прежние тексты, ничего бы хорошего из этого не вышло.
                            Версию для девочек нужно разрабатывать, практически, с нуля. Мы уже начали это делать,
                            и от успеха этой игры напрямую зависит срок выхода «Классных джунглей» для девочек.
                        </p>
                    </ToggleQuestion>
                    <ToggleQuestion question="Сколько времени потребуется на прохождение игры?">
                        <p>
                            В среднем для прохождения игры нужно 40-60 минут, при вдумчивом прохождении до полутора
                            часов.
                            Если ребёнок проходит игру менее, чем за 25 минут, это повод задуматься над тем,
                            что он и не хотел этим заниматься. На этапе тестирования и анализа игры,
                            результаты прохождения, которые получили школьники менее, чем за 15 минут, мы не учитывали.
                        </p>
                    </ToggleQuestion>
                    <ToggleQuestion question="Как узнать, что мой ребёнок стал жертвой буллинга?">
                        <p>
                            Обратите внимание на изменения в поведении вашего ребёнка:
                            <ul>
                                <li>избегание школы,</li>
                                <li>ухудшение успеваемости,</li>
                                <li>изменения в настроении или сне,</li>
                                <li>поврежденные вещи,</li>
                                <li>внезапное ухудшение самооценки.</li>
                            </ul>
                            Также важно поддерживать открытую линию общения, чтобы ребёнок мог делиться своими
                            проблемами.
                        </p>
                    </ToggleQuestion>
                    <ToggleQuestion
                        question="В каких случаях нужно предоставить ребёнку самому разбираться со школьными обидчиками и не вмешиваться?">
                        <p>
                            Родителям важно понимать рамки ситуации обычного конфликта,
                            опыт самостоятельного разрешения которого пойдёт школьнику на пользу.
                            Позволить ребёнку самому решить проблему стоит в случаях,
                            когда конфликт не носит систематического характера,
                            когда в травле не участвует группа и это конфликт между двумя ребятами,
                            не сопровождается выраженным физическим насилием и унижением.
                            Если ребёнок сам справляется с ситуацией, и вы видите позитивные результаты,
                            то лучше поддержать его в самостоятельном решении проблемы.
                        </p>
                    </ToggleQuestion>
                    <ToggleQuestion
                        question="В каких случаях родителям нужно обращаться в полицию, если ребёнок стал жертвой буллинга?">
                        <p>
                            Можно выделить следующие критерии обращения в полицию:
                            <ul>
                                <li>Буллинг систематический, длительный, осуществляется группой.</li>
                                <li>Присутствует физическое, сексуальное насилие или угрозы расправы.</li>
                                <li>Конфликт приводит к серьёзным эмоциональным или физическим травмам.</li>
                                <li>Школьник испытывает сильный страх, тревогу или депрессию.</li>
                                <li>Родители считают, что ситуация вышла из-под контроля и необходима помощь
                                    профессионалов.
                                </li>
                            </ul>
                        </p>
                    </ToggleQuestion>
                    <ToggleQuestion
                        question="Какую помощь можно ожидать от классного руководителя, психолога и администрации школы, если ваш ребёнок стал жертвой буллинга?">
                        <p>
                            Классный руководитель:
                            <ul>
                                <li>Вмешательство и мониторинг: Классный руководитель может наблюдать за ситуацией в
                                    классе, предотвращать дальнейшее развитие конфликта и обеспечивать безопасность.
                                </li>
                                <li>Коммуникация с родителями и учениками: Проведение встреч с родителями и учениками
                                    для
                                    обсуждения проблемы и поиска решений.
                                </li>
                                <li>Организация классных мероприятий: Разработка и проведение классных часов и дискуссий
                                    на тему буллинга, например, просмотр фильмов и мультфильмов по этой теме с
                                    последующим
                                    их разбором.
                                </li>
                            </ul>
                            Школьный психолог:
                            <ul>
                                <li>Индивидуальные и групповые консультации: Предоставление психологической поддержки
                                    пострадавшему ученику, помощь в восстановлении после пережитых стрессов и тревог.
                                </li>
                                <li>Разработка программ превентивных мер: Помощь в разработке школьных программ,
                                    направленных на предупреждение буллинга и создание здоровой социальной среды.
                                </li>
                                <li>Обучение учеников: Проведение семинаров и тренингов для учеников на тему уважения,
                                    толерантности и навыков общения.
                                </li>
                            </ul>
                            Администрация школы:
                            <ul>
                                <li>Предоставление информации и ресурсов: Информирование родителей о доступных ресурсах
                                    и
                                    методиках поддержки.
                                </li>
                                <li>Разработка политик и правил: Помощь в разработке и реализации школьных правил и
                                    политик, которые чётко определяют меры ответственности и последствия для тех, кто
                                    участвует в буллинге.
                                </li>
                                <li>Осознание границ своей компетентности и ответственности за события в школе: в
                                    случае,
                                    если ситуация выходит из-под контроля, самим обратиться в правоохранительные органы
                                    за
                                    помощью.
                                </li>
                            </ul>
                        </p>
                    </ToggleQuestion>
                    <ToggleQuestion
                        question="Как реагировать, если мой ребёнок сообщает о буллинге?">
                        <p>
                            Примите его слова серьёзно и сохраняйте спокойствие.
                            Расспросите его о случившемся: о том, что делал и говорил он,
                            что делал и говорил другой ребёнок или дети, если их было много.
                            Обеспечьте ребёнку поддержку и безопасность, не осуждайте его действия или бездействия.
                            В зависимости от критериев случившейся ситуации, которые мы описали выше,
                            помогите ребёнку составить план действий на следующую встречу с обидчиком,
                            свяжитесь с учителем/администрацией школы или обратитесь в полицию.
                        </p>
                    </ToggleQuestion>
                    <ToggleQuestion
                        question="Как вмешаться, если видишь, что другой ребёнок становится жертвой буллинга?">
                        <p>
                            Поощряйте своего ребёнка быть союзником:
                            он может вступиться за другого, предложить ему поддержку или сообщить взрослому.
                            Объясните, что вмешательство может быть разным — от прямой защиты до поиска помощи у
                            взрослых.
                            После прохождения нашей игры ваш ребёнок может лучше понять разницу между
                            ролями в ситуации буллинга и возможными вариантами поведения в ней.
                        </p>
                    </ToggleQuestion>
                    <ToggleQuestion
                        question="Что такое визуальная новелла?">
                        <p>
                            Это жанр компьютерных игр, подвид текстового квеста,
                            в котором зрителю демонстрируется история при помощи вывода на экран текста,
                            статичных картинок, а также звукового и музыкального сопровождения.
                            У игрока получается влиять на историю посредством выборов одного из
                            нескольких вариантов развития событий, которые разветвляют историю
                            и приводят к разным финалам.
                        </p>
                    </ToggleQuestion>
                    <ToggleQuestion
                        question="В чём состоит эффективность игры?">
                        <p>
                            Все эффекты предсказать невозможно.
                            Во-первых, посмотреть на себя со стороны,
                            осознать свои установки и поведение в острых социальных ситуациях.
                            Во-вторых, потренировать себя в безопасных домашних условиях,
                            получая обратную связь по результатам прохождения каждый раз нового сюжета.
                            В-третьих, открывает возможность перенести лучшие игровые решения в жизнь.
                            И просто наладить контакт между родителем и ребёнком.
                        </p>
                    </ToggleQuestion>
                </div>
            </div>
            <footer style={{backgroundImage: "url(" + footerBackground + ")"}}>
                <div style={{width: 1400, marginLeft: "auto", marginRight: "auto"}}>
                    <div className="StretchedList" style={{alignItems: "center"}}>
                        <div>
                            <img src={footerTitle} alt="Логотип" style={{display: "block", marginBottom: 118}}/>
                            <button className="primaryButton footerButton" style={{fontSize: 10}} onClick={openPolicy}>
                                ПОЛИТИКА ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ
                            </button>
                        </div>
                        <div>
                            <a href="#forStudent" className="primaryButton footerButton">ЕСЛИ ТЫ - ШКОЛЬНИК</a>
                            <br/><br/>
                            <a href="#forParents" className="primaryButton footerButton">ЕСЛИ ТЫ - РОДИТЕЛЬ</a>
                            <br/><br/>
                            <a href="#Authors" className="primaryButton footerButton">АВТОРЫ</a>
                            <br/><br/>
                            <a href="#FAQ" className="primaryButton footerButton">ВОПРОСЫ</a>
                            <br/><br/>
                            <br/><br/>
                            <button className="primaryButton footerButton" onClick={()=>{window.alert("Этот раздел в разработке!")}}>
                                ПОДРОБНЕЕ О ПРОЕКТЕ
                            </button>
                            <br/><br/>
                            {user.authenticated ?
                                <button className="primaryButton footerButton" onClick={api.logout}>
                                    ВЫЙТИ
                                </button> :
                                <button className="primaryButton footerButton" onClick={openLogin}>
                                    АВТОРИЗАЦИЯ
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
