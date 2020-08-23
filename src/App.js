import React from "react";
import "./App.css";
class ParentComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      str: 0
    }
  }
  handelOnchange = (e) => {
    e.persist()
    console.log(e)
    this.setState({
      str: e.target.value
    })
  }
  render() {
    return (
      <div>
        ParentComponent<br />
        <input onChange={this.handelOnchange} value={this.state.str} />
        <hr />
        <ChildrenComponent str={this.state.str} />
      </div>)
  }
}
class ChildrenComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      str: props.str
    }
  }
  render() {
    return (
      <div>
        ChildrenComponent<br />
        {this.state.str}
      </div>)
  }
}
class App extends React.Component {
  render() {
    return (
      <ParentComponent />
    );
  }
}

export default App;
