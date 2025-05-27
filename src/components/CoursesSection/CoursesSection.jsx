import React from 'react';
import styles from './CoursesSection.module.scss';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/mousewheel';
import { Courses1, Courses2 } from '../../utils/getImage';


const courses = [
    { title: 'HR Kurs To‘plam', image: Courses1 },
    { title: 'Islom Moliya Kurs To‘plam', image: Courses2 },
    { title: 'Marketing Kurs To‘plam', image: Courses1 },
    { title: 'Project Management', image: Courses2 },
    { title: 'Business Strategy', image: Courses1 },
    { title: 'HR Kurs To‘plam', image: Courses1 },
    { title: 'Islom Moliya Kurs To‘plam', image: Courses2 },
    { title: 'Marketing Kurs To‘plam', image: Courses1 },
    { title: 'Project Management', image: Courses2 },
    { title: 'Business Strategy', image: Courses1 },
  ];

export default function CoursesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {/* Левая часть */}
        <div className={styles.infoCard}>
          <p className={styles.label}>TO‘PLAMLAR</p>
          <h2 className={styles.title}>Kurslar to‘plamlari</h2>
          <p className={styles.desc}>
            To‘plamlar orqali bir yo‘nalishdagi kursni to‘liq va mukammal holatda o‘rganing
          </p>
        </div>

        {/* Правая часть: слайдер */}
        <div className={styles.sliderWrap}>
          <Swiper
            modules={[Mousewheel]}
            spaceBetween={20}
            mousewheel={{ forceToAxis: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {courses.map((c, i) => (
              <SwiperSlide key={i}>
                <div className={styles.courseCard}>
                  <img src={c.image} alt={c.title} />
                  <div className={styles.courseTitle}>{c.title}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}



