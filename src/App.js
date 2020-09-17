import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "./store/actionCreators";
import "./App.css";
import Print from "./component/print/Print";
import Number from "./component/number/Number";
import Operator from "./component/operator/Operator";
import { message } from "antd";
import store from "./store";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.state.error = "请输入数字或符号进行计算";
    // this.state = {
    //   result: "0",
    //   error: "请输入数字或符号进行计算",
    // };
    store.subscribe(() => {
      this.setState(store.getState());
    });
    this.handleNumber = this.handleNumber.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
  }

  render() {
    const { evalStament, result } = this.props;

    const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

    const operator = ["+", "-", "*", "/", "c", "="];

    return (
      <div>
        <Print result={evalStament} />
        <Print result={result} error={this.state.error} />
        <div className="operator-content">
          {operator.map((item, index) => {
            return (
              <Operator
                val={item}
                key={index}
                handleOperator={this.handleOperator}
              />
            );
          })}
        </div>
        <div className="num-content">
          {number.map((item, index) => {
            return (
              <Number val={item} key={index} handleNumber={this.handleNumber} />
            );
          })}
        </div>
      </div>
    );
  }
  handleOperator(val) {
    var evalStament = this.props.evalStament;
    //归零
    if (val === "c") {
      store.dispatch(actionCreators.changeEvalAction(""));
      store.dispatch(actionCreators.changeResultAction(""));
      this.setState({
        // result: 0,
        error: "请输入数字或符号进行计算",
      });
      if (this.props.score) {
        this.props.score(0);
        return;
      }
      return;
      //计算
    } else if (val === "=") {
      if (this.props.score) {
        this.props.score(parseInt(evalStament));
      }
      try {
        this.props.changeResultAction(eval(evalStament));
        // store.dispatch(actionCreators.changeResultAction(eval(evalStament)));
        this.setState({
          // result: eval(result),
          error: "结果你算对了吗",
        });
      } catch (e) {
        this.setState({
          error: "算式格式错误",
        });
      }
      return;
    } else {
      //符号重复输入
      try {
        var arr = evalStament.split("");
        var lastKey = arr[arr.length - 1];
        console.log(arr);
      } catch (error) {
        console.log(error);
      }
      if (
        lastKey === "+" ||
        lastKey === "-" ||
        lastKey === "*" ||
        lastKey === "/" ||
        lastKey === "."
      ) {
        arr[arr.length - 1] = val;
        console.log(arr);
        evalStament = arr.join("");
        store.dispatch(actionCreators.changeEvalAction(evalStament));
        // this.setState({
        //   result: result,
        // });
        return;
      }
    }
    store.dispatch(actionCreators.changeEvalAction(evalStament + val));

    // this.setState({
    //   result: result + val,
    // });
  }
  handleNumber(val) {
    var evalStament = this.props.evalStament;
    if (evalStament === "0" || evalStament === 0) {
      // this.setState({
      //   result: val,
      // });
      store.dispatch(actionCreators.changeEvalAction(""));
      return;
      //只能存在一个小数点
    }
    //  if (result.indexOf(".") !== -1 && val === ".") {
    //   return
    // } else
    else if (evalStament.length === 9) {
      message.error("超过本计算器的计算能力");
      return;
    } else {
      this.props.changeEvalAction(evalStament + val);
      // store.dispatch(actionCreators.changeEvalAction(evalStament + val));
      // this.setState({
      //   result: result + val,
      // });
    }
  }
}

const mapStateToProps = (state) => {
  return {
    evalStament: state.eval,
    result: state.result,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeEvalAction: (data) => {
      dispatch(actionCreators.changeEvalAction(data));
    },
    changeResultAction: (data) => {
      dispatch(actionCreators.changeResultAction(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
