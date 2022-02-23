import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Canvas01 } from "./playground/canvas/Canvas01-ReUsingMesh";
import { Canvas02 } from "./playground/canvas/Canvas02-Instancing";
import { Canvas03 } from "./playground/canvas/Canvas03-Suspense";
import { Canvas04 } from "./playground/canvas/Canvas04-gui";
import { Canvas05 } from "./playground/canvas/Canvas05-DREI-Helpers";
import { Canvas06 } from "./playground/canvas/Canvas06-CameraAnimate";
import { Canvas07 } from "./playground/canvas/Canvas07-PointerLockControls";
import { Canvas08 } from "./playground/vr-canvas/Canvas08-VR";
import { Canvas09 } from "./playground/canvas/Canvas09-ImportModels";
import { Canvas10 } from "./playground/canvas/Canvas10-Textures";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Canvas01" element={<Canvas01 />} />
      <Route path="/Canvas02" element={<Canvas02 />} />
      <Route path="/Canvas03" element={<Canvas03 />} />
      <Route path="/Canvas04" element={<Canvas04 />} />
      <Route path="/Canvas05" element={<Canvas05 />} />
      <Route path="/Canvas06" element={<Canvas06 />} />
      <Route path="/Canvas07" element={<Canvas07 />} />
      <Route path="/Canvas08" element={<Canvas08 />} />
      <Route path="/Canvas09" element={<Canvas09 />} />
      <Route path="/Canvas10" element={<Canvas10 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);



