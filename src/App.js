import React from "react";
import "./App.css";

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0
    }
  }
  timer = null
  gap = 1000
  time = 0
  componentDidMount() {
    this.timer = null;
    this.timer = setInterval(() => {
      this.time += this.gap
      this.setState({
        time: this.time
      })
      console.log(this.time)
    }, this.gap)
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <>
        timer:{this.state.time}
      </>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
  }
  handelOnClick = () => {
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    return (<>
      <button onClick={this.handelOnClick}>on/off</button>
      {this.state.show && <Timer />}
    </>
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
