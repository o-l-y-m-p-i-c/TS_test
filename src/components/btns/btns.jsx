import React from 'react'
import Btn from './btn/btn'
import style from './btns.module.scss'

class Btns extends React.PureComponent{
    render(){
        return(
            <div className={style.auth__btns}>
                <Btn naming="Регистрация" link="/reg"/>
                <Btn naming="Авторизация" link="/main" />
            </div>
        )
    }
}

export default Btns