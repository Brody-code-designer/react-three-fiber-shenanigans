import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CameraLookAt } from "./playground/cameras/CameraLookAt";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cameraLookAt" element={<CameraLookAt />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);



