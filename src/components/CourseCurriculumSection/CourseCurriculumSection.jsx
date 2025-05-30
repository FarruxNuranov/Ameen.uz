// src/components/CourseCurriculumSection/CourseCurriculumSection.jsx
import React, { useState } from 'react'
import { FiCalendar, FiChevronDown, FiChevronUp, FiPlay } from 'react-icons/fi'
import styles from './CourseCurriculumSection.module.scss'

const curriculum = [
  {
    title: 'HR vazifalari',
    duration: '1-4 haftalar',
    lessons: '5 darslar',
  },
  {
    title: 'Kompaniyada uchraydigan muammolarga HR beradigan yechimlar',
    duration: '5-6 haftalar',
    lessons: '5 darslar',
  },
  {
    title: 'Kompaniya Missiyasi, Strategiyasi, Maqsadlari va Qadriyatlari',
    duration: '7-8 haftalar',
    lessons: '4 darslar',
  },
  // …добавьте остальные пункты
]

export default function CourseCurriculumSection() {
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <section className={styles.curriculum}>
      <div className="container">
        <div className={styles.content}>
          {/* левая колонка */}
          <div className={styles.left}>
            <span className={styles.label}>DASTUR</span>
            <h2 className={styles.title}>O`quv dastur</h2>
            <ul className={styles.features}>
              <li>
                <FiPlay className={styles.icon} />
                <span>12 dars</span>
              </li>
              <li>
                <FiPlay className={styles.icon} />
                <span>80 % kurs — amaliyot</span>
              </li>
            </ul>
            <button className={styles.button}>Ro`yxatdan o`tish</button>
          </div>

          {/* разделитель */}
          <div className={styles.divider} />

          {/* правая колонка: аккордеон */}
          <div className={styles.accordion}>
            {curriculum.map((item, idx) => {
              const isOpen = idx === openIndex
              return (
                <div
                  key={idx}
                  className={`${styles.item} ${isOpen ? styles.open : ''}`}
                >
                  <button
                    className={styles.header}
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  >
                    <span>{item.title}</span>
                    {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                  {isOpen && (
                    <div className={styles.panel}>
                      <div className={styles.detail}>
                        <FiCalendar />
                        <span>{item.duration}</span>
                      </div>
                      <div className={styles.detail}>
                        <FiPlay />
                        <span>{item.lessons}</span>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
