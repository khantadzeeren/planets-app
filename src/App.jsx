import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import info from "./data.json";
import Page from "./Page";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/planet/Earth"/>} />
        <Route path="/planet/:name" element={<Page />} />
      </Routes>
    </div>
  );
}

export default App;
