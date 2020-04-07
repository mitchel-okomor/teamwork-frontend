import React from 'react';
import './template.css';
import { Route, Switch} from 'react-router-dom'
import Header from '../header/header';
import Navigation from '../navigation/navigation';
import Footer from '../footer/footer';
import Signup from '../signup/signup';
import Login from '../login/login';
import Home from '../home/home';
import Dashboard from '../dashboard/dashboard';

export default function Template () {
  return (
    <div className="container">
      <Header className ="header" />
<Navigation className ="navigation" />

<Switch>
<Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
</Switch>

<Footer className = "footer"/> 
    </div>
  );
}
