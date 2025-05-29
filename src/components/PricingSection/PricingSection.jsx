import React from 'react';
import styles from './PricingSection.module.scss';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';
import { icon, iconx } from '../../utils/getImage';

const plans = [
  {
    name: 'Standard',
    price: 4900000,
    featured: false,
    features: [
      { name: "Video darslar", available: true },
      { name: "Quiz testlar", available: true },
      { name: "Mashqlar bajarish uchun qo'llanma", available: true },
      { name: "1 oy darslarni ko'rish imkoni", available: true },
      { name: "Sertifikat", available: false },
      { name: "Prezentatsiyalarni slaydlarini elektron versiyasi", available: false },
      { name: "Darsga aloqali bo'lgan shablon materiallar", available: false },
      { name: "Kurs qatnashchilari bilan har hafta speaker zoom da jonli uchrashuv", available: false },
      { name: "6 oy davomida ko'rish imkoni", available: false },
    ],
  },
  {
    name: 'Premium',
    price: 6900000,
    featured: true,
    features: [
      { name: "Video darslar", available: true },
      { name: "Quiz testlar", available: true },
      { name: "Mashqlar bajarish uchun qo'llanma", available: true },
      { name: "Sertifikat", available: true },
      { name: "Prezentatsiyalarni slaydlarini elektron versiyasi", available: true },
      { name: "Darsga aloqali bo'lgan shablon materiallar", available: true },
      { name: "Kurs qatnashchilari bilan har hafta speaker zoom da jonli uchrashuv", available: true },
      { name: "3 oy davomida ko'rish imkoni", available: true },
      { name: "Online yoki offline speaker bilan yuzma yuz 2 soatlik konsultatsiya", available: false },
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
      { name: "Prezentatsiyalarni slaydlarini elektron versiyasi", available: true },
      { name: "Darsga aloqali bo'lgan shablon materiallar", available: true },
      { name: "Kurs qatnashchilari bilan har hafta speaker zoom da jonli uchrashuv", available: true },
      { name: "6 oy davomida ko'rish imkoni", available: true },
      { name: "Online yoki offline speaker bilan yuzma yuz 2 soatlik konsultatsiya", available: true },
    ],
  },
];

const PricingSection = () => (
  <section className={styles.pricingSection}>
    <div className="container">
      <span className={styles.subtitle}>TARIFLAR</span>
      <h2 className={styles.title}>Tariflar va narxlar</h2>
      <div className={styles.cards}>
        {plans.map(plan => (
          <div
            key={plan.name}
            className={`${styles.card} ${plan.featured ? styles.featured : ''}`}
          >
            <div className={styles.cardHeader}>
              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.price}>
                {plan.price.toLocaleString()}<span> So&#39;m</span>
              </p>
            </div>
            <ul className={styles.features}>
              {plan.features.map(feature => (
                <li
                  key={feature.name}
                  className={`${styles.featureItem} ${feature.available ? styles.available : styles.unavailable}`}
                >
                  {feature.available ? <img className={styles.spanImg} src={icon} alt="" /> : <img className={styles.spanImg} src={iconx} alt="" />}
                  <span>{feature.name}</span>
                </li>
              ))}
            </ul>
            <button className={styles.button}>Tarifni tanlash</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
