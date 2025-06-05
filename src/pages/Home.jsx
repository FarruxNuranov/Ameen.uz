// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Header/HomeNavbar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import TeachersSection from '../components/TeachersSection/TeachersSection';
import PartnersSection from '../components/PartnersSection/PartnersSection';
import CoursesSection from '../components/CoursesSection/CoursesSection';
import FreeCoursesSection from '../components/FreeCoursesSection/FreeCoursesSection';
import BenefitsSection from '../components/BenefitsSection/BenefitsSection';
import FeedbackSection from '../components/FeedbackSection/FeedbackSection';
import ContactSection from '../components/ContactSection/ContactSection';
import FaqSection from '../components/FaqSection/FaqSection';
import DownloadSection from '../components/DownloadSection/DownloadSection';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      {/* Навигация */}
      <section id="navbar">
        <Navbar />
      </section>



      <section id="hero">
        <HeroSection />
      </section>

      
      <section id="ustozlar">
        <TeachersSection />
      </section>

   
      <section id="partnerlar">
        <PartnersSection />
      </section>

    
      <section id="toplamlar">
        <CoursesSection />
      </section>

     
      <section id="bepul-kurslar">
        <FreeCoursesSection />
      </section>

    
      <section id="benefits">
        <BenefitsSection />
      </section>

      
      <section id="fikrlar">
        <FeedbackSection />
      </section>

     
      <section id="contact">
        <ContactSection />
      </section>

     
      <section id="faq">
        <FaqSection />
      </section>

     
      {/* <section id="download">
        <DownloadSection />
      </section> */}

     
      <Footer />
    </>
  );
}
