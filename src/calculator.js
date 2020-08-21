import React from 'react'
import ClearAll from './clearAll'
import ClearOne from './clearOne'
import GetContent from './getContent'
import Result from './result'
export default class Calculator extends React.Component{
    
    state={
        display:""
    }

    displayNull=()=>{
        this.setState({
            display:""
        })
    }
    minuOne=()=>{
        var copy="";
        copy=this.state.display;
        var newDis="";
        newDis=copy.substring(0,copy.length-1);
        this.setState({
            display:newDis
        })
    }
    putContent=(data)=>{
        this.setState({
            display:this.state.display+data
        })
        

    }
    getResult=()=>{
        var result=0;
        result=eval(this.state.display);
        this.setState({
            display:"",
            display:result
        })
    }

    render(){
        return(
            <div>
                <form>
                    <input type="text" value={this.state.display} readOnly></input>
                    <br />
                    <ClearAll handlerAC={this.displayNull} />
                    <ClearOne handlerOne={this.minuOne} />
                    <GetContent handlerContent={this.putContent} />
                    <Result handlerResult={this.getResult}/>
               </form>
                
            </div>
        )
    }
    
     
}