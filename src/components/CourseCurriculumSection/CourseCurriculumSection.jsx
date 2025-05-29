// src/components/TwoBoxesSection/TwoBoxesSection.jsx
import React from 'react';
import styles from './CourseCurriculumSection.module.scss';
import { FiFileText, FiClipboard, FiChevronDown, FiCalendar } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/mousewheel';

const curriculum = [
  { title: 'HR vazifalari', duration: '1–4 haftalar', lessons: 5 },
  { title: 'Kompaniyada uchraydigan muammolarga HR beradigan yechimlar', duration: '5–6 haftalar', lessons: 5 },
  { title: 'Kompaniya Missiyasi, Strategiyasi, Maqsadlari va Qadriyatlari', duration: '7–8 haftalar', lessons: 4 },
  { title: 'HR rejalashtirish va Tashkiliy Tuzilma', duration: '9–10 haftalar', lessons: 6 },
];

export default function CourseCurriculumSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.boxes}>

          {/* ЛЕВЫЙ БОКС */}
          <div className={styles.leftBox}>
            <div className={styles.inner}>
              <p className={styles.label}>DASTUR</p>
              <h2 className={styles.heading}>O‘quv dastur</h2>
              <div className={styles.features}>
                <div>
                  <FiClipboard className={styles.icon} />
                  <span>12 dars</span>
                </div>
                <div>
                  <FiCalendar className={styles.icon} />
                  <span>80 % kurs – amaliyot</span>
                </div>
              </div>
              <button className={styles.cta}>Ro’yxatdan o’tish</button>
            </div>
          </div>

          {/* ПРАВЫЙ БОКС */}
          <div className={styles.rightBox}>
            <div className={styles.inner}>
              <Swiper
                direction="vertical"
                slidesPerView={3}
                spaceBetween={16}
                mousewheel={{ forceToAxis: true }}
                className={styles.swiper}
              >
                {curriculum.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className={styles.card}>
                      <button className={styles.cardHeader}>
                        <div className={styles.title}>{item.title}</div>
                        <div className={styles.meta}>
                          <span><FiCalendar /> {item.duration}</span>
                          <span><FiClipboard /> {item.lessons} darslar</span>
                        </div>
                        <FiChevronDown className={styles.chevron} />
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
