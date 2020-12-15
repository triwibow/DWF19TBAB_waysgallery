import { useState } from 'react';
import './landing.css';
import landing_image from '../../assets/images/landing_image.png';

import LoginModal from '../../component/modal/LoginModal';
import RegisterModal from '../../component/modal/RegisterModal';


const Landing = () => {
    const [modalLogin, setModalLogin] = useState(false);
    const [modalRegister, setModalRegister] = useState(false);

    const showModalRegister = () => {
        if(modalRegister){
            setModalRegister(false);
            setModalLogin(false);
            return;
        }
        setModalLogin(false);
        setModalRegister(true);
    }

    const showModalLogin = () => {
        if(modalLogin){
            setModalLogin(false);
            setModalRegister(false);
            return;
        }

        setModalRegister(false);
        setModalLogin(true);
    }



    return(
        <div className="landing-container">

            {modalLogin ? <LoginModal />: null}
            {modalRegister ? <RegisterModal />: null}

            <div className="landing-info">
                <button className="button-primary" onClick={showModalRegister}>Join Now</button>
                <button className="button-secondary" onClick={showModalLogin}>Login</button>
            </div>

            <div className="landing-images">
                <img src={landing_image} alt="landing" />
            </div>
        </div> 
    )
}

export default Landing;