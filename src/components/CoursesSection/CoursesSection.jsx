// src/components/CoursesSection/CoursesSection.jsx
import React from 'react';
import styles from './CoursesSection.module.scss';
import { Courses1, Courses2 } from '../../utils/getImage';

const courses = [
  { title: 'HR Kurs To‘plam', image: Courses1 },
  { title: 'Islom Moliya Kurs To‘plam', image: Courses2 },
  { title: 'Marketing Kurs To‘plam', image: Courses1 },
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

        <div className={styles.courses}>
          {courses.map((course, i) => (
            <div className={styles.courseCard} key={i}>
              <img src={course.image} alt={course.title} />
              <div className={styles.courseTitle}>{course.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
