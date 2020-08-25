import React from 'react';
import './Calculator.css';
function Number(props){
    return (
        <div>
            {/* 根据props传入的数据生成按钮 */}
            {
                props.numbtn.map((item ,index) =>{
                    return <button className="btn float-left1 color-back" key ={item.label} onClick = {() =>{props.click(item.label);}}>{item.label}</button>
                }
            )}
            
        </div>
    );
}
//数字按钮初始数据
const numbtn = [
    {
        label:"0"
    },
    {
        label:"1"
    },
    {
        label:"2"
    },
    {
        label:"3"
    },
    {
        label:"4"
    },
    {
        label:"5"
    },
    {
        label:"6"
    },
    {
        label:"7"
    },
    {
        label:"8"
    },
    {
        label:"9"
    },
];

function Action(props){
    return (
        <div>
            {/* 根据props传入的数据生成按钮 */}
            {
                props.funbtn.map((item ,index) =>{
                    return <button className="btn float-left color-tomato" key ={item.label} onClick = {() =>{props.click(item.label);}}>{item.label}</button>
                }
            )}
            
        </div>
    )
}
//算术按钮初始数据
const funbtn = [
    {
        label:"+"
    },
    {
        label:"-"
    },
    {
        label:"*"
    },
    {
        label:"/"
    },
    {
        label:"AC"
    },
    {
        label:"="
    },  
];

class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.errorMsg = props.errorMsg || "请输入正确的算术式!";
        this.state={
            value:"",
            result:""
        }  
    }
    error = "";
    
    //算术方法组件处理方法
    actionClick = item =>{ 
        var e = this.error;
        var rag = /^\d+(\.\d+)?$/;
        //点击按钮AC,清除数据（错误信息、结果数据）
        if(item ==="AC"){
            this.error = "";
            this.setState({
                value:"",
                result:""
            });
            return;
        }

        if(this.error === ""){
            if(item === "="){
                let result = "";
                try{
                   // eslint-disable-next-line no-eval
                   result = eval(this.state.value);
                }catch(item){
                    this.error = this.errorMsg;
                }
                if(rag.test(result) === false){
                    result = "";
                    this.error = this.errorMsg;
                }
                this.setState({
                    result
                });
                return;
            }
            this.setState({
                value:this.state.value + item
            }); 
        } 
    };

    //数字按钮点击后的处理方法
    numClick = item =>{
        if(this.error === ""){
            this.setState({
                value:this.state.value+item
            });
        }
    };

    //手动修改算术处理方法
    inputChange = item =>{
        if (this.error === "") {
            item.persist();
            //算式显示区域可以手动修改算式
            this.setState({
              value: item.target.value
            });
          }
    };
    render(){
        return(
           <div  className = "container">
                <div>
                <input 
                className = "input"
                value = {this.state.value}
                onChange = {this.inputChange}
                />
                </div>
                <div className = "input">
                    {
                        this.state.result ===""?this.error:this.state.result
                    }
                </div>
                {/* 引入方法按钮组件 */}
                <div >
                <Action
                click = {this.actionClick} 
                funbtn = {funbtn}
                />
                
                </div>
                <div>
                {/* 引入数字按钮组件 */}
                <Number
                click = {this.numClick}
                numbtn ={numbtn}
                />
                </div>
            </div>
        )
    }

}

export default Calculator;