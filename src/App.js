import React from "react";
import ReactDOM from 'react-dom';
import "./App.css";
class ReactElement extends React.Component {
  render() {
    return (
      <div>
        ReactElement
      </div>)
  }
}

class FragmentElement extends React.Component {
  render() {
    return (
      <>
        <span>FragmentElement</span>
        <span>FragmentElement</span>
        <span>FragmentElement</span>
      </>)
  }
}


class ArrayStringNumberElement extends React.Component {
  render() {
    return [<span>ArrayStringNumberElement</span>, 'string', 123123123]
  }
}

class PortalElement extends React.Component {
  render() {
    return ReactDOM.createPortal(<div>PortalElement:<ReactElement /></div>, document.querySelector('html'))
  }
}

class BooleanElement extends React.Component {
  render() {
    return false
  }
}

class NullElement extends React.Component {
  render() {
    return null
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
      <>
        <ReactElement />
        <hr />
        <FragmentElement />
        <hr />
        <ArrayStringNumberElement />
        <hr />
        <PortalElement />
        <hr />
        <BooleanElement />
        <hr />
        <NullElement />
      </>
    );
  }
}

export default App;
