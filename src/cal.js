import React from 'react'
import { render } from '@testing-library/react';

class Cal extends React.Component {
    constructor(props) {
        super(props);//初始化
        this.state = {
            inputValue: '',
            list: ['1',
                '2',
            ]
        }
    }
  /* 处理数字*/
    handleClick(e) {
        var result = this.state.inputValue;
        var value = e.target.value;
        //console.log(value);
        console.log(result);
          this.setState({
            inputValue: result + value

        })
    }
    handleButton(button_name) {
        return <button type="button" id="d1" onClick={this.handleClick.bind(this)} value={button_name}>{button_name}</button>;
    } 
    /* 处理数字*/

    /* 处理算式*/
    handleExpression(e){
        if (value === 'AC') {
            this.handleExpression(value)
         }
         if (value == 'back') {
 
             this.setState({ inputValue: result.substring(0, result.length - 1) })
         }
         if (value == '=') {
             try{ var chanInputvalue = eval(result);
                
                 this.setState({ inputValue: chanInputvalue })
             }catch(error){
                 this.setState({ inputValue: "你输入的算式有错误" })
             }
         }
    }
    handleExButton(button_name) {
        return <button type="button" id="dAC" onClick={this.handleExpression.bind(this)} value={button_name}>{button_name}</button>;
    } 

    /* 处理算式*/
  

    render() {
        return (<div id="mune">
            ANSWER<form><input type="text" id="result" value={this.state.inputValue} /></form>
            <div>
            {this. handleExButton("AC")}
            {this. handleExButton("+/-")}
            {this. handleExButton("back")}
            {this. handleExButton("/")}
          

            </div>
            <div>
                {this.handleButton("1")}
                {this.handleButton("2")}
                {this.handleButton("3")}
                {this. handleExButton("*")}
            </div>
            <div>
                {this.handleButton("4")}
                {this.handleButton("5")}
                {this.handleButton("6")}
                {this. handleExButton("-")}
            </div>
            <div>
                {this.handleButton("7")}
                {this.handleButton("8")}
                {this.handleButton("9")}
                {this. handleExButton("+")}
            </div>
            {this.handleButton("0")}
            {this.handleButton(".")}
            {this. handleExButton("=")}
        </div>);
    }
}
export default Cal;