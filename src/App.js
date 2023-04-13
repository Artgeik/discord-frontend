import React from 'react';
import './App.css';
import { Routes,Route, Navigate, } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import LoginPage from './authPages/LoginPage/LoginPage';
import RegisterPage from './authPages/RegisterPage/RegisterPage';
import AlertNotification from './shared/components/AlertNotification';

function App() {
  return (
    <>
    <Routes>
      <Route exact path='/login' element={<LoginPage/>}/>
      <Route exact path='/register' element={<RegisterPage/>}/>
      <Route exact path='/dashboard' element={<Dashboard/>}/>
      <Route path='*'  element={<Navigate to='/dashboard'/>}/>
    </Routes>
    <AlertNotification/>
    </>
  );
}

export default App;
