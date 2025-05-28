import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Header/Navbar';
import './styles/main.scss'

function App() {
  return (
    <BrowserRouter>
      
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;