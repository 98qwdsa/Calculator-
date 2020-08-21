import React from 'react'

export default class Result extends React.Component{
    clickhandler=()=>{
        this.props.handlerResult()
    }

    render(){
        return(
            <input type="button" value="=" onClick={this.clickhandler}></input>
             )
    }
}