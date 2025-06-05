import React, { useState } from "react";
import styles from "./ContactSection.module.scss";
import toast from "react-hot-toast";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Вы успешно отправили!");
    const response = await fetch(
      `https://script.google.com/macros/s/AKfycbzjvlvTzrM0xqtDabu-7NiumhNsf2H25tAroU37Pc3-dzUEOY1gXGK27FtYAopI_5lXjw/exec?name=${encodeURIComponent(
        name
      )}&phone=${encodeURIComponent(phone)}&date=${encodeURIComponent(
        new Date().toLocaleDateString()
      )}`
    );

    const data = await response.json();

    // if (data.result === "success") {
    //   toast.success("✅ Вы успешно отправили!");
    // } else if (data.result === "duplicate") {
    //   toast.error("⚠️ Этот номер уже существует!");
    // } else {
    //   toast.error("❌ Ошибка при отправке.");
    // }

    setName("");
    setPhone("");
  };

  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <p className={styles.label}>ALOQA</p>
        <h2 className={styles.title}>So’rov qoldiring - bilim sari ilk qadam bepul!</h2>
        <p className={styles.subtitle}>
          Ushbu maydonlarni to‘ldiring va yuborish tugmasini bosing!
          <br />
          Biz sizga aloqaga chiqamiz
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ismingiz"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Telefon raqamingiz"
            className={styles.input}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button type="submit" className={styles.button}>
            Yuborish
          </button>
        </form>
      </div>
    </section>
  );
}
