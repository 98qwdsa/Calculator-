import React from 'react';

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
            inputValue:'',
            list:[]
           }
           this.handleInputChange = this.handleInputChange.bind(this);
    }
handleInputChange(e){
  this.setState({inputValue:e.target.value})
}
render(){
return (
<div>
    <div>
        
        <div><input onChange={this.handleInputChange.bind(this)}/>
        <button>add</button>
        </div>
        </div>
        </div>);
}
}
export default TodoList;