import React from 'react'
import Navbar from '../components/Header/HomeNavbar/Navbar'
import Footer from '../components/Footer/Footer'
import DownloadSection from '../components/DownloadSection/DownloadSection'
import FeedbackSection from '../components/FeedbackSection/FeedbackSection'
import PartnersSection from '../components/PartnersSection/PartnersSection';
import HRCourseSection from '../components/HRCourseSection/HRCourseSection'
import FreeTrialSection from '../components/FreeTrialSection/FreeTrialSection'
import CourseOverviewSection from '../components/CourseOverviewSection/CourseOverviewSection'

import TeachersSection from '../components/TeachersSection/TeachersSection'
import PricingSection from '../components/PricingSection/PricingSection'
import HrNavbar from '../components/Header/SingleHrNavbar/HrNavbar'

const SingleCoursesPage = () => {
  return (
    <>
      <HrNavbar />
      <HRCourseSection />
      <FreeTrialSection />
      <CourseOverviewSection />
      <TeachersSection />
      <PartnersSection />
      <PricingSection />
      <FeedbackSection />
      <DownloadSection />
      <Footer />
    </>
  )
}

export default SingleCoursesPage