import React from 'react';

import DisplayLog from './DisplayLog';
import './Demo.css'

class Demo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time:0,
            on:false,
            log:[],  
        };
    }
    timer = null;
    gap =1000;
    
    handleClick =() =>{
        if(this.state.on){
            clearInterval(this.timer);
        }else{
            //定时器
            this.timer = setInterval(() => {
                this.setState({
                    time:this.state.time+this.gap
                })
            }, this.gap);
        }
        //改变开始、暂停状态
        this.setState({
            on:!this.state.on
        });
    }

    //记录时间，用数组把当前得时间记录下来
    handlelogTime = () =>{
        this.state.log.push(this.state.time);
        console.log(this.state.time);
    }

    //清空操作
    handlelClear = () =>{
        this.setState({
            log:[]
        });
    }

    //重置
    handleReset = () =>{
        this.setState({
            time:0
        });
    }

    render(){
        var text = this.state.on ? '暂停':'开始';
        // eslint-disable-next-line no-undef
        var time = this.state.time;
        return(
            <div>
                <h1 className="time_displayer">{time}</h1>
                <div className="controler">
                <button className={this.state.on ? "danger":"success"} text={text} onClick={this.handleClick}/>
                <button className="warning" text="重置" onClick={this.handleReset}></button> 
                <button className="primary" text="记录" onClick={this.handlelogTime}></button>
                <button className="undefined" text="清空" onClick={this.handlelClear}></button>
                </div>
            <DisplayLog log={this.state.log}/>
            </div>
        )
    }

   
    
}

export default Demo;