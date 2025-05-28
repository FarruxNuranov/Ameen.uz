// src/components/FeedbackSection/FeedbackSection.jsx
import React from 'react';
import styles from './FeedbackSection.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import {
    freeCourses1,

} from '../../utils/getImage';

const feedbacks = [
  { image: freeCourses1, text: "Qurilish xodimlariga ham KPI qo‘yishni o‘rgandim" },
  { image: freeCourses1, text: "80% kompaniyalarda HR tizimi to‘g‘ri yo‘lga qo‘yilmagan!" },
  { image: freeCourses1, text: "Men tushungan narsalar juda foydali bo‘ldi" },
  { image: freeCourses1, text: "Biznesimiz samaradorligi sezilarli darajada oshdi" },
  { image: freeCourses1, text: "Kurs metodikasi juda tushunarli va amaliy" },
];

export default function FeedbackSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.label}>FIKRLAR</p>
        <h2 className={styles.title}>O'quvchilarning fikrlari</h2>

        <Swiper
          modules={[EffectCoverflow, Pagination]}
          effect="coverflow"
          centeredSlides={true}
          slidesPerView={2}          // показываем ровно 3 карточки
          loop={true}
          spaceBetween={10}
          coverflowEffect={{
            rotate:      1,
            stretch:   0,
            depth:     100,
            modifier:    10,
            slideShadows: true 
          }}
          pagination={{ clickable: true }}
          className={styles.slider}
        >
          {feedbacks.map((f, i) => (
            <SwiperSlide key={i} className={styles.slide}>
              <div className={styles.card}>
                <img src={f.image} alt={f.text} />
                <button className={styles.playBtn}>▶</button>
                <p className={styles.text}>{f.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
