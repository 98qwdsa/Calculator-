import React from "react";
import "./App.css";
class Numbers extends React.Component {
  render(){
    return (
      <>
      <div className="number_warp">
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
      <div className="result">
        {this.props.str}
      </div>
      </>
    );
  }
}
const buttons = [
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
class Actions extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      str:this.props.str
    }
  }
  componentWillReceiveProps(nextProps){
    // this.setState({
    //   str:`+${nextProps.str}+`
    // })
  }
  render(){
    return (
      <>
      <div className="action_warp">
        {this.props.funs.map(e =>
          <button
            key={e.label}
            onClick={() => {
              this.props.click(e.label);
              this.setState({
                str:`+${e.label}+`
              })
            }}
          >
            {e.label}
          </button>
        )}
      </div>
      <div className="result">
        {this.props.str}
      </div>
      <div className="result">
        this is init by this.props.str {this.state.str}
      </div>
      </>
    );
  }
}
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
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      str: ""
    };
  }
  actionsClick = e => {
    this.setState({
      str: e
    });
  };
  numClick = e => {
    this.setState({
      str: e
    });
  };
  inputOnChange = e => {
    e.persist();
    this.setState({
      str: e.target.value
    });
  };
  render() {
    return (
      <div className="warp">
        <input value={this.state.str} onChange={this.inputOnChange} />
        <div className="result">
          {this.state.str}
        </div>
        <Actions
          str={this.state.str}
          funs={funs}
          click={this.actionsClick}
        />
        <Numbers
          str={this.state.str}
          nums={buttons}
          click={this.numClick}
        />
      </div>
    );
  }
}

export default App;
