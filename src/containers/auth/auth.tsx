import React from 'react'
import InputText from '../../components/inputText/smartInput/authInput'
import img from '../../images/core/corwn.png'
import Btns from '../../components/btns/btns'

class Auth extends React.PureComponent{

    render(){
        return(
            <>
                <section className="auth">
                    <div className="auth__form">
                        <img src={img}  alt="" />
                        <h2 className="auth__title">Авторизация</h2> 
                        <InputText data="Введите имя" />
                    </div>
                        <Btns />
                </section>
            </>
        )
    }
}

export default Auth;