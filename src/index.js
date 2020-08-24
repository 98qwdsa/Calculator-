import React from 'react';//这是react
import ReactDOM from 'react-dom';//渲染用
import './cal.css';
import Cal from './cal2'

//import * as serviceWorker from './serviceWorker';/*Service workers 本质上充当Web应用程序与浏览器之间的代理服务器
//react不需要操作dom，直接操作数据


ReactDOM.render(//reactDOM做展示
    <Cal />,
    
  document.getElementById('root')
);


