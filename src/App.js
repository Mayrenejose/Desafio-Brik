import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Beginning }  from './components/Beginning';
import { Register } from './components/Register';
import { Users } from "./components/Users";

export const AppRouter = () => {
  
  
    return (
        <BrowserRouter>
        <div>   
        
          <Routes>
          <Route path="/" element={<Beginning />}/>
          <Route path="/register" exact element={<Register />}/>
          <Route path="/users" exact element={<Users />}/>
          </Routes>
        </div>
      </BrowserRouter> 
    )
}