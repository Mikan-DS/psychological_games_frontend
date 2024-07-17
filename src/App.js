import "./App.css";
import React from "react";
import VBox from "./VBox";
import Cover from "./img/cover_desktop.png";
import TitleImage from "./img/title.png"
import AgeImage from "./img/age.png"
import CoverPics from "./img/Cover_pic_desktop.png"
// import GogolFont from "./fonts/Gogol Regular.ttf"

import Screenshot1 from "./img/screenshots/1.png"
import Screenshot2 from "./img/screenshots/2.png"
import Screenshot3 from "./img/screenshots/3.png"
import NumberAnimation from "./NumberAnimation";

function App() {
  return (
      <div className="App">

          <div id="coverSection" style={{backgroundImage: "url("+Cover+")"}}>

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

                  <div style={{display: "flex", flexDirection: "row", justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <img src={TitleImage} alt="Классные джунгли"/>

                      <div>
                          <div className={"GogolText"} style={{fontSize: 40, textAlign: "right"}}>
                              Психологическая компьютерная игра
                              <br/>
                              Проблемы школьного буллинга
                          </div>
                          <div  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
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

              <div  style={{display: "flex", flexDirection: "row", justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 80, marginBottom: 40}}>
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

              <button style={{background: "none", cursor: "pointer", width: "100%", padding: 38, fontSize: 26, borderRadius: 50}}>
                  ИГРАТЬ
              </button>

              <div className="statisticBlock" style={{display: "flex", flexDirection: "row", justifyContent: 'space-between', width:927, marginLeft: "auto", marginTop: 100, marginBottom: 100}}>
                  <div style={{width:220}}>
                      <NumberAnimation targetNumber={357} duration={2100}/>
                      <p>
                          Варианта развития событий
                      </p>
                  </div>
                  <div style={{width:150}}>
                      <NumberAnimation targetNumber={6} duration={1500}/>
                      <p style={{paddingRight: 20}}>
                          Концовок | ролей
                      </p>
                  </div>
                  <div style={{width:220}}>
                      <NumberAnimation targetNumber={10} duration={2000}/>
                      <p>
                          Прохождений, чтобы открыть весь контент
                      </p>
                  </div>
              </div>

          </div>
          <div style={{height: 2000}}></div>

          {/*<VBox>*/}
          {/*    <h1 id="forStudent">Заголовок школьники</h1>*/}
          {/*    <button>Играть!</button>*/}
          {/*    <button>Играть!</button>*/}

          {/*</VBox>*/}

          <div>
              Жертвами бубузинга...
          </div>

          <VBox>
              <h1 id="forParents">Заголовок родители</h1>
              <button>Играть!</button>
              <button>Играть!</button>

          </VBox>

          <div>
              Жертвами агрессии...
          </div>

          <div>
              Вас шокировало!...
          </div>

          <div>
              Треть учеников
          </div>

          <div>
              <h1 id="Authors">Авторы проекта</h1>

          </div>

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
