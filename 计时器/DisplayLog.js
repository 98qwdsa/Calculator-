import React from 'react';
import formateTime from './formateTime'
export default  class DisplayLog extends React.Component {

    renderEmpty = ()=>{
        return <span >点击记录——记录数值</span>;
    }

    renderLog = ()=>{
        return this.props.log.map((item,i) => {
            return <li >{item}</li>
        });
    }

    render() {

        const log = this.props.log.length === 0 ? this.renderEmpty() : this.renderLog();

        return <ul>
            {log}
        </ul>
    }
}