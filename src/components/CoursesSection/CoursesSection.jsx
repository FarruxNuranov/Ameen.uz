// src/components/CoursesSection/CoursesSection.jsx

import React from 'react';
import styles from './CoursesSection.module.scss';
import { Courses1, Courses2, } from '../../utils/getImage';
import { Link } from 'react-router-dom';

const courses = [
  {
    title: 'HR Kurs To‘plam',
    image: Courses1,
    link: '/courses',
  },
  {
    title: 'Islom Moliya Kurs To‘plam',
    image: Courses2,
    link: '',
  },
  // Если нужно добавить ещё карточек, просто добавьте сюда ещё объект(ы)
];

export default function CoursesSection() {
  return (
    <section className={styles.section}>
      {/* Глобальный контейнер */}
      <div className="container">
        <div className={styles.navbox}>
        <div className={styles.customNav}>
        <button className={styles.prevBtn}>←</button>
        <button className={styles.nextBtn}>→</button>
        
         </div>
        </div>
      
        <div className={styles.wrapper}>
          {/* ===== Левая «Инфо–карта» ===== */}
          <div className={styles.infoCard}>
            <p className={styles.label}>TO‘PLAMLAR</p>
            <h2 className={styles.title}>Kurslar to‘plamlari</h2>
            <p className={styles.desc}>
              To‘plamlar orqali bir yo‘nalishdagi kursni to‘liq va mukammal holatda o‘rganing
            </p>
          </div>

          {/* ===== Ряд статичных карточек курсов ===== */}
          <div className={styles.coursesRow}>
            {courses.map((course, index) => {
              const isClickable = course.link && course.link.trim() !== '';
              const content = (
                <>
                  <img src={course.image} alt={course.title} />
                  <div className={styles.courseTitle}>{course.title}</div>
                </>
              );

              return (
                <React.Fragment key={index}>
                  {isClickable ? (
                    <Link to={course.link} target="_blank" className={styles.courseCard}>
                      {content}
                    </Link>
                  ) : (
                    <div className={styles.courseCard}>{content}</div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
