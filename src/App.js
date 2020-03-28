import React from "react";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  onSubmit(e) {
    e.persist();
    console.log(e.target.name.value,e.target.pwd.value);
    e.preventDefault();
  }
  render() {
    return (
        <form className="warp" onSubmit={this.onSubmit}>
          <label>
            name:<input name="name" />
          </label>
          <label>
            pwd:<input name="pwd" />
          </label>
          <button type="submit" value="Submit">
            submit
          </button>
        </form>
    );
  }
}

export default App;
