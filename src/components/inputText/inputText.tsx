import React from 'react';
import AuthInput from './smartInput/authInput'

interface IInputText{
    data :string
}

class InputText extends React.Component<IInputText>{
    constructor(props:IInputText){
        super(props);
        this.state={}
    }

    render(){
        const {data} = this.props;

        return(
            <>
                <AuthInput data={data} />
            </>
        )
    }
}