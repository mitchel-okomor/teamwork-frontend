import history from '../services/history';


 const logout = ()=>{
  
    localStorage.removeItem('token');
console.log("logged out successfully");
window.location.reload(); 
history.push('/')
};


export default logout;