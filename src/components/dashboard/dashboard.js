import React from 'react';
import './dashboard.css';

import Navigation from '../navigation/navigation';
import Footer from '../footer/footer';
import Side from '../side/side';
import Main from '../main/main';

export default function dashboard () {
  

  return (
    <div className="dashboard-container">
     <div className ="navigation"> <Navigation  /></div>
      <div className = "side"><Side  /></div>
     <div className = "main"> <Main  /></div>
    <div className = "footer"><Footer /></div>  
    </div>
  );
}

