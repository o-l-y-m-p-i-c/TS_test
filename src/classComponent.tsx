import React from 'react'
import style from './classComponent.module.scss'

interface IProps{
    data: string,
    age:number,
    comment?:string
}
interface IState{
    click: number,
    hurts:number
}

class ClassComponent extends React.Component<IProps, IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            click:0,
            hurts:0
        };
    }


    growHandle = ()=>{
        const {click} = this.state;
        this.setState({click: click + 1});
    }

    degrateGanle= () =>{
        const {click} = this.state;
        this.setState({click : click -1});
    }

    addLike= ()=>{
        const {hurts} = this.state;
        this.setState({hurts: hurts +1});
    }

    render(){
        const {data,age, comment} = this.props;
        const {click, hurts} = this.state;
        
        return(
            <>
                <h1>ClassComp</h1>
                <h2>Clicks : {click}</h2>
                <button type="button" onClick={this.growHandle}>Grow</button>
                <button className={style.btn} type="button" onClick={this.addLike}>
                    <span className="btn__span">♥:</span>{hurts}
                </button>
                <button type="button" onClick={this.degrateGanle}>Degrate</button>
                <p>{data}</p>
                <p>{age}</p>
                <p>{comment}</p>
            </>
        )
    }
}

export default ClassComponent;