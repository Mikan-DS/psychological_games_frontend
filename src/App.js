import "./App.css";
import React from "react";
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


function App() {
  return (
      <div className="App">

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
                          <a href="#">
                              ВОЙТИ
                          </a>
                      </div>
                  </div>

                  <hr style={{width: '100%', backgroundColor: '#FCFCFA', marginTop: '10px'}}/>
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
                              <button style={{
                                  background: 'none',
                                  border: 'none',
                                  color: '#F4CC18',
                                  cursor: 'pointer',
                                  padding: 0,
                                  fontSize: 80
                              }}>
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

              <button style={{
                  background: "none",
                  cursor: "pointer",
                  width: "100%",
                  padding: 38,
                  fontSize: 26,
                  borderRadius: 50
              }}>
                  ИГРАТЬ
              </button>

              <div className="statisticBlock" style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: 'space-between',
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

              <div style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: 'space-between',
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

              <button style={{
                  background: "none",
                  cursor: "pointer",
                  width: "100%",
                  padding: 38,
                  fontSize: 26,
                  borderRadius: 50,
                  marginBottom: 100
              }}>
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
                      прошёл тестирование на школьниках и занял первое место на Всероссийском конкурсе “Золотая Психея”
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

                  <button style={{
                      background: "none",
                      cursor: "pointer",
                      width: "100%",
                      padding: 38,
                      fontSize: 26,
                      borderRadius: 50,
                      marginTop: 100,
                      marginBottom: 50
                  }}>
                      ПОДРОБНЕЕ О ПРОЕКТЕ
                  </button>

              </div>

          </div>

          <div style={{height: 2000}}></div>


          <div>
              <h1 id="FAQ">Чаво</h1>
          </div>

          <footer>
              футер
          </footer>

      </div>
  );
}

export default App;
