// src/components/CourseCurriculumSection/CourseCurriculumSection.jsx
import React, { useState } from 'react';
import {
  FiCalendar,
  FiPlay,
  FiChevronDown,
  FiChevronUp,
} from 'react-icons/fi';
import styles from './CourseCurriculumSection.module.scss';
import { failmini, playmini } from '../../utils/getImage';

const curriculum = [
  {
    title: 'HR vazifalari',
    duration: '1–4 haftalar',
    lessons: '4 darslar',
    points: [
      'Xodimlarning uzoq kelajakni ko‘rmasligi',
      'Biznes jarayonlar xodimlarga bog‘liq bo‘lib qolishi',
      'Xodimlarning ketib qolishi',
      'Kerakli xodimlar sonini bilmaslik',
      'Ishni sifatli qilishda xodimlarning qobiliyatlari yetishmasligi',
    ],
  },
  {
    title: 'Kompaniyada uchraydigan muammolarga HR beradigan yechimlar',
    duration: '5–6 haftalar',
    lessons: '5 darslar',
    points: [
      'Xodimlar motivatsiyasini saqlash',
      'Trening va rivojlanish dasturlari tashkil etish',
      'Ish jarayonlarini optimallashtirish',
      'Qayta yollash muddatini qisqartirish',
      'Ishchilar bilan muloqotni yaxshilash',
    ],
  },
  {
    title: 'Kompaniya Missiyasi, Strategiyasi, Maqsadlari va Qadriyatlari',
    duration: '7–8 haftalar',
    lessons: '4 darslar',
    points: [
      'Missiyani shakllantirish',
      'Strategik rejalar tuzish',
      
     
    ],
  },
  {
    title: 'HR rejalashtirish va Tashkiliy Tuzilma',
    duration: '9–10 haftalar',
    lessons: '6 darslar',
    points: [
      'HR byudjetini rejalashtirish',
      'Tashkiliy tuzilmani loyihalash',
      'Vakansiyalarni aniqlash',
      'Xodimlarni tekshiruv',
      'Hisobot va tahlil',
    ],
  },
  {
    title: 'HR rejalashtirish va Tashkiliy Tuzilma',
    duration: '9–10 haftalar',
    lessons: '6 darslar',
    points: [
      'HR byudjetini rejalashtirish',
      'Tashkiliy tuzilmani loyihalash',
      'Vakansiyalarni aniqlash',
      'Xodimlarni tekshiruv',
      'Hisobot va tahlil',
    ],
  },
  {
    title: 'HR rejalashtirish va Tashkiliy Tuzilma',
    duration: '9–10 haftalar',
    lessons: '6 darslar',
    points: [
      'HR byudjetini rejalashtirish',
      'Tashkiliy tuzilmani loyihalash',
      'Vakansiyalarni aniqlash',
      'Xodimlarni tekshiruv',
      'Hisobot va tahlil',
    ],
  },
];

export default function CourseCurriculumSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className={styles.curriculum}>
     <div className="container">
     <div className={styles.wrapper}>
        {/* Левая колонка */}
        <div className={styles.left}>
          <span className={styles.label}>DASTUR</span>
          <h2 className={styles.title}>O‘quv dastur</h2>
          <ul className={styles.features}>
            <li>
               <img className={styles.icon} src={playmini} alt="" />
              <span>12 dars</span>
            </li>
            <li>
            <img className={styles.icon} src={failmini} alt="" />
              <span>80 % kurs — amaliyot</span>
            </li>
          </ul>
          <button className={styles.button}>Ro‘yxatdan o‘tish</button>
        </div>

        <div className={styles.divider} />

        {/* Правая колонка */}
        <div className={styles.right}>
          <div className={styles.scroll}>
            {curriculum.map((item, idx) => {
              const isOpen = idx === openIndex;
              return (
                <div
                  key={idx}
                  className={`${styles.item} ${isOpen ? styles.open : ''}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                >
                  {/* Заголовок и стрелка */}
                  <div className={styles.header}>
                    <span>{item.title}</span>
                    {isOpen ?  <FiChevronUp className={styles.svg} /> : <FiChevronDown className={styles.svg} />}
                  </div>

                  {/* Метаданные всегда видны */}
                  <div className={styles.meta}>
                    <div className={styles.detail}>
                      <FiCalendar />
                      <span>{item.duration}</span>
                    </div>
                    <div className={styles.detail}>
                      <FiPlay />
                      <span>{item.lessons}</span>
                    </div>
                  </div>

                  {/* Список при открытии */}
                  {isOpen && (
                    <ol className={styles.points}>
                      {item.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ol>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
     </div>
    </section>
  );
}
