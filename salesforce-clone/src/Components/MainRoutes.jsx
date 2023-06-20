import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "../Page/Signin";
import Navbar from "./Navbar";

const AllPages = () => {
  return (
    <div>
      <Routes>
  
        <Route path="/login" element={<Signin />}></Route>
      </Routes>
    </div>
  );
};

export default AllPages;
