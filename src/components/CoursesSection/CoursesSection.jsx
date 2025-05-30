// src/components/CoursesSection/CoursesSection.jsx
import React from 'react';
import styles from './CoursesSection.module.scss';
import { Courses1, Courses2 } from '../../utils/getImage';
import { Link } from 'react-router-dom';

const courses = [
  {
    title: 'HR Kurs To‘plam',
    image: Courses1,
    link: '/courses',       // допустим, эта ссылка есть
  },
  {
    title: 'Islom Moliya Kurs To‘plam',
    image: Courses2,
    link: '',                  // ссылки нет — рендерим без перехода
  },
];

export default function CoursesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.infoCard}>
          <p className={styles.label}>TO‘PLAMLAR</p>
          <h2 className={styles.title}>Kurslar to‘plamlari</h2>
          <p className={styles.desc}>
            To‘plamlar orqali bir yo‘nalishdagi kursni to‘liq va mukammal holatda o‘rganing
          </p>
        </div>

        <div className="container">
        <div className={styles.courses}>
          {courses.map((course, i) => {
            const isClickable = course.link && course.link.trim() !== '';
            const content = (
              <>
                <img src={course.image} alt={course.title} />
                <div className={styles.courseTitle}>{course.title}</div>
              </>
            );

            return isClickable ? (
              <Link
                to={course.link}
                target="_blank"
                className={styles.courseCard}
                key={i}
              >
                {content}
              </Link>
            ) : (
              <div className={styles.courseCard} key={i}>
                {content}
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
