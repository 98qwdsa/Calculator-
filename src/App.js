import React, { Component } from "react";
import "./App.css";

const funs = ["+", "-", "*", "/", "c", "←", "="];
const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function Action(props) {
  return (
    <div className="action">
      {props.funs.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              props.click(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

function Number(props) {
  return (
    <div className="number">
      {props.nums.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              props.click(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      result: ""
    };
    this.numClick = this.numClick.bind(this);
    this.actionClick = this.actionClick.bind(this);
  }

  render() {
    return (
      <div className="wrap">
        <input value={this.state.inputValue} readOnly />
        <div className="result">{this.state.result}</div>
        <Action funs={funs} click={this.actionClick} />
        <Number nums={nums} click={this.numClick} />
      </div>
    );
  }

  numClick(e) {
    let inputValue = this.state.inputValue + e;
    this.setState({
      inputValue
    });
  }

  actionClick(e) {
    if (e === "c") {
      this.setState({
        inputValue: "",
        result: ""
      });
      return;
    }

    if (e === "←") {
      let newInputValue = this.state.inputValue;
      this.setState({
        inputValue: newInputValue.substr(0, newInputValue.length - 1)
      });
      return;
    }

    if ("=" === e) {
      let result = "";
      let inputValue = "";
      try {
        // eslint-disable-next-line
        result = eval(this.state.inputValue);
      } catch (error) {
        result = "格式错误，请重新输入";
        inputValue = this.state.inputValue;
      }

      this.setState({
        inputValue,
        result
      });
      return;
    }
    let inputValue = this.state.inputValue + e;
    this.setState({
      inputValue
    });
  }
}

export default App;
