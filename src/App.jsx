// src/App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";

import "./styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Toaster  toastOptions={{
    success: {
      style: {
        fontSize: '20px',
        padding: '16px 24px',
        borderRadius: '10px',
        background: '#4caf50',
        color: '#fff',
      },
    },
    error: {
      style: {
        fontSize: '20px',
        padding: '16px 24px',
        borderRadius: '10px',
        background: '#f44336',
        color: '#fff',
      },
    },
  }} position="top-right" reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App;
