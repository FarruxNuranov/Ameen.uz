 import React, { useState, useRef, useEffect } from 'react';
import styles from './FeedbackSection.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {  image1, image2, image3, image4, image5, image6 } from '../../utils/getImage';
import { FiArrowLeft, FiArrowRight, FiX } from 'react-icons/fi';

const feedbacks = [
  {
    image: image1,
    
    videoId: 'z4o1f_LNYlM',
  },
  {
    image: image2,
  
    videoId: 'o4tbI1xOa5o',
  },
  {
    image: image3,
   
    videoId: 'mkvA5gWM0uU',
  },
  {
    image: image4,
    
    videoId: 'Jaj9WHXOEro',
  },
  {
    image: image5,
   
    videoId: 'S-bfHCYSd9s',
  },
  {
    image: image6,
   
    videoId: 'O1n-6JxSShI',
  },
];

export default function FeedbackSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const swiperRef = useRef(null);

  const openModalAt = (idx) => {
    setStartIndex(idx);
    setActiveIdx(idx);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  // При открытии ставим нужный слайд
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

        <Swiper
          modules={[EffectCoverflow, Pagination]}
          effect="coverflow"
          centeredSlides
          slidesPerView={2}
          loop
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
        >
          {feedbacks.map((f, i) => (
            <SwiperSlide key={i} className={styles.slide}>
              <div className={styles.card}>
                <img src={f.image} alt={f.text} />
                <button
                  className={styles.playBtn}
                  onClick={() => openModalAt(i)}
                >
                  ▶
                </button>
                <p className={styles.text}>{f.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {modalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
           
         <div className={styles.modalBox}>
         <button className={styles.closeBtn} onClick={closeModal}>
          <FiX />
            </button>
         <div className={styles.modalContent}
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

            <button className={styles.prevBtn}><FiArrowLeft /></button>
            <button className={styles.nextBtn}><FiArrowRight /></button>
          </div>
         </div>
        </div>
      )}
    </section>
  );
}
