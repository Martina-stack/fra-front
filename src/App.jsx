// src/App.jsx
import React from "react";
import ReactDOM from 'react-dom/client'
import MainPage from "./MainPage";
import GovernmentDashboard from "./GovernmentDashboard";
import "./GovernmentDashboard.css";   // dashboard styles

function App() {
  return (
    <div>
      {/* Main page content */}
      <MainPage />

      {/* Government dashboard right below (or wherever you like) */}
      <GovernmentDashboard />
    </div>
  );
}
export default App;
