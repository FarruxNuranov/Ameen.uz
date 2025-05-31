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
    text: 'Короткий отзыв 1', // я добавил text, чтобы у картинки был alt и в iframe title
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
  // стейт для модального окна
  const [modalOpen, setModalOpen] = useState(false);
  // С какого индекса (центрального) открываем слайдер в модалке
  const [startIndex, setStartIndex] = useState(0);
  // Индекс активного слайда (для модалки)
  const [activeIdx, setActiveIdx] = useState(0);
  // Реф на слайдер внутри модального окна
  const swiperRef = useRef(null);

  // Дополнительный стейт для основного coverflow-слайдера:
  // какой индекс сейчас центральный
  const [mainActiveIdx, setMainActiveIdx] = useState(0);

  // Когда открываем модалку — нужно установить стартовый слайд (в модалке)
  const openModalAt = (idx) => {
    setStartIndex(idx);
    setActiveIdx(idx);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  // При открытии модалки перескочим на нужный слайд (без анимации)
  useEffect(() => {
    if (modalOpen && swiperRef.current) {
      swiperRef.current.slideTo(startIndex, 0); // сразу встанет на startIndex
    }
  }, [modalOpen, startIndex]);

  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.label}>FIKRLAR</p>
        <h2 className={styles.title}>O'quvchilarning fikrlari</h2>

        {/* ==============================
             Основной слайдер с coverflow-эффектом
           ============================== */}
        <Swiper
          modules={[EffectCoverflow, Pagination]}
          effect="coverflow"
          centeredSlides={true}
          // ставим slidesPerView = 3, чтобы по бокам от центрального было по одному слайду
          slidesPerView={2}
          loop={true}
          spaceBetween={10}
          coverflowEffect={{
            rotate: 1,
            stretch: 0,
            depth: 100,
            modifier: 10,
            slideShadows: true,
          }}
          
          pagination={{ clickable: true }}
          className={styles.slider}
          // ловим, когда слайд меняется, чтобы знать currentIndex
          onSlideChange={(swiper) => {
            // realIndex = индекс в массиве feedbacks (без учёта loop)
            setMainActiveIdx(swiper.realIndex);
          }}
          onSwiper={(swiper) => {
            // сразу же запишем начальный индекс (0)
            setMainActiveIdx(swiper.realIndex);
          }}
        >
          {feedbacks.map((f, i) => (
            <SwiperSlide key={i} className={styles.slide}>
              <div className={styles.card}>
                <img src={f.image} alt={f.text} />
                {/* 
                  ▶ Кнопка «play» рендерим только если этот слайд центральный:
                  проверяем i === mainActiveIdx 
                */}
                {i === mainActiveIdx && (
                  <button
                    className={styles.playBtn}
                    onClick={() => openModalAt(i)}
                  >
                    ▶
                  </button>
                )}
                {/* Можете показать текст отзыва (если нужен), но у вас не было f.text */}
                {/* <p className={styles.text}>{f.text}</p> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ==============================
           Модальное окно с видео-слайдером
           ============================== */}
      {modalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalBox}>
            <button className={styles.closeBtn} onClick={closeModal}>
              <FiX />
            </button>
            {/* 
              Блок, который останавливает propagation, 
              чтобы клик по внутреннему контенту не закрывал модалку 
            */}
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
                      {/* 
                        ▶ В модалке рендерим iframe только у активного слайда, 
                        чтобы не грузить все видео сразу 
                      */}
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
