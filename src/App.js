import "./App.css";
import React, {useEffect, useState} from "react";

import ModalControl from "./ModalControl";

import API from "./API";
import CoverSection from "./sections/CoverSection";
import PaymentModal from "./PaymentModal";
import LoginModal from "./LoginModal";

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

            {/*<PaymentModal modalControl={paymentModalControl} openPolicy={openPolicy} openLogin={openLogin} api={api}/>*/}
            <LoginModal
                modalControl={loginModalControl}
                openPayment={paymentModalControl.openModal}
                api={api}
                initialLogin={initialLogin}/>
            {/*<PolicyModal modalControl={policyModalControl}/>*/}

            <CoverSection user={user} loginModalControl={loginModalControl} playAction={playAction}/>

            <div id={"forStudent"} style={{height: 3000}}>
                TEST
            </div>

        </div>
    );
}

export default App;
