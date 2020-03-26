import React from 'react';
import './Calculator.scss';

function Actions(props) {
    return (
        <div className="action-wrapper">
            {props.actions.map((item, index) => 
                <button
                    key={index}
                    onClick={props.actionClick}
                >
                    {item}
                </button>
            )}
        </div>
    );
}

function Numbers(props) {
    return (
        <div className="number-wrapper">
            {props.nums.map((item, index) => 
                <button
                    key={index}
                    onClick={props.numClick}
                >
                    {item}
                </button>
            )}
        </div>
    );
}

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.hasError = false;
        this.isEnd = false;
        this.errorMsg = 'The format is uncorrect.'
        this.state = {
            evalStr: "",
            result: ""
        };
    }

    numsList = ['0','1','2','3','4','5','6','7','8','9'];
    actionsList = ['+','-','*','/','C','='];

    inputOnChange = e => {
        //update state
        this.setState({
            evalStr: e.target.value
        });
    }

    actionOnClick = e => {
        const actionValue = e.target.innerText;
        console.log('press:'+actionValue);
        if ((this.hasError  || this.isEnd) && actionValue !== 'C') {
            return;
        }
        let evalStr, result;
        if (actionValue === 'C') {
            this.hasError = false;
            this.isEnd = false;
            evalStr = '';
            result = '';
        } else {
            if(actionValue !== '=') {
                evalStr = this.state.evalStr + actionValue;
            }else {
                try {
                    this.isEnd = true;
                    evalStr = this.state.evalStr;
                    result = eval(evalStr);
                } catch (error) {
                    this.hasError = true;
                    this.isEnd = true;
                    result=this.errorMsg;
                }
                //if result is not number
                if (/^(-?\d+)(\.\d+)?$/.test(result) === false) {
                    this.hasError = true;
                    this.isEnd = true;
                    result=this.errorMsg;
                }
            }
        }
        this.setState({
            evalStr,
            result
        });
    }

    numberOnClick = e => {
        if (this.hasError || this.isEnd) {
            return;
        }
        const numValue = e.target.innerText;
        console.log('press:'+e.target.innerText);
        this.setState({
            evalStr: this.state.evalStr + numValue
        });
    }

    render() {
        return(
            <div className="container">
                {/* display the input value*/}
                <input value={this.state.evalStr} onChange={this.inputOnChange}/>
                {/* display the result value*/}
                <div className={this.hasError ? "hasError" : "non-Error"}>
                    {this.state.result}
                </div>
                <Actions actions={this.actionsList} actionClick={this.actionOnClick}/>
                <Numbers nums={this.numsList} numClick={this.numberOnClick}/>
            </div>
        );
    }

}