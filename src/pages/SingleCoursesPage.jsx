// src/pages/SingleCoursesPage.jsx
import React from 'react';
import HrNavbar from '../components/Header/SingleHrNavbar/HrNavbar';
import HRCourseSection from '../components/HRCourseSection/HRCourseSection';
import FreeTrialSection from '../components/FreeTrialSection/FreeTrialSection';
import CourseOverviewSection from '../components/CourseOverviewSection/CourseOverviewSection';
import CourseCurriculumSection from '../components/CourseCurriculumSection/CourseCurriculumSection';

import PartnersSection from '../components/PartnersSection/PartnersSection';
import PricingSection from '../components/PricingSection/PricingSection';
import FeedbackSection from '../components/FeedbackSection/FeedbackSection';
import DownloadSection from '../components/DownloadSection/DownloadSection';
import Footer from '../components/Footer/Footer';
import TeacherHR from '../components/TeacherHR/TeacherHR';

export default function SingleCoursesPage() {
  return (
    <>
      {/* Навигация по единственному курсу */}
      <section id="navbarHR">

      <HrNavbar />
      </section>


      {/* Детали курса */}
      
      <section id="course-details">
        <HRCourseSection />
      </section>

      {/* Бесплатный пробный урок */}
      <section id="free-trial">
        <FreeTrialSection />
      </section>

      {/* Обзор курса */}
      <section id="overview">
        <CourseOverviewSection />
      </section>

      {/* Учебная программа */}
      <section id="curriculum">
        <CourseCurriculumSection />
      </section>

      {/* Преподаватели */}
      <section id="teachers">
        <TeacherHR />
      </section>

      {/* Партнёры */}
      <section id="partners">
        <PartnersSection />
      </section>

      {/* Стоимость */}
      <section id="pricing">
        <PricingSection />
      </section>

      {/* Отзывы */}
      <section id="feedback">
        <FeedbackSection />
      </section>

      {/* Скачивание материалов */}
      {/* <section id="download">
        <DownloadSection />
      </section> */}

      {/* Футер */}
      <Footer />
    </>
  );
}
