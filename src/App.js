import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import LoginButton from './LoginButton';
import { useAuth0 } from "@auth0/auth0-react";

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
