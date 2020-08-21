import React from 'react'

export default class ClearOne extends React.Component{
    clickhandler=()=>{
        this.props.handlerOne();
    }

    render(){
        return(
            <input type="button" value="C" onClick={this.clickhandler}></input>
             )
    }
}