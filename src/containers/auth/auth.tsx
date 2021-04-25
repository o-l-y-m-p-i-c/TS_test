import React from 'react'
import InputText from '../../components/inputText/authInput'
import img from '../../images/core/corwn.png'
import Btn from '../../components/btn/btn'
import style from './auth.module.scss'


interface IAuth{
    data:string,
    naming:string,
    link:string
}

class Auth extends React.Component<IAuth>{
    constructor(props:IAuth){
        super(props)
        this.state = {
            data: ["Введите имя","Введите пароль"],
            naming: ["Регистрация","Авторизация"],
            link: ["/reg","/main"]
        }
    }

    showMessage(){
        console.log("This is a new message")
    }
    clearFunction(){
        return 0;
    }

    render(){
        const {data,naming,link} = this.props;
        return(
            
            <>
                <section className={style.auth}>
                    <div className={style.auth__form}>
                        <img src={img}  alt="" />
                        <h2 className={style.auth__title}>Авторизация</h2> 
                        <InputText data={data[0]} />
                        <InputText data={data[1]} />
                        <div className={style.auth__btns}>
                            <Btn
                                naming={naming[0]} 
                                link={link[0]}
                                click={this.showMessage}
                            />
                            <Btn 
                                naming={naming[1]} 
                                link={link[1]}
                                click={this.clearFunction}
                            />
                        </div>
                    </div>
                        
                </section>
            </>
        )
    }
}

export default Auth;