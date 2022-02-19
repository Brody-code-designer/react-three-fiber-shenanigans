import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Canvas01 } from "./playground/canvas/Canvas01-ReUsingMesh";
import { Canvas02 } from "./playground/canvas/Canvas02-Instancing";
import { Canvas03 } from "./playground/canvas/Canvas-03-Suspense";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Canvas01" element={<Canvas01 />} />
      <Route path="/Canvas02" element={<Canvas02 />} />
      <Route path="/Canvas03" element={<Canvas03 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);



