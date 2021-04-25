import React from 'react'
import AuthInput from '../../components/inputText/authInput'
import Btn from '../../components/btn/btn'
import style from './reg.module.scss'
import img from '../../images/core/corwn.png'

class Reg extends React.PureComponent {

    render(){
        return(
            <>
                <section className={style.reg__from}>
                    <img src={img}  alt="" />
                    <h2 className={style.auth__title}>Регистрация</h2> 
                    <AuthInput data="Введите свое имя" />
                    <AuthInput data="Введите свое отчество" />
                    <AuthInput data="Введите свою фамилию" />
                    <AuthInput data="Введите новый пароль" />
                    <AuthInput data="Введите повторно пароль" />
                    <div className={style.reg__btns}>
                        <Btn naming="Вернуться" link="/auth" />
                        <Btn naming="Зарегистрироваться" link="/auth" />
                    </div>
                </section>
            </>
        )
    }
}

export default Reg