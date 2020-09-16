import React from "react";
import "./Calculator.scss";
import store from './store/index';
import * as constants from './store/constants';
//如果能确定其他地方会使用该组件可以申明为一个 class 然后export出去
export class Numbers extends React.Component {
  render() {
    return (
      <div className="number_warp">
        {/* 根据props传入的数据生成按钮 */}
        {this.props.nums.map(e =>
          <button
            key={e.label}
            onClick={() => {
              this.props.click(e.label);
            }}
          >
            {e.label}
          </button>
        )}
      </div>
    );
  }
}
export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.errorMsg = props.errorMsg || "请输入正确的算术式!";
    this.state=store.getState();//从store中获取state
    store.subscribe(this.storeChange) //订阅Redux的状态
  }
  storeChange=()=>{
    this.setState(store.getState())
  }
  // 组件内部的数据最好初始化在改class属性上
  error = "";
  //定义计算按钮的初始数据
  nums = [
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
  // 定义算术方法的 初始数据
  funs = [
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
  // 内部的无状态组件方法推荐使用UI前缀区分一下
  UIActions(props) {
    return (
      <div className="action_warp">
        {/* 根据props传入的数据生成按钮 */}
        {props.funs.map(e =>
          <button
            key={e.label}
            onClick={() => {
              props.click(e.label);
            }}
          >
            {e.label}
          </button>
        )}
      </div>
    );
  }
  //算式方法组件点击后处理方法
  actionsClick = e => {
    // 如果有错误信息，只能点击C按钮
    // 如果点击C按钮清除 错误信息,算式，计算结果
    let evalStr, result;
    if ("C" === e) {
      this.error = "";
      evalStr = "";
      result = "";
    } else {
      if ("" !== this.error) {
        return;
      }
      // 如果点击的=,计算算式。 如果错误显示错误提示
      if ("=" === e) {
        try {
          result = eval(this.state.evalStr);
        } catch (e) {
          result = "";
          this.error = this.errorMsg;
        }
        if (false === /^\d+(\.\d+)?$/.test(result)) {
          result = "";
          this.error = this.errorMsg;
        }
      } else {
        // 如果点击是一般计算方法符号，在当前算术式后面累加
        evalStr = this.state.evalStr + e;
      }
    }
    const action={
      type:constants.CLICK_FUNCS,
      evalStr,
      result
    }
    store.dispatch(action);
  };
  //数字按钮点击后的处理方法
  numClick = e => {
    if ("" === this.error) {
      //直接在当前算式后面累加输入的数字
      const action={
        type:constants.CLICK_NUMS,
        value:this.state.evalStr+e
      }
      store.dispatch(action);
    }
  };
  //手动修改算式的处理方法
  inputOnChange = e => {
    if ("" === this.error) {
      e.persist();
      const action={
        type:constants.CHANGE_INPUT,
        value:e.target.value
      }
      store.dispatch(action);
    }
  };
  render() {
    return (
      <div className="warp">
        <input value={this.state.evalStr} onChange={this.inputOnChange} />
        {/* 显示计算结果和错误提示 */}
        <div className={this.error ? "result error" : "result"}>
          {this.state.result === "" ? this.error : this.state.result}
        </div>

        {/* 引入方法按钮组件 */}
        <this.UIActions click={this.actionsClick} funs={this.funs} />

        {/* 引入数字按钮组件 */}
        <Numbers click={this.numClick} nums={this.nums} />
      </div>
    );
  }
}