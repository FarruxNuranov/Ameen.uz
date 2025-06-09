// src/components/CoursesSection/CoursesSection.jsx
import React, { useRef, useEffect } from "react";
import styles from "./CoursesSection.module.scss";
import { Courses1, Courses2, nextBtn, prevBtn } from "../../utils/getImage";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const courses = [
  {
    title: "HR Kurs To‘plam",
    image: Courses1,
    link: "/courses",
  },
  {
    title: "Islom Moliya Kurs To‘plam",
    image: Courses2,
    link: "",
  },
];

export default function CoursesSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params?.navigation &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Навигационные стрелки */}
        <div className={styles.navbox}>
          <div className={styles.customNav}>
            <button ref={prevRef} className={styles.prevBtn}>
              <img src={prevBtn} alt="Previous" />
            </button>
            <button ref={nextRef} className={styles.nextBtn}>
              <img src={nextBtn} alt="Next" />
            </button>
          </div>
        </div>

        <div className={styles.wrapper}>
          {/* Левая инфо-карта */}
          <div className={styles.infoCard}>
            <p className={styles.label}>TO‘PLAMLAR</p>
            <h2 className={styles.title}>Kurslar to‘plamlari</h2>
            <p className={styles.desc}>
              To‘plamlar orqali bir yo‘nalishdagi kursni to‘liq va mukammal holatda o‘rganing
            </p>
            <div className={styles.custombuttons}>
              <button ref={prevRef} className={styles.prevBtn}>
                <img src={prevBtn} alt="Previous" />
              </button>
              <button ref={nextRef} className={styles.nextBtn}>
                <img src={nextBtn} alt="Next" />
              </button>
            </div>
          </div>

          {/* Слайдер */}
          <div className={styles.sliderWrapper}>
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={24}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
            >
              {courses.map((course, index) => {
                const isClickable = course.link && course.link.trim() !== "";
                const content = (
                  <>
                    <img src={course.image} alt={course.title} />
                    <div className={styles.courseTitle}>{course.title}</div>
                  </>
                );

                return (
                  <SwiperSlide key={index}>
                    {isClickable ? (
                      <Link
                        to={course.link}
                        target="_blank"
                        className={styles.courseCard}
                      >
                        {content}
                      </Link>
                    ) : (
                      <div className={styles.courseCard}>{content}</div>
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
