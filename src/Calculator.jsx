import React from 'react';
import './Calculator.css';

const actions = ["+", "-", "*", "/", "C", "="];
function Operator(props){
    return <div>
        {props.actions.map(action =>
            <button 
                key={action}
                onClick={() => {props.click(action)}}
            >
                    {action}
            </button>
        )}
    </div>;
}

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
function NumberList(props) {
    return (<div>
        {props.numbers.map(number =>
            <button 
                key={number}
                onClick={() => {props.click(number)}}
            >
                {number}
            </button>
        )}
    </div>)
}

class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state={
            str: "",
            result:""
        }
        /*this.numClick = this.numClick.bind(this);*/
    }

    numClick = e => {
        const str = this.state.str;
        this.setState({
            str: str == 0 ? e : str + e
        });
    }

    keyClick = e => {
        if((e.keyCode >= 96 && e.keyCode <= 105) || (e.keyCode >= 48 && e.keyCode <= 57)){
            this.numClick(e.key);
        }else if("+-*/".indexOf(e.key) != -1){
            this.operatorClick(e.key);
        }else if(e.key === "Enter"){
            this.operatorClick("=");
        }
    }

    operatorClick = e => {
        const str = this.state.str;
        if(e === "=") {
            this.setState({
                result: eval(str)
            });
        }else if(e === "C"){
            this.setState({
                str: "",
                result:""
            });
        }else{
            this.setState({
                str: str === "0" ? "0" : str + e
            });
        }
        
    }


    render() {
        return <div className='calculator' onKeyDown={(e) => this.keyClick(e)}>
            <input className='input' value={this.state.str} readOnly></input>
            <div className='result'>{this.state.result}</div>
            <Operator actions={actions} click={this.operatorClick}></Operator>
            <NumberList numbers = {numbers} click={this.numClick}></NumberList>
        </div>; 
    }
}

export default Calculator;