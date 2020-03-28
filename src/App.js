import React from "react";
import "./App.css";
function PWDstrength(str) {
    if (str.length > 8) {
        return "Strong";
    }
    if (str.length > 4) {
        return "medium";
    }
    if (str.length <= 4) {
        return "weak";
    }
}
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            pwd: ""
        };
    }
    onSubmit(e) {
        e.persist();
        console.log(this.state);
    }
    onChange = e => {
        e.persist();
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    render() {
        return (
            <div className="warp">
                <label>
                    name:<input
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                />
                </label>
                <label>
                    pwd:<input
                    name="pwd"
                    value={this.state.pwd}
                    onChange={this.onChange}
                />
                </label>
                <p>
                    {this.state.pwd && `密码强度:${PWDstrength(this.state.pwd)}`}
                </p>
                <button onClick={this.onSubmit}>submit</button>
            </div>
        );
    }
}

export default App;
