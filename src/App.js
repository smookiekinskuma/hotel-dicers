import React from 'react';
import { BrowserRouter, Outlet } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';
import { AuthProvider } from './context/AuthContext';
import './App.css';
import './CSS/Home.css';
import './CSS/MobileComp.css';

function App() {
  
  return (
      <BrowserRouter>
        <AuthProvider>
          <AnimatedRoutes /> {/* <--Seperated For Motion application */}
          <Outlet/>
        </AuthProvider>        
      </BrowserRouter>
  )
}

export default App;

//If you read this, it means i made it out alive. Spent a whole hour troubleshooting routers.
//But this time, it worked frfr.
//IT BETTER WORK!!!!
// - Nicaia