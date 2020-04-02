import React, { Component } from 'react';
import './navigation.css';
import { Link} from 'react-router-dom'
import isLoggedIn from '../../helpers/checkLoggin';

export default class Navigation extends Component {

  constructor() {
    super()

    this.state = {
      loggedIn: false
    }
  }

componentWillMount(){
  console.log("Nav isLoggin:" +isLoggedIn());
  if(isLoggedIn()){
    this.setState({
      loggedIn:true
    })
  }
}

  render() {

    if (this.state.loggedIn){
      return (
        <nav className="navigation">
  
  <div><Link className="home-link" to="/">Home</Link> </div>
           <ul className="nav-list">
  
           <li><Link to="/profile">My Account</Link></li>
           <li><Link to="/logout">Logout</Link></li>
  
  
           </ul>
        </nav>
      )
    }

    else{
      
    return (
      <nav className="navigation">

  <div><Link to="/">Home</Link> </div>
  
         <ul className="nav-list">

<li><Link to="/signup">Signup</Link></li>

<li><Link to="/login">Login</Link></li>
         </ul>
      </nav>
    )
  }
    }
}
