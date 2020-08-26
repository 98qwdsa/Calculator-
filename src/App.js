import React from "react";
class Timer extends React.Component{
  constructor(props){
    super(props);
    this.pushStart=this.pushStart.bind(this);
    this.pushStop=this.pushStop.bind(this);
    this.pushRestart=this.pushRestart.bind(this)

  }
  //调用父类的方法
  pushStart(){
    this.props.clickStart();
  }
  pushStop(){
    this.props.clickStop();
  }
  pushRestart(){
    this.props.clickRestart()
  }
  

  render(){
    return(
      <>
      <h1>{this.props.currentTime}</h1>
      <button onClick={this.pushStart}>start</button>
      <button onClick={this.pushStop}>stop</button>
      <button onClick={this.pushRestart}>restart(twice)</button>   
    </>
    )
  }
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time:0,
      count:true
    }
  }
   
  timer=null;
  gap=1000;

  
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate")
    return this.state.count;
  }

  //页面加载完自动计数
  componentDidMount(){
    console.log("componentDidMount")
    this.handlerStart();
  }

  //处理Start键
  handlerStart=()=>{
    this.setState({
      count:true
    })
     this.timer=setInterval(()=>{
        this.setState({
          time:this.state.time+this.gap
        })
      },this.gap)
      
  }

  //处理Stop键
  handlerStop=()=>{
    clearInterval(this.timer);
    this.setState({
      count:false
    })
  }

  //计数归零
  handlerReStart=()=>{
    this.setState({
      count:true,//true的状态下才能将计数归零
      time:0
    })
  }
  render() {
    return (
    
      <Timer 
        currentTime={this.state.time} 
        clickStart={this.handlerStart} 
        clickStop={this.handlerStop} 
        clickRestart={this.handlerReStart}
      />
    )
  }
}

export default App;


/**
 *
 * 如何开关后继续计数
 *
 *
*/
