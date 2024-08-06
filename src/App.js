import './css/fonts.css'
import './css/containers.css'
import './css/common.css'
import './css/buttons.css'
import './css/text.css'

import React, {useEffect, useState} from "react";

import ModalControl from "./utils/ModalControl";

import API from "./utils/API";
import CoverSection from "./sections/CoverSection";
import PaymentModal from "./modals/PaymentModal";
import LoginModal from "./modals/LoginModal";
import ForStudentSection from "./sections/ForStudentSection";
import FactSection from "./sections/FactSection";
import ForParentSection from "./sections/ForParentSection";
import PolicyModal from "./modals/PolicyModal";
import ShockSection from "./sections/ShockSection";
import AuthorsSection from "./sections/AuthorsSection";
import FaqSection from "./sections/FaqSection";
import Footer from "./sections/Footer";
import ScreenVariant from "./utils/ResponsiveLogic";

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
    }, [user, api, loginModalControl]);

    const screenVariant = ScreenVariant()


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
            window.alert("Текущее окно находится в процессе правок")
            paymentModalControl.openModal()
        }
    }


    return (
        <div className="App">
            <PaymentModal
                modalControl={paymentModalControl}
                openPolicy={policyModalControl.openModal}
                openLogin={loginModalControl.openModal}
                api={api}
                screenVariant={screenVariant}/>
            <LoginModal
                modalControl={loginModalControl}
                openPayment={paymentModalControl.openModal}
                api={api}
                initialLogin={initialLogin}
                screenVariant={screenVariant}/>
            <PolicyModal modalControl={policyModalControl}/>

            <CoverSection username={user.name} authenticated={user.authenticated} loginModalControl={loginModalControl} playAction={playAction} screenVariant={screenVariant}/>
            <ForStudentSection playAction={playAction} screenVariant={screenVariant}/>
            <FactSection reverse={false} screenVariant={screenVariant}>
                ЖЕРТВАМИ БУЛЛИНГА В РОССИИ СТАЛИ <span>57%</span> ДЕТЕЙ
                И <span>70%</span> УЧИТЕЛЕЙ
                <div className={"body-text"}>
                    По статистике за Ноябрь 2023
                </div>
            </FactSection>
            <ForParentSection playAction={playAction}/>
            <FactSection reverse={true} screenVariant={screenVariant}>
                Каждый <span>ВТОРОЙ</span> РЕБЕНОК СТАЛКИВАЕТСЯ С АГРЕССИЕЙ И
                КАЖДЫЙ <span>ТРЕТИЙ</span> — С ЕЁ ФИЗИЧЕСКИМИ ПРОЯВЛЕНИЯМИ
            </FactSection>
            <ShockSection/>
            <FactSection reverse={true} screenVariant={screenVariant}>
                У <span>ТРЕТИ</span> УЧЕНИКОВ, КОТОРЫХ ТРАВИЛИ В ШКОЛЕ, В БУДУЩЕМ
                ВОЗНИКАЮТ <span>ПСИХИЧЕСКИЕ РАССТРОЙСТВА</span>
            </FactSection>
            <AuthorsSection screenVariant={screenVariant}/>
            <FaqSection/>
            <Footer
                user={user}
                api={api}
                openLogin={loginModalControl.openModal}
                openPolicy={policyModalControl.openModal}
                screenVariant={screenVariant}
            />


        </div>
    );
}

export default App;
