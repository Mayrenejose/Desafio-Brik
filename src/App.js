import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Beginning }  from './component/Beginning';
import { Register } from './component/Register';
import { Users } from "./component/Users";

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