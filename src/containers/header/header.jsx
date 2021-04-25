import React from 'react'
import { Link} from 'react-router-dom'
import style from "./header.module.scss"
import Logo from '../../images/core/Logo.png'

class Header extends React.PureComponent {


    render(){
        return(
            <>
                <header className={style.header__wrapper}>
                    <div className={style.header}>
                        <Link to="/main"><img className={style.header__img} src={Logo} alt="" /></Link>
                        <ul>
                            <li className={style.header__goOut}><Link to="/auth"><span>Выйти</span></Link></li>
                        </ul>
                        
                    </div>
                </header>
            </>
        )
    }
}
export default Header