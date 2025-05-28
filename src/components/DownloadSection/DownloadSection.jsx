// src/components/DownloadSection/DownloadSection.jsx
import React from 'react';
import styles from './DownloadSection.module.scss';
import { googlePlay,  qrPhone } from '../../utils/getImage';

export default function DownloadSection() {
  return (
    <section className={styles.download}>
      <div className="container">
        <div className={styles.wrapper}>
          {/* Левый блок */}
          <div className={styles.textBlock}>
            <h2 className={styles.heading}>
              Buy and take courses<br />
              In the new marketplace app
            </h2>
            <div className={styles.badges}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on Google Play"
              >
                <img src={googlePlay} alt="Google Play badge" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the App Store"
              >
                <img src={googlePlay} alt="App Store badge" />
              </a>
            </div>
          </div>

          {/* Центр: телефон с QR */}
          <div className={styles.phone}>
            <img src={qrPhone} alt="QR code on phone" />
          </div>

          {/* Правый блок */}
          <div className={styles.hint}>
            <p>Hover your camera<br />over the QR code<br />to download</p>
          </div>
        </div>
      </div>
    </section>
  );
}
