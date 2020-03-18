import React, { Component } from 'react';
import './navigation.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


export default class Navigation extends Component {
  render() {
let isLoggedIn = false;
const fName = "";
const role = "";
    if (isLoggedIn){
      return (
        <div className="navigation">
  
  <div><Link to="/">Home</Link> </div>
           <ul className="nav-list">
  
  <li><a href="" >{fName}</a></li>
  <li><a href="" >{role}</a></li>
  <li><a href="" >Logout</a></li>
  
  
           </ul>
        </div>
      )
    }
    return (
      <div className="navigation">

  <div><Link to="/">Home</Link> </div>
         <ul className="nav-list">

<li><Link to="/signup">Signup</Link></li>

<li><Link to="/login">Login</Link></li>
         </ul>
      </div>
    )
  }
}
