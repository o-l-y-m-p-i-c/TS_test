import React from 'react'
import { Link} from 'react-router-dom';
import Main from '../../../pages/main/main'

interface IBtn {
    naming: string,
    color?: string
}

class Btn extends React.Component<IBtn> {
    constructor(props:IBtn) {
        super(props);
        this.state ={}
    }

    render(){
        const {naming} = this.props;

        return(
            <>
            <Link  to="/main" >
                <button type="button"  className="btn --white" >{naming}</button>
            </Link>
            </>
        )
    }
}
export default Btn