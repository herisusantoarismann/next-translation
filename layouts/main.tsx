import React from "react";
import styles from "../styles/MainLayout.module.css";

type MainLayout = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayout) => {
  return <div className={styles.container}>{children}</div>;
};

export default MainLayout;
