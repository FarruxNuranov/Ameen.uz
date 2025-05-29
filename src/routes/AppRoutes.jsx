// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SingleCoursesPage from '../pages/SingleCoursesPage';


export default function AppRoutes() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/courses" element={<SingleCoursesPage />} />
    </Routes>
  );
}