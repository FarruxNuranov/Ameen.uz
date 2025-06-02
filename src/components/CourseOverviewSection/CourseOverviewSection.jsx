import React from 'react';
import styles from './CourseOverviewSection.module.scss';
import { FaPlay } from 'react-icons/fa';
import { PlayButton, vie1 } from '../../utils/getImage';

export default function CourseOverviewSection() {
  return (
    <section className={styles.overview}>
      <div className="container">
        <p className={styles.label}>KURSLAR</p>
        <h2 className={styles.title}>Kurs haqida qisqacha</h2>

        <div className={styles.videoWrapper}>
          <div className={styles.video}>
           
            <img
              src={vie1} 
              alt="Course preview"
            />
            <button className={styles.playBtn}>
              <img src={PlayButton} alt="" />
            </button>
          </div>
        </div>

        <p className={styles.desc}>
          Introduction to IT: This section provides a foundational understanding of information technology, including hardware, software, operating systems, and basic troubleshooting concepts.
        </p>
      </div>
    </section>
);
}
