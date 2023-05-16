import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import LoginForm from './components/LoginForm';
import Dashboard2 from './components/Dashboard2'
import Dashboard3 from './components/Dashboard3'
import LoginButton from './LoginButton';
import { useAuth0 } from "@auth0/auth0-react";
import Dashboard from './Dashboard';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <div className="App-header">
        <BrowserRouter>
          <Routes>
            <Route exact path="/login" element={<LoginForm />} />
            <Route exact path="/" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      
      {/*<LoginButton />*/}
      </div>
    </>
  );
}

export default App;
