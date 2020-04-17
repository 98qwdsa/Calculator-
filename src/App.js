/**
 * @author: weipeng.cai
 */


import * as React from 'react';
import './App.css';

class Numbers extends React.Component {
  constructor(props) {
    super(props);
    this.handleNumber = this.handleNumber.bind(this);
  }
  handleNumber(e) {
    this.props.onNumber(this.props.data.label);
  }
  render() {
    return (
      <div className="number_warp">
        {/* 根据props传入的数据生成按钮 */}
        <button onClick={this.handleNumber}>{this.props.data.label}</button>
      </div>
    );
  }
  
}

const buttons = [
  {
    label: "0"
  },
  {
    label: "1"
  },
  {
    label: "2"
  },
  {
    label: "3"
  },
  {
    label: "4"
  },
  {
    label: "5"
  },
  {
    label: "6"
  },
  {
    label: "7"
  },
  {
    label: "8"
  },
  {
    label: "9"
  }
];

class Actions extends React.Component {
  constructor(props) {
    super(props);
    this.handleAction = this.handleAction.bind(this);
  }
  handleAction(e) {
    this.props.onAction(this.props.data.label);
  }
  render() {
    return (
      <div className="action_warp">
        {/* 根据props传入的数据生成按钮 */}
        <button onClick={this.handleAction}>{this.props.data.label}</button>
      </div>
    );
  }
}

const funs = [
  {
    label: "+"
  },
  {
    label: "-"
  },
  {
    label: "*"
  },
  {
    label: "/"
  },
  {
    label: "C"
  },
  {
    label: "="
  }
];

class App extends React.Component {
  char = ['+', '-', '*', '/'];

  preInput;
  constructor(props) {
    super(props);
    this.numClick = this.numClick.bind(this);
    this.actionsClick = this.actionsClick.bind(this);
    this.state = {
      evalStr: '',
      result: 0,
      errorMsg: ''
    };
    this.preInput = '';
  }

  // 因为严格模式下 eval会错误地吧01认为是二进制，所以这里要进行去0操作
  handleInput(value) {
    return value.replace(/\b(0+)/gi,"");
  }

  getResult(input){
    console.log(input);
    try {
      let _input = this.handleInput(input);
      return eval(_input);
    } catch (e) {
      return 'error';
    }
  }

  numClick(number) {
    this.preInput += number;
    this.setState({
      evalStr: this.preInput,
      errorMsg: ''
    });
  }

  //算式方法组件点击后处理方法
  actionsClick(action) {
    // 如果有错误信息，只能点击C按钮
    // 如果点击C按钮清除 错误信息,需要计算的算式，计算结果
    // 如果点击的=,计算算式。 如果错误显示错误提示
    // 如果点击是一般计算方法符号，在当前算术式后面累加
    /**
     * 上面是题目要求（应该是）， 我考虑到流畅性，错误信息会弹出，但是可以继续操作
     */
    if (!this.handleError(action)) {
      return;
    }
    if (action === '=') {
      let _result = this.getResult(this.preInput);
      if (_result !== 'error') {
        this.setState({
          result: _result,
          errorMsg: ''
        });
        this.preInput = _result + '';
      } else {
        this.setState({
          errorMsg: '算术式错误'
        })
      }
    } else if (action === 'C') {
      this.preInput = '';
      this.setState({
        result: 0,
        evalStr: '',
        errorMsg: ''
      });
    } else if (action === '+' || action === '-' || action === '*' || action === '/') {
      if (this.char.includes(this.preInput.charAt(this.preInput.length - 1))) {
        // 这里进行一个变更运算符的操作
        this.preInput = this.preInput.substr(0, this.preInput.length - 1);
      }
      this.preInput += action;
      this.setState({
        evalStr: this.preInput,
        errorMsg: ''
      })
    }
  }

  // 错误处理
  handleError(value) {
    if (this.preInput === '') {
      this.setState({
        errorMsg: '请先输入数字'
      });
      return false;
    }
    return true;
  }

  inputOnChange (e) {
    this.setState({
      evalStr:e.target.value
  })
  }

  render() {
    const numberItem = [];
    for (let i = 0; i < buttons.length; i++) {
      numberItem.push(<Numbers data={buttons[i]} onNumber={this.numClick} />)
    }

    const actionItem = [];
    for (let j = 0; j < funs.length; j++) {
      actionItem.push(<Actions data={funs[j]} onAction={this.actionsClick} />)
    }
    return (
      <div className="warp">
        <input value={this.state.evalStr} onChange={this.inputOnChange.bind(this)} />
        {/* 显示计算结果和错误提示 */}
        <div className="result">
          {this.state.result}
        </div>
        <div className="error_msg">
          {this.state.errorMsg}
        </div>

        {/* 引入方法按钮组件 */}
        {actionItem}

        {/* 引入数字按钮组件 */}
        {numberItem}
      </div>
    );
  }
}

export default App;
