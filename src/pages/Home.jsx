// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import TeachersSection from '../components/TeachersSection/TeachersSection';
import PartnersSection from '../components/PartnersSection/PartnersSection';
import CoursesSection from '../components/CoursesSection/CoursesSection';
import FreeCoursesSection from '../components/FreeCoursesSection/FreeCoursesSection';
import Navbar from '../components/Header/Navbar';
import FeedbackSection from '../components/FeedbackSection/FeedbackSection';
import ContactSection from '../components/ContactSection/ContactSection';
import FaqSection from '../components/FaqSection/FaqSection';
import DownloadSection from '../components/DownloadSection/DownloadSection';
import Footer from '../components/Footer/Footer';


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TeachersSection />
      <PartnersSection />
      <CoursesSection />
      <FreeCoursesSection />
      <FeedbackSection/>
      <ContactSection/>
      <FaqSection/>
      <DownloadSection/>
      <Footer/>
    </>
  );
}
