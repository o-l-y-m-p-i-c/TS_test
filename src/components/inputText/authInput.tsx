import React from 'react'
import style from "./authInput.module.scss"

interface IInput {
    data: string
}

class AuthInput extends React.PureComponent <IInput> {
   
    text = (event:any)=>{
        console.log(event.target.value)
    }

    render(){
        const { data } = this.props;

        return(
            <>
                <div className={style.auth__login} >
                    <input className={style.inputText} onInput={this.text} type="text" autoComplete="off" required />
                    <article className={style.inputText__label}>
                        <span className={style.inputText__span}>
                            {data}
                            </span>
                    </article>
                </div>
            </>
        )
    }
}

export default AuthInput