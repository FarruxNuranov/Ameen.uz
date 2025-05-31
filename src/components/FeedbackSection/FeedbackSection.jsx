// src/components/FeedbackSection/FeedbackSection.jsx

import React, { useState, useRef, useEffect } from 'react';
import styles from './FeedbackSection.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
} from '../../utils/getImage';
import { FiArrowLeft, FiArrowRight, FiX } from 'react-icons/fi';

const feedbacks = [
  {
    image: image1,
    videoId: 'z4o1f_LNYlM',
    text: 'Короткий отзыв 1',
  },
  {
    image: image2,
    videoId: 'o4tbI1xOa5o',
    text: 'Короткий отзыв 2',
  },
  {
    image: image3,
    videoId: 'mkvA5gWM0uU',
    text: 'Короткий отзыв 3',
  },
  {
    image: image4,
    videoId: 'Jaj9WHXOEro',
    text: 'Короткий отзыв 4',
  },
  {
    image: image5,
    videoId: 'S-bfHCYSd9s',
    text: 'Короткий отзыв 5',
  },
  {
    image: image6,
    videoId: 'O1n-6JxSShI',
    text: 'Короткий отзыв 6',
  },
];

export default function FeedbackSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const swiperRef = useRef(null);
  const [mainActiveIdx, setMainActiveIdx] = useState(0);

  const openModalAt = (idx) => {
    setStartIndex(idx);
    setActiveIdx(idx);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    if (modalOpen && swiperRef.current) {
      swiperRef.current.slideTo(startIndex, 0);
    }
  }, [modalOpen, startIndex]);

  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.label}>FIKRLAR</p>
        <h2 className={styles.title}>O'quvchilarning fikrlari</h2>

        {/* ====== ОБЁРТКА: контейнер, в который точно влезают 3 карточки ====== */}
        <div className={styles.sliderWrapper}>
          <Swiper
            modules={[EffectCoverflow, Pagination]}
            effect="coverflow"
            centeredSlides={true}
            slidesPerView= {2}            // ровно 3 карточки “на экране”
            loop={true}
            spaceBetween={10}            // отступ между карточками
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1.5,             // сближаем боковые слайды
              slideShadows: true,
            }}
            pagination={{ clickable: false }}
            className={styles.slider}
            onSlideChange={(swiper) => {
              setMainActiveIdx(swiper.realIndex);
            }}
            onSwiper={(swiper) => {
              setMainActiveIdx(swiper.realIndex);
            }}
          >
            {feedbacks.map((f, i) => (
              <SwiperSlide key={i} className={styles.slide}>
                <div className={styles.card}>
                  <img src={f.image} alt={f.text} />
                  {i === mainActiveIdx && (
                    <button
                      className={styles.playBtn}
                      onClick={() => openModalAt(i)}
                    >
                      ▶
                    </button>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* ================================================================ */}
      </div>

      {/* ======= Модальное окно с видео-слайдером ======= */}
      {modalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalBox}>
            <button className={styles.closeBtn} onClick={closeModal}>
              <FiX />
            </button>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: `.${styles.prevBtn}`,
                  nextEl: `.${styles.nextBtn}`,
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(s) => setActiveIdx(s.realIndex)}
                initialSlide={startIndex}
                slidesPerView={1}
                className={styles.modalSlider}
              >
                {feedbacks.map((f, i) => (
                  <SwiperSlide key={i} className={styles.modalSlide}>
                    <div className={styles.videoWrapper}>
                      {activeIdx === i && (
                        <iframe
                          src={`https://www.youtube.com/embed/${f.videoId}?autoplay=1&controls=1`}
                          frameBorder="0"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                          title={f.text}
                        />
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button className={styles.prevBtn}>
                <FiArrowLeft />
              </button>
              <button className={styles.nextBtn}>
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
