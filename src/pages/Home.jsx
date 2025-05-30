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


      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Ustozlar Section */}
      <section id="ustozlar">
        <TeachersSection />
      </section>

      {/* Partnerlar Section */}
      <section id="partnerlar">
        <PartnersSection />
      </section>

      {/* To’plamlar Section */}
      <section id="toplamlar">
        <CoursesSection />
      </section>

      {/* Bepul kurslar Section */}
      <section id="bepul-kurslar">
        <FreeCoursesSection />
      </section>

      {/* Benefits Section */}
      <section id="benefits">
        <BenefitsSection />
      </section>

      {/* Fikrlar Section */}
      <section id="fikrlar">
        <FeedbackSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <FaqSection />
      </section>

      {/* Download Section */}
      <section id="download">
        <DownloadSection />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
