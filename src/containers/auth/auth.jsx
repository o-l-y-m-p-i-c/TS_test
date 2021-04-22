import React from 'react'
import style from './auth.modules.scss'
// import AuthForm from '../../components/authForm/authForm'

class Auth extends React.PureComponent{

    render(){
        return(
            <>
                <section className={style.auth}>
                    <div className="auth__form">
                        <img src="../../images/core/corwn.png" alt="" />
                        <article>Авторизация</article>
                        {/* <AuthForm  /> */}
                    </div>
                </section>
            </>
        )
    }
}

export default Auth;