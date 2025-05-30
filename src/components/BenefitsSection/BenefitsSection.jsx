// src/components/BenefitsSection/BenefitsSection.jsx
import React from 'react';
import styles from './BenefitsSection.module.scss';
import { featuresImage, benefitsLogo } from '../../utils/getImage';
import { useLocation, useNavigate } from 'react-router-dom';

export default function BenefitsSection() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const scrollToSection = (id) => {
    if (pathname !== '/') {
      navigate('/', { replace: true });
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>

          {/* Картинка слева */}
          <div className={styles.imageBox}>
            <img src={featuresImage} alt="Afzalliklar" />

            {/* Плашка поверх картинки */}
            <div className={styles.notification}>
              <div className={styles.logo}>
                <img src={benefitsLogo} alt="Ameen logo" />
              </div>
              <div className={styles.text}>
                <div className={styles.title}>Tabriklaymiz!</div>
                <div className={styles.subtitle}>
                  Siz ishga qabul qilindingiz
                </div>
              </div>
            </div>
          </div>

          {/* Текст справа */}
          <div className={styles.infoBox}>
            <p className={styles.label}>AFZALLIKLAR</p>
            <h2 className={styles.title}>
              Ameen.uz bilan o‘rganing, yetakchilar qatoriga qo‘shiling.
            </h2>
            <p className={styles.text}>
              Zamonaviy kasblarni amaliy tarzda o‘rganing, real loyihalarda tajriba orttiring
              va eng nufuzli kompaniyalarda ishlash imkoniyatini qo‘lga kiriting.
              Ameen.uz — o‘qish bilan ishni bog‘laydigan platforma.
            </p>
            <button onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }} className={styles.button}>Batafsil</button>
          </div>

        </div>
      </div>
    </section>
  );
}
