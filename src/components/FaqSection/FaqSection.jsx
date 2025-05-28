// src/components/FaqSection/FaqSection.jsx
import React, { useState } from 'react';
import styles from './FaqSection.module.scss';

const faqs = [
  {
    question: 'Do you provide customer support?',
    answer:
      'Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.',
  },
  {
    question: 'How often will you update the file and is it included in support?',
    answer:
      'Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit.',
  },
  {
    question: 'Can I change my plan later?',
    answer:
      'Yes — you can upgrade or downgrade your plan at any time via your account settings.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'We offer a 14-day free trial on all paid plans. No credit card required.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept Visa, MasterCard, American Express, and PayPal.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Your data is encrypted at rest and in transit. We follow industry-leading security practices.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className={styles.faq}>
      <div className="container">
        <p className={styles.label}>FAQs</p>
        <h2 className={styles.title}>Tez so'raladigan savollar</h2>
        <p className={styles.subtitle}>
          Answer to your life questions are here and learn why to use our
          awesome product
        </p>

        <div className={styles.accordion}>
          {faqs.map((item, idx) => {
            const isOpen = idx === openIndex;
            return (
              <div
                key={idx}
                className={`${styles.item} ${isOpen ? styles.open : ''}`}
              >
                <button
                  className={styles.header}
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : idx)
                  }
                >
                  <span>{item.question}</span>
                  <span
                    className={`${styles.icon} ${
                      isOpen ? styles.up : styles.down
                    }`}
                  />
                </button>
                <div
                  className={styles.panel}
                  style={{
                    maxHeight: isOpen ? '200px' : '0',
                  }}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
