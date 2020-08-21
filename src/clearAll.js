import React from 'react'

export default class ClearAll extends React.Component{
    clickhandler=()=>{
        this.props.handlerAC()
    }

    render(){
        return(
            <input type="button" value="AC" onClick={this.clickhandler}></input>
             )
    }
}