import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Components/Home/Home";
import Input from "../Components/Input/Input";
import About from "../Pages/About/About";

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/postLinks" element={<Input />}></Route>
      <Route exact path="/about" element={<About />}></Route>
    </Routes>
  );
};

export default Main;
