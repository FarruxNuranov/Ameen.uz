import React from 'react';
import styles from './FreeCoursesSection.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { freeCourses1, freeCourses2, freeCourses3, freeCourses4 } from '../../utils/getImage';

const courses = [
    {
        image: freeCourses1,
        title: 'Human Resource Management: HR for People Managers',
        author: 'Kozimxon Turayev',
        rating: 4.0,
        reviews: 345,
        videos: 3,
    },
    {
        image: freeCourses2,
        title: 'Human Resource Management: HR for People Managers',
        author: 'Kozimxon Turayev',
        rating: 4.0,
        reviews: 345,
        videos: 3,
    },
    {
        image: freeCourses3,
        title: 'Human Resource Management: HR for People Managers',
        author: 'Kozimxon Turayev',
        rating: 4.0,
        reviews: 345,
        videos: 3,
    },
    {
        image: freeCourses4,
        title: 'Human Resource Management: HR for People Managers',
        author: 'Kozimxon Turayev',
        rating: 4.0,
        reviews: 345,
        videos: 3,
    },
    {
        image: freeCourses4,
        title: 'Human Resource Management: HR for People Managers',
        author: 'Kozimxon Turayev',
        rating: 4.0,
        reviews: 345,
        videos: 3,
    },
    {
        image: freeCourses4,
        title: 'Human Resource Management: HR for People Managers',
        author: 'Kozimxon Turayev',
        rating: 4.0,
        reviews: 345,
        videos: 3,
    },
    // Можно добавить еще 3
];





export default function FreeCoursesSection() {
    return (
        <section className={styles.section}>
            <div className="container">
                <p className={styles.label}>KURSLAR</p>
                <h2 className={styles.title}>Bepul kurslar</h2>

                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={20}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        500: { slidesPerView: 1 },
                        1024: { slidesPerView: 3 },
                        1300: { slidesPerView: 4 },
                    }}
                >
                    {courses.map((c, i) => (
                        <SwiperSlide key={i}>
                            <div className={styles.card}>
                                <div className={styles.imageWrap}>
                                    <img src={c.image} alt={c.title} />
                                    <div className={styles.videos}>
                                        <svg className={styles.icon} viewBox="0 0 24 24">
                                            <path fill="#fff" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z" />
                                        </svg>
                                        <span>{c.videos}</span>
                                    </div>
                                </div>

                                <h3 className={styles.courseTitle}>{c.title}</h3>
                                <p className={styles.author}>Created by: {c.author}</p>

                                <div className={styles.rating}>
                                    <span className={styles.stars}>
                                        {c.rating.toFixed(1)}{' '}
                                        {[...Array(5)].map((_, idx) => (
                                            <span key={idx}>
                                                {idx < Math.floor(c.rating) ? '★' : '☆'}
                                            </span>
                                        ))}
                                    </span>
                                    <span className={styles.review}>({c.reviews})</span>
                                </div>

                                <button className={styles.btn}>Hoziroq boshlash</button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}
