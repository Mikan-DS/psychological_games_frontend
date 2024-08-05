import './css/AboutSection.css'

import Screenshot4 from "../img/screenshots/4.png";
import Screenshot5 from "../img/screenshots/5.png";
import Screenshot6 from "../img/screenshots/6.png";

import React from "react";

export default function ForParentSection({user, playAction}){

    return (
        <div id={"forParent"} className={"content-box body-text"}>
            <h1>
                Если вы родитель
            </h1>
            <div className={"accent-text"}>
                и хотите помочь своему ребёнку
            </div>

            <div className={"stretched-box showcase"}>
                <div>
                    <img src={Screenshot4 ? Screenshot4 : ""} alt="Скриншот 4"/>
                    <h4>Вернуться в детство</h4>
                    <div>
                        В основе игры лежат реальные события.
                        Поиграйте в игру, возможно, у вас было то же самое.
                        Погрузитесь в своё детство, вспомните его, вы можете найти там невольные ошибки.
                        С позиции главного героя исправьте их – и вы увидите изменения в своём взрослом поведении.
                        Все мы родом из детства!
                    </div>
                </div>
                <div>
                    <img src={Screenshot5 ? Screenshot5 : ""} alt="Скриншот 5"/>
                    <h4>Понять ребенка</h4>
                    <div>
                        Пройдите игру вместе с ребенком или понаблюдайте за его игрой.
                        Может вы узнаете в нём себя и увидите те же ошибки?
                        Кроме того, вы поймёте в какой реальной ситуации он
                        каждый день находится и с какими проблемами сталкивается.
                        Это даст вам возможность обсуждать именно его жизнь и трудности в классе.

                    </div>
                </div>
                <div>
                    <img src={Screenshot6 ? Screenshot6 : ""} alt="Скриншот 6"/>
                    <h4>Помочь ребенку</h4>
                    <div>
                        Может быть, ваш ребенок стал замкнутым и подавленным,
                        вы подозреваете, что его травят в школе, или вам говорят,
                        что он агрессивно себя ведет. Опираясь на сюжет игры,
                        вы сможете обсудить её с подростком. Понять, насколько опасна текущая ситуация.
                        Дать ли ребенку возможность решать конфликты самостоятельно,
                        или уже необходимо вмешательство взрослых. Так чтобы не навредить.
                    </div>
                </div>
            </div>

            <button className={"secondary-button large"} onClick={playAction}>
                ЗАКАЗАТЬ ИГРУ ДЛЯ РЕБЁНКА
            </button>
        </div>
    )
}