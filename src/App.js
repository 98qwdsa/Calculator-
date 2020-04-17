import React from "react";
import "./App.css";
function Numbers(props) {
  return (
      <div className="number_warp">
        {props.numbers.map(e =>
            <button key={e.label} onClick={
              () =>{props.click(e.label);
              }}>
              {e.label}
            </button>
        )}
        {/* 根据props传入的数据生成按钮 */}
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
        {/* 根据props传入的数据生成按钮 */}
        {props.funs.map(e =>
            <button key={e.label} onClick={
              () =>{props.click(e.label);
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
  },
  {
    label: "←"
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
  error = "";
  //算式方法组件点击后处理方法
  actionsClick = e => {
    // 如果有错误信息，只能点击C按钮
    if (e === "C") {
      this.error = "";
      this.setState({
        evalStr: "",
        result: ""
      });
      return;
    }
    if (this.error === "") {
      // 如果点击的=,计算算式。 如果错误显示错误提示
      if (e === "=") {
        let result = "";
        try {
          result = eval(this.state.evalStr)
        } catch (e) {
          result = "";
          this.error = this.errorMsg;
        }
        this.setState({
          result
        });
        return;
      }
      //如果点击的是←，删除之前的一位，希望解答一下这
      if (e === "←") {
        let display = this.state.evalStr;
        if (display.length > 1){
          try {
            display = display.substring(0,display.length-1)
          } catch (e) {
            display = "";
            this.error = this.errorMsg;
          }
          this.setState({
            evalStr: display
          });
          return;
        } else {
          this.setState({
            evalStr: "",
            result: ""
          });
          return;
        }
      }
      // 如果点击是一般计算方法符号，在当前算术式后面累加
      this.setState({
        evalStr: this.state.evalStr + e
      });
    }
  };
  //数字按钮点击后的处理方法
  numClick = e => {
    //直接在当前算式后面累加输入的数字
    if (this.error === "") {
      this.setState({
        evalStr: this.state.evalStr + e
      });
    }
  };
  //手动修改算式的处理方法,我觉得不是很需要
  inputOnChange = e => {
    e.persist();
    //算式显示区域可以手动修改算式
  };
  render() {
    return (
        <div className="warp">
          <input value={this.state.evalStr} readOnly={this.state.evalStr} />
          {/* 显示计算结果和错误提示 */}
          <div className ="result">
            {this.state.result === "" ? this.error : this.state.result}
          </div>
          {/* 引入方法按钮组件 */}
          <Actions click = {this.actionsClick} funs ={funs}/>
          {/* 引入数字按钮组件 */}
          <Numbers click = {this.numClick} numbers = {buttons} />
        </div>
    );
  }
}
export default App;

// 关于无状态组件和初始化数据写在class内部和外部的区别
// 答：首先 无状态组件在Class内外部的区别是：放在外部拥有更好的性能，没有state，但是不能操作生命周期
// 初始化数据在Class内外部的区别是：应该和上述组件类似
