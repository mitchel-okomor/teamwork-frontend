import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch} from 'react-router-dom'
import history from './services/history';
import './index.css';
import App from './app';
//import Dashboard from './components/dashboard/dashboard';
//import Template from './components/template/template';
import { Provider } from "react-redux";
import store from "./state/store/index";
//import isLoggedIn from "./helpers/checkLoggin";


 let routing = 
    (
       <Provider store={store}>
       <Router history = {history}>
         <App />
       </Router>
       </Provider>
         ) 

   
ReactDOM.render(routing, document.getElementById('root'));
