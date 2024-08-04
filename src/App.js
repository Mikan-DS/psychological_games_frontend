import "./App.css";
import React, {useEffect, useState} from "react";

import ModalControl from "./ModalControl";

import API from "./API";
import CoverSection from "./sections/CoverSection";
import PaymentModal from "./PaymentModal";
import LoginModal from "./LoginModal";
import ForStudent from "./sections/ForStudent";
import FactSection from "./sections/FactSection";
import ForParent from "./sections/ForParent";
import PolicyModal from "./PolicyModal";
import ShockSection from "./sections/ShockSection";

let onlyOne = true;

function App() {

    const api = API() // По хорошему лучше иметь всего 1 объект API, на случай если в будущем в нем будет происходить одноразовая логика (Например если будет OAuth)

    const paymentModalControl = ModalControl();
    const loginModalControl = ModalControl();
    const policyModalControl = ModalControl();

    const [user, setUser] = useState({
        authenticated: false,
        username: "",
        name: "",
        id: "",
        email: ""
    })

    useEffect(() => {
        if (onlyOne) {
            api.get_user().then(r => {
                if (r !== null) {
                    setUser(r);
                    if (r.username) {
                        loginModalControl.closeModal()
                    }
                }
            });
            onlyOne = false;
        }
    }, [user]);


    const urlParams = new URLSearchParams(window.location.search);
    const initialLogin = urlParams.get('login') ? ("+" + urlParams.get('login')) : '';
    const [initialLoginOpen, setInitialLoginOpen] = useState(initialLogin.length !== 0)

    if (initialLoginOpen) { // Это нужно на случай если страница с параметром логина
        loginModalControl.openModal();
        setInitialLoginOpen(false)
    }

    function playAction(){
        if (user.authenticated){
            window.alert("Игры в разработке!")
        }
        else {
            paymentModalControl.openModal()
        }
    }


    return (
        <div className="App">

            <PaymentModal modalControl={paymentModalControl} openPolicy={policyModalControl.openModal} openLogin={loginModalControl.openModal} api={api}/>
            <LoginModal
                modalControl={loginModalControl}
                openPayment={paymentModalControl.openModal}
                api={api}
                initialLogin={initialLogin}/>
            <PolicyModal modalControl={policyModalControl}/>

            <CoverSection user={user} loginModalControl={loginModalControl} playAction={playAction}/>
            <ForStudent user={user} playAction={playAction}/>
            <FactSection reverse={false}>
                ЖЕРТВАМИ БУЛЛИНГА В РОССИИ СТАЛИ <span>57%</span> ДЕТЕЙ
                И <span>70%</span> УЧИТЕЛЕЙ
                <div className={"body-text"}>
                    По статистике за Ноябрь 2023
                </div>
            </FactSection>
            <ForParent user={user} playAction={playAction}/>
            <FactSection reverse={true}>
                Каждый <span>ВТОРОЙ</span> РЕБЕНОК СТАЛКИВАЕТСЯ С АГРЕССИЕЙ И
                КАЖДЫЙ <span>ТРЕТИЙ</span> — С ЕЁ ФИЗИЧЕСКИМИ ПРОЯВЛЕНИЯМИ
            </FactSection>
            <ShockSection/>
            <FactSection reverse={true}>
                У <span>ТРЕТИ</span> УЧЕНИКОВ, КОТОРЫХ ТРАВИЛИ В ШКОЛЕ, В БУДУЩЕМ
                ВОЗНИКАЮТ <span>ПСИХИЧЕСКИЕ РАССТРОЙСТВА</span>
            </FactSection>

            <div style={{height: 500, backgroundColor: "aqua", textAlign: "center"}}>
            </div>

        </div>
    );
}

export default App;
