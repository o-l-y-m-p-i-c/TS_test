import React from 'react'
import { Link} from 'react-router-dom';
import Main from '../../pages/main/main'
import style from './btn.module.scss'

interface IBtn {
    naming: string,
    link:string,
    click:any
}

class Btn extends React.PureComponent<IBtn> {
    // constructor(props:IBtn) {
    //     super(props);
    //     this.state ={}
    // }

    // checkPassword(){
    //     console.log('pass ok')
    // }

    render(){
        const {click, naming, link} = this.props;

        return(
            <Link  to={link} className={style.border}>
                <button type="button"  className={style.btn} onClick={click} >{naming}</button>
            </Link>
        )
    }
}
export default Btn