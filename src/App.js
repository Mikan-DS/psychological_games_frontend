import "./App.css";
import React from "react";
import VBox from "./VBox";
import Cover from "./img/cover_desktop.png";
import TitleImage from "./img/title.png"
import AgeImage from "./img/age.png"
import CoverPics from "./img/Cover_pic_desktop.png"
// import GogolFont from "./fonts/Gogol Regular.ttf"

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
          <div style={{height: 2000}}></div>

          <VBox>
              <h1 id="forStudent">Заголовок школьники</h1>
              <button>Играть!</button>
              <button>Играть!</button>

          </VBox>

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
