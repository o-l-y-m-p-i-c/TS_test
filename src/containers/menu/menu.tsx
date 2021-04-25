import React from 'react'
import { Link } from "react-router-dom";
import style from "./menu.module.scss";
import img from '../../images/menu/aside.png';

class Menu extends React.PureComponent{
    render(){
        return(
            <>
                <aside className={style.menu}>
                <ul>
                    {/* Начало компонент */}
                    <li>
                        <Link to="/" >
                            <img src={img} alt="" />
                            <article>
                                Главная
                            </article>
                        </Link>
                    </li>
                    {/* Конец компонента */}
                    <li>
                        <Link to="/" >
                            <img src={img} alt="" />
                            <article>
                                Чат
                            </article>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" >
                            <img src={img} alt="" />
                            <article>
                                CHAT
                            </article>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" >
                            <img src={img} alt="" />
                            <article>
                                Учебный график
                            </article>
                        </Link>
                    </li>
                </ul>
            </aside>
            </>
        )
    }
}
export default Menu