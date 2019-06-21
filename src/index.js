import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 1 引入 store 
import store from "./store";
// 2 引入  redux 和 react 的连接工具
// Provider 提供者 是一个组件  
import { Provider } from "react-redux";

// 3 修改 App的结构
ReactDOM.render( <Provider  store={store} > <App/></Provider>  , document.getElementById('root'));

