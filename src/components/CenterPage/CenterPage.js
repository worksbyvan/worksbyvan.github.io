import React from "react";

import styles from "./CenterPage.module.scss";

export default function CenterPage({ children }) {
  return <div className={styles.container}>{children}</div>;
}
