import React from 'react'
import { Link} from 'react-router-dom';
import Main from '../../../pages/main/main'
import style from './btn.module.scss'

interface IBtn {
    naming: string,
    link:string
}

class Btn extends React.Component<IBtn> {
    constructor(props:IBtn) {
        super(props);
        this.state ={}
    }

    render(){
        const {naming, link} = this.props;

        return(
            <Link  to={link} className={style.border}>
                <button type="button"  className={style.btn} >{naming}</button>
            </Link>
        )
    }
}
export default Btn