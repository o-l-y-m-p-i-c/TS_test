import React from 'react'
import style from './btns.modules.scss'
import Btn from './btn/btn'

class Btns extends React.PureComponent{
    render(){
        return(
            <div className="auth-btns">
                <Btn naming="Регистрация" />
                <Btn naming="Авторизация" />
            </div>
        )
    }
}

export default Btns