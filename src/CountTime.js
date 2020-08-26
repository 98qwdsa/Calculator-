import React from 'react'

class Timer extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        time: 0,
        stop:false,
        status:'暂停'
      }
    }
      timer=null
        gap=1000
        time=0
   componentDidMount(){
       
   this.plusTime();
   }
plusTime=()=>{
    this.timer = null;
    this.timer = setInterval(() => {
      this.time += this.gap
      
      this.setState({
        time: this.time
      })
      console.log(this.time)
    }, this.gap)
}

    handleButton(){
        const stop=!this.state.stop
        this.setState({
            stop:stop,
            status:stop?"开始":"暂停"
        })
        if(stop){
            clearInterval(this.timer)
        }
        else{
        this.plusTime()
        }
    }
 clearTime(){
        this.setState({
            time:0
        })
        this.time=0;
        clearInterval(this.timer)
    }
    render(){
return (
    <div>
      
      <button onClick={this.handleButton.bind(this)}>{this.state.status}</button>
      <button onClick={this.clearTime.bind(this)}>复位</button>
      
        timer:{this.state.time}
        </div>
);
    }
}
export default Timer;