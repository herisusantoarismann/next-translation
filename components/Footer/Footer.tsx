import React from "react";
import styles from "../../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        &copy; {new Date().getFullYear()}, Heri Susanto Arisman
      </p>
    </div>
  );
};

export default Footer;
