import React from 'react'
import {Route, Routes, BrowserRouter } from "react-router-dom";
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Layout from './components/Layout'
import { Toaster } from "sonner";

const App = () => {
  return (
    <>
    <BrowserRouter future={{ v7_startTransition: true,v7_relativeSplatPath: true}}>

    <Toaster position='top-right'/>
    <Routes>
    <Route path="/" element={
       <Layout>
          <Home />
       </Layout>
     }/>
    <Route path="/login" element={
      <Login />
      } />
      
    <Route path="/signUp" element={
  
      <SignUp />
      }  />

    <Route path="/dashboard" element={
      <Layout>
      <Dashboard />
      </Layout>
      } />

    </Routes>

    
    </BrowserRouter>
     
    </>
  )
}

export default App