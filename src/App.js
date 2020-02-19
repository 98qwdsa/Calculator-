
import React from "react";
import "./App.css";
function Numbers(props) {
  return (
    <div className="number_warp">
      {/* numbers根据props传入的数据生成按钮 */}
      {props.numbers.map(e => 
        <button 
          key={e.label} 
          onClick={() => { 
            props.click(e.label) 
          }}>
          {e.label}
        </button>
      )}
    </div>
  );
}
//定义计算按钮的初始数据
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
function Actions(props) {
  return (
    <div className="action_warp">
      {/* actions 根据props传入的数据生成按钮 */}
      {props.actions.map(e => 
        <button key={e.label} 
          onClick={() => { 
            props.click(e.label) 
          }}>
          {e.label}
        </button>
      )}
    </div>
  );
}
// 定义算术方法的 初始数据
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
  constructor(props) {
    super(props);
    this.errorMsg = props.errorMsg || "请输入正确的算术式!";
    this.state = {
      evalStr: "",
      result: ""
    };
  }
  //算式方法组件点击后处理方法
  actionsClick = e => {
    // 如果有错误信息，只能点击C按钮
    // 如果点击C按钮清除 错误信息,需要计算的算式，计算结果
    // 如果点击的=,计算算式。 如果错误显示错误提示
    // 如果点击是一般计算方法符号，在当前算术式后面累加
    if(e === "C") {
      this.setState({ evalStr: "", result: "" });
    } else if (this.state.result !== this.errorMsg) {
      if (e === "=") {
        try {
          let curResult = eval(this.state.evalStr)
          if(/^\d+(\.\d+)?$/.test(curResult)) {
            this.setState({ result: curResult });
          } else {
            this.setState({ result: this.errorMsg });
          }
        } catch (e) {
          this.setState({ result: this.errorMsg });
        }
      } else {
        this.setState({ evalStr: this.state.evalStr + e });
      }
    }
  };
  //数字按钮点击后的处理方法
  numClick = e => {
    //直接在当前算式后面累加输入的数字
    if(this.state.result !== this.errorMsg) {
      this.setState({ evalStr: this.state.evalStr + e });
    }
  };
  //手动修改算式的处理方法
  inputOnChange = e => {
    e.persist();
    //算式显示区域可以手动修改算式
    const inputValue = e.target.value;
    if(inputValue.trim() !== "" && /^[0-9*+-/=]*$/.test(inputValue)) {
      this.setState({ evalStr: inputValue });
    }
  };
  render() {
    return (
      <div className="warp">
        <input value={this.state.evalStr} onChange={this.inputOnChange} />
        <div className="result" >
          {this.state.result}
        </div>
        {/* 显示计算结果和错误提示 */}

        {/* 引入方法按钮组件 */}
        <Actions actions={funs} click={this.actionsClick}/>
        {/* 引入数字按钮组件 */}
        <Numbers numbers={buttons} click={this.numClick}/>
      </div>
    );
  }
}
export default App;
