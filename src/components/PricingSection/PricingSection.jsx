// src/components/PricingSection/PricingSection.jsx
import React from "react";
import styles from "./PricingSection.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { icon, iconx } from "../../utils/getImage";

const plans = [
  {
    name: "Standard",
    price: 4900000,
    featured: false,
    features: [
      { name: "Video darslar", available: true },
      { name: "Quiz testlar", available: true },
      { name: "Mashqlar bajarish uchun qo'llanma", available: true },
      { name: "1 oy darslarni ko'rish imkoni", available: true },
      { name: "Sertifikat", available: false },
      {
        name: "Prezentatsiyalarni slaydlarini elektron versiyasi",
        available: false,
      },
      { name: "Darsga aloqali bo'lgan shablon materiallar", available: false },
      {
        name: "Kurs qatnashchilari bilan har hafta speaker zoom da jonli uchrashuv",
        available: false,
      },
      { name: "6 oy davomida ko'rish imkoni", available: false },
    ],
  },
  {
    name: "Premium",
    price: 6900000,
    featured: true,
    features: [
      { name: "Video darslar", available: true },
      { name: "Quiz testlar", available: true },
      { name: "Mashqlar bajarish uchun qo'llanma", available: true },
      { name: "Sertifikat", available: true },
      {
        name: "Prezentatsiyalarni slaydlarini elektron versiyasi",
        available: true,
      },
      { name: "Darsga aloqali bo'lgan shablon materiallar", available: true },
      {
        name: "Kurs qatnashchilari bilan har hafta speaker zoom da jonli uchrashuv",
        available: true,
      },
      { name: "3 oy davomida ko'rish imkoni", available: true },
      {
        name: "Online yoki offline speaker bilan yuzma yuz 2 soatlik konsultatsiya",
        available: false,
      },
    ],
  },
  {
    name: "Faqat to'plamda",
    price: 9900000,
    featured: false,
    features: [
      { name: "Video darslar", available: true },
      { name: "Quiz testlar", available: true },
      { name: "Mashqlar bajarish uchun qo'llanma", available: true },
      { name: "Sertifikat", available: true },
      {
        name: "Prezentatsiyalarni slaydlarini elektron versiyasi",
        available: true,
      },
      { name: "Darsga aloqali bo'lgan shablon materiallar", available: true },
      {
        name: "Kurs qatnashchilari bilan har hafta speaker zoom da jonli uchrashuv",
        available: true,
      },
      { name: "6 oy davomida ko'rish imkoni", available: true },
      {
        name: "Online yoki offline speaker bilan yuzma yuz 2 soatlik konsultatsiya",
        available: true,
      },
    ],
  },
];

export default function PricingSection() {
  return (
    <section className={styles.pricingSection}>
      <div className="container">
        <span className={styles.subtitle}>TARIFLAR</span>
        <h2 className={styles.title}>Tariflar va narxlar</h2>

        {/* Слайдер для мобильных */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          breakpoints={{
            // до 600px – 1 карточка
            0: { slidesPerView: 1 },
            // от 600px до 1024px – 2 карточки
            600: { slidesPerView: 2 },
            // от 1024px и выше – 3 карточки (или авто)
            1024: { slidesPerView: 3 },
          }}
          className={styles.slider}
        >
          {plans.map((plan) => (
            <SwiperSlide key={plan.name}>
              <div
                className={`${styles.card} ${
                  plan.featured ? styles.featured : ""
                }`}
              >
                <div className={styles.cardHeader}>
                  <h3 className={styles.planName}>{plan.name}</h3>
                  <p className={styles.price}>
                    {plan.price.toLocaleString()}
                    <span>&nbsp;So&#39;m</span>
                  </p>
                </div>
                <ul className={styles.features}>
                  {plan.features.map((feat) => (
                    <li
                      key={feat.name}
                      className={`${styles.featureItem} ${
                        feat.available ? styles.available : styles.unavailable
                      }`}
                    >
                      <img
                        className={styles.spanImg}
                        src={feat.available ? icon : iconx}
                        alt=""
                      />
                      <span>{feat.name}</span>
                    </li>
                  ))}
                </ul>
                <button className={styles.button}>Tarifni tanlash</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
