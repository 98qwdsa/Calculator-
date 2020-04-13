import React from 'react';
import './Calculator.css';

const funs = [
    {
        label: '+'
    },
    {
        label: '-'
    },
    {
        label: '*'
    },
    {
        label: '/'
    },
    {
        label: 'C'
    },
    {
        label: '='
    }
];
function Actions(props) {
    // 无状态组件
    // 内部没有state,无法在内部修改UI
    // 依靠由父组件传入的props中的变量或全局/内部变量来显示UI
    // 应依靠由父组件传入的props中的方法与父组件沟通,修改父组件的state
    return (
        <div className="action_warp">
            {props.funs.map(e =>
                <button key={e.label} onClick={() => props.click(e.label)}>
                    {e.label}
                </button>
            )}
        </div>
    )
};

const buttons = [
    {
        label: '0'
    },
    {
        label: '1'
    },
    {
        label: '2'
    },
    {
        label: '3'
    },
    {
        label: '4'
    },
    {
        label: '5'
    },
    {
        label: '6'
    },
    {
        label: '7'
    },
    {
        label: '8'
    },
    {
        label: '9'
    },
    {
        label: '00'
    },
    {
        label: '.'
    }
];
function Numbers(props) {
    return (
        <div className="number_warp">
            {props.nums.map(e =>
                <button key={e.label} onClick={() => props.click(e.label)}>
                    {e.label}
                </button>
            )}
        </div>
    )
};

class Calculator extends React.Component {
    // 初始化数据写在class内部,则仅class内的方法可以读取和修改这些数据
    // 外部组件需要通过class提供的方法来读取和修改这些数据
    // 如果初始化数据写在class外部,则这些数据可以直接被外部的组件或方法读取和修改
    constructor(props) {
        super(props);
        this.errorMsg = props.errorMsg || '请输入正确的算术式!';
        this.state = {
            evalStr: '',
            result: ''
        };
    }
    error = '';
    // 算术方法点击事件
    actionsClick = e => {
        if ('C' === e) {
            this.error = '';
            this.setState({
                evalStr: '',
                resultL: ''
            });
            return;
        }
        if ('' === this.error) {
            if ('=' === e) {
                let result = '';
                try {
                    result = eval(this.state.evalStr);
                } catch (e) {
                    result = '';
                    this.error = this.errorMsg;
                }
                if (false === /^-?\d+(\.\d+)?$/.test(result)) {
                    console.log('error')
                    result = '';
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
        }
    };
    // 数字点击事件
    numbersClick = e => {
        if ('' === this.error) {
            this.setState({
                evalStr: this.state.evalStr + e
            });
        }
    };
    // 直接修改
    inputOnChange = e => {
        e.persist();
        this.setState({
            evalStr: e.target.value
        });
    };
    keyDown = e => {
        if (13 === e.keyCode) {
            this.actionsClick('=');
        }
    }
    render() {
        return (
            <div className="warp">
                {/* 显示计算过程 */}
                <input value={this.state.evalStr.toUpperCase()} onChange={this.inputOnChange}  onKeyDown={this.keyDown} />
                {/* 显示结果 */}
                <div className={this.error ? "result error" : "result"}>
                    {this.state.result === '' ? this.error : this.state.result}
                </div>
                {/* 算术方法组件 */}
                <Actions click={this.actionsClick} funs={funs} />
                {/* 数字组件 */}
                <Numbers click={this.numbersClick} nums={buttons} />
            </div>
        )
    }
}

export default Calculator;