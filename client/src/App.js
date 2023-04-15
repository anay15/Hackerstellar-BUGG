import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/navbar';
import { useDispatch, useSelector } from 'react-redux';
import { authLogin } from './reducers/authReducer';
import { useEffect } from 'react';
import { Navigate } from "react-router-dom";
import Investment from './pages/Investment';

function App() {
  const logged_in=useSelector((state)=>state.auth.login);
  const dispatch=useDispatch()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
    
      dispatch(authLogin(JSON.parse(loggedInUser)))
    }
  }, []);

  
  return (
    <div className="App">
    <Navbar/>
    <BrowserRouter>
      <div style={{marginTop:'0%'}}>
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />

          <Route 
            path="/investments" 
            element={<Investment />} 
          />

          {!logged_in?
           <Route 
            path="/login" 
            element={<Login />} 
          />
          :
          <></>}

          
         
        </Routes>
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;
