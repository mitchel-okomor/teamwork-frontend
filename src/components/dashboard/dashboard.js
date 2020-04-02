import React from 'react';
import './dashboard.css';
//import { Route, Switch} from 'react-router-dom'
import Navigation from '../navigation/navigation';
import Footer from '../footer/footer';
//import Side from '../side/side';
import Main from '../main/main';
// import Signup from '../signup/signup';
// import Login from '../login/login';
// import Home from '../home/home';
// import isLoggedIn from '../../helpers/checkLoggin';
import withAuth from '../../services/withAuth';


class dashboard extends React.Component {
  constructor(props){
super(props)
this.state ={
  isLoading : true
}
// this.pageToRender = this.pageToRender.bind(this);
  }


  
//  pageToRender = () =>{
//    console.log(isLoggedIn());
//    if (isLoggedIn()){
//      this.setState = {
//        isLoading : false 
//      }
//     return <Route exact path="/" component={Main} />
//    }
//   return  <Route exact path="/" component={Home} />
// } 


render(){
  return ( <div className="container">
      <Navigation className ="navigation" />
    <Main className = "main" />
    <Footer className = "footer" /> 
    </div>
  );
}

}

export default withAuth(dashboard) ;