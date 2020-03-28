
import React from "react";
import "./App.css";
function Numbers(props) {
  return (
    <div className="number_warp">
     {props.nums.map(e =>
        <button key={e.label}>
          {e.label}
        </button>
     )}
    </div>
  );
}
//定义计算按钮的初始数据
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
function Actions(props) {
  return (
    <div className="action_warp">
      {props.funs.map(e =>
          <button key={e.label}>
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
class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="warp">
        <input />
        <div className="result" />
        <Actions funs={funs}/>
        <Numbers nums={buttons}/>
      </div>
    );
  }
}
export default App;
