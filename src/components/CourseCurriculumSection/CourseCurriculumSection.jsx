// CourseCurriculumSection.jsx
import React, { useState } from 'react';
import { FiCalendar, FiFileText } from 'react-icons/fi';
import { MdMenuBook } from 'react-icons/md';
import styles from './CourseCurriculumSection.module.scss';

const curriculum = [
  {
    id: 1,
    title: 'HR vazifalari',
    duration: '1–4 haftalar',
    lessons: '4 darslar',
    topics: [],
  },
  {
    id: 2,
    title: 'Kompaniyada uchraydigan muammolarga HR beradigan yechimlar',
    duration: '5–6 haftalar',
    lessons: '5 darslar',
    topics: [
      "Xodimlarning uzoq kelajakni ko’rmasligi",
      "Biznes jarayonlar xodimlarga bog’liq bo’lib qolishi",
      "Xodimlarning ketib qolishi",
      "Kerakli xodimlar sonini bilmaslik",
      "Ishni sifatli qilishda xodimlarning qobiliyatlari yetishmasligi",
    ],
  },
  // можно добавить ещё карточек
];

const CourseCurriculumSection = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <section className={styles.section}>
      <div className="container">
    <div className={styles.boxC}>
    <div className={styles.sidebar}>
        <span className={styles.label}>dastur</span>
        <h2 className={styles.title}>O‘quv dastur</h2>
        <ul className={styles.infoList}>
          <li>
            <MdMenuBook className={styles.infoIcon} />
            12 dars
          </li>
          <li>
            <span className={styles.progress}>80% kurs – amaliyot</span>
          </li>
        </ul>
        <button className={styles.button}>Ro’yxatdan o’tish</button>
      </div>
      <div className={styles.content}>
        {curriculum.map(item => (
          <div key={item.id} className={styles.card}>
            <div
              className={styles.cardHeader}
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
            >
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <div className={styles.badges}>
                <span className={styles.badge}>
                  <FiCalendar /> {item.duration}
                </span>
                <span className={styles.badge}>
                  <FiFileText /> {item.lessons}
                </span>
              </div>
              <div className={`${styles.arrow} ${openId === item.id ? styles.open : ''}`} />
            </div>
            {item.topics.length > 0 && (
              <ul className={`${styles.cardBody} ${openId === item.id ? styles.expanded : ''}`}>
                {item.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
      </div>
    </section>
  );
};

export default CourseCurriculumSection;
