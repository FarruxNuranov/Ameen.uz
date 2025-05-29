import React from 'react'
import Navbar from '../components/Header/Navbar'
import Footer from '../components/Footer/Footer'
import DownloadSection from '../components/DownloadSection/DownloadSection'
import FeedbackSection from '../components/FeedbackSection/FeedbackSection'
import HRCourseSection from '../components/HRCourseSection/HRCourseSection'
import FreeTrialSection from '../components/FreeTrialSection/FreeTrialSection'
import CourseOverviewSection from '../components/CourseOverviewSection/CourseOverviewSection'
import CourseCurriculumSection from '../components/CourseCurriculumSection/CourseCurriculumSection'

const SingleCoursesPage = () => {
  return (
    <>
    <Navbar/>
    <HRCourseSection/>
    <FreeTrialSection/>
    <CourseOverviewSection/>
    <CourseCurriculumSection/>
    <FeedbackSection/>
    <DownloadSection/>
    <Footer/>
    </>
  )
}

export default SingleCoursesPage