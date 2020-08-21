import React from 'react'

export default class GetContent extends React.Component{  
    clickhandler=(e)=>{
        this.props.handlerContent(e.target.value)
    }
    render(){
        return(
            <div>
                <input type="button"  value="/" onClick={this.clickhandler}></input>
                <br />
                <input type="button"  value="7" onClick={this.clickhandler}></input>
                <input type="button"  value="8" onClick={this.clickhandler}></input>
                <input type="button"  value="9" onClick={this.clickhandler}></input>
                <input type="button"  value="*" onClick={this.clickhandler}></input>
                <br />
                <input type="button"  value="4" onClick={this.clickhandler}></input>
                <input type="button"  value="5" onClick={this.clickhandler}></input>
                <input type="button"  value="6" onClick={this.clickhandler}></input>
                <input type="button"  value="+" onClick={this.clickhandler}></input>
                <br />
                <input type="button"  value="1" onClick={this.clickhandler}></input>
                <input type="button"  value="2" onClick={this.clickhandler}></input>
                <input type="button"  value="3" onClick={this.clickhandler}></input>
                <input type="button"  value="-" onClick={this.clickhandler}></input>
                <br />
                <input type="button"  value="0" onClick={this.clickhandler}></input>
                <input type="button"  value="." onClick={this.clickhandler}></input>
            </div>
            
            )
    }
}