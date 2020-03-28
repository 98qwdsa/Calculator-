import React from "react";
import "./Calculator.css";
function Numbers(props) {
    return (
        <div className="number_warp">
            {/* 根据props传入的数据生成按钮 */}
            {props.nums.map(e =>
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
//定义计算按钮的初始数据
const nums = [
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
class Calculator extends React.Component {
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
        // 如果点击C按钮清除 错误信息,算式，计算结果
        if ("C" === e) {
            this.error = "";
            this.setState({
                evalStr: "",
                result: ""
            });
            return;
        }
        if ("" === this.error) {
            // 如果点击的=,计算算式。 如果错误显示错误提示
            if ("=" === e) {
                let result = "";
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
                this.setState({
                    result
                });
                return;
            }

            this.setState({
                evalStr: this.state.evalStr + e
            });
            // 如果点击是一般计算方法符号，在当前算术式后面累加
        }
    };
    //数字按钮点击后的处理方法
    numClick = e => {
        if ("" === this.error) {
            //直接在当前算式后面累加输入的数字
            this.setState({
                evalStr: this.state.evalStr + e
            });
        }
    };
    //手动修改算式的处理方法
    inputOnChange = e => {
        if ("" === this.error) {
            e.persist();
            //算式显示区域可以手动修改算式
            this.setState({
                evalStr: e.target.value
            });
        }
    };
    render() {
        return (
            <div className="warp">
                <input
                    value={this.state.evalStr.toUpperCase()}
                    onChange={this.inputOnChange}
                />
                {/* 显示计算结果和错误提示 */}
                <div className={this.error ? "result error" : "result"}>
                    {this.state.result === "" ? this.error : this.state.result}
                </div>

                {/* 引入方法按钮组件 */}
                <Actions click={this.actionsClick} funs={funs} />

                {/* 引入数字按钮组件 */}
                <Numbers click={this.numClick} nums={nums} />
            </div>
        );
    }
}

export default Calculator;
