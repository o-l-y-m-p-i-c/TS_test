import React from 'react'
import style from './authInput.modules.scss'

interface IProps {
    data: string
}

class AuthInput extends React.PureComponent<IProps> {
    constructor(props:IProps){
        super(props);
        this.state={}
    }

    render(){
        const { data } = this.props;

        return(
            <>
                <div className={style.auth__login} >
                    <input className={style.inputText} type="text" autoComplete="off" required />
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