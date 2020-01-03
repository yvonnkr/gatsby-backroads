import React from "react";
import styles from "../../css/contact.module.css";

import Title from "../Title";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us" />
      <div className={styles.center}>
        <form
          action="https://formspree.io/yvonnkr86@gmail.com"
          method="POST"
          className={styles.form}
        >
          <div>
            <label htmlFor="name" className={styles.label}>
              name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="name"
            />
          </div>
          <div>
            <label htmlFor="email" className={styles.label}>
              email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="email@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className={styles.label}>
              message
            </label>
            <textarea
              name="message"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder="Hello there!"
            />
          </div>
          <div>
            <input type="submit" value="submit" className={styles.submit} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
