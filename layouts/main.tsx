import React from "react";
import styles from "../styles/mainLayout.module.css";

type MainLayout = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayout) => {
  return <div className={styles.container}>{children}</div>;
};

export default MainLayout;
