import React, {Component} from 'react';
import Dashboard from './components/dashboard/dashboard';
import Template from './components/template/template';
import isLoggedIn from './helpers/checkLoggin';


class App extends Component {
 
    constructor() {
        super()
    
        this.state = {
          loggedIn: false
        }
      }
    
    componentWillMount(){
      console.log("App isLoggin:" +isLoggedIn());
      if(isLoggedIn()){
        this.setState({
          loggedIn:true
        })
      }
    }
    

 render(){
     if(this.state.loggedIn){  
         return (
    <div>
 <Dashboard />
    </div>
  ); 
 }
   
else{
    return (
        <div>
     <Template />
        </div>
      ); 
     }
       
}

}

export default App
