// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import TeachersSection from '../components/TeachersSection/TeachersSection';
import PartnersSection from '../components/PartnersSection/PartnersSection';
import CoursesSection from '../components/CoursesSection/CoursesSection';
import FreeCoursesSection from '../components/FreeCoursesSection/FreeCoursesSection';


export default function Home() {
  return (
    <>
      <HeroSection />
      <TeachersSection />
      <PartnersSection />
      <CoursesSection />
      <FreeCoursesSection />
    </>
  );
}
