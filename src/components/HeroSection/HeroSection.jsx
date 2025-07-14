// src/components/HeroSection/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import styles from './HeroSection.module.scss';
import { heroBackground, Play,  } from '../../utils/getImage';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Блокировка скролла страницы, когда модалка открыта
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  // Пример ID Vimeo-видео, как на скриншоте: 1003487071
  const vimeoId = '1003487071';

  return (
    <section
      className={styles.hero}
 
    >
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <p className={styles.label}>HR MANAGEMENT, PROJECT MANAGEMENT</p>
            <h1>Eng yaxshilaridan ta’lim olish endi yanada oson</h1>
            <p className={styles.subtitle}>
              Kompaniyada HR tizimini joriy qilib, yuqori samaraga olib chiqishni istagan biznes egalari uchun
            </p>
            <div className={styles.buttons}>
              <Link to="https://eduameenuz.netlify.app/register" target="_blank"  className={styles.primary}>Ro’yxatdan o’tish</Link>
              <button
                className={styles.secondary}
                onClick={() => setIsModalOpen(true)}
              >
                <span className={styles.play}>
                  <span className={styles.playmini}><img src={Play} alt="" /></span>
                </span>{' '}
                SEE OUR ACTIVITY
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно с Vimeo-iframe */}
      {isModalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setIsModalOpen(false)}
              aria-label="Close video"
            >
              ✕
            </button>
            <div className={styles.iframeWrapper}>
              <iframe
                className="elementor-video-iframe"
                allowFullScreen
                allow="autoplay"
                title="vimeo Video Player"
                src={`https://player.vimeo.com/video/${vimeoId}?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1`}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
