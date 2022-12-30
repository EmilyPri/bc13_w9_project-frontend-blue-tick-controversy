import React from "react";
import { Routes, Route } from "react-router-dom";

import App from "../Components/App/App";
import Input from "../Components/Input/Input";

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<App />}></Route>
      <Route exact path="/postLinks" element={<Input />}></Route>
    </Routes>
  );
};

export default Main;
