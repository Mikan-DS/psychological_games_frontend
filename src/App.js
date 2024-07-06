import "./App.css";
import React from "react";
import MovableHeader from "./MovableHeader";
import VBox from "./VBox";

function App() {
  return (
      <div className="App">

          <header className="App-header">

              <div>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="<http://www.w3.org/2000/svg>">
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


          <MovableHeader/>
          <div style={{height:2000}}></div>

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
