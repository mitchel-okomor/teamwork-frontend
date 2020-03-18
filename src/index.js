import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom'
import './index.css';
import Template from './components/template/template';
import Dashboard from './components/dashboard/dashboard';
import { Provider } from "react-redux";
import store from "./state/store/index";


const isLoggedIn = false;
let routing;

const pageToRender = () =>{

if(isLoggedIn){
    routing = 
    (
       <Provider store={store}>
       <BrowserRouter>
       <Dashboard />
       </BrowserRouter>
       </Provider>
         )   
}
else{
 routing = 
 ( <Provider store={store}>
    <BrowserRouter>
    <Template />
    </BrowserRouter>
    </Provider>
      )   
}
}

pageToRender();
    
   
ReactDOM.render(routing, document.getElementById('root'));
