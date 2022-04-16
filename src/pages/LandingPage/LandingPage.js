import React from "react";

import CenterPage from "../../components/CenterPage/CenterPage";
import Typography from "../../components/design/Typography/Typography";
import styles from "./LandingPage.module.scss";

export default function LandingPage() {
  return (
    <CenterPage>
      <Typography variant="h1" className={styles.title}>
        worksbyvan@gmail.com
      </Typography>
      <Typography variant="overline" className={styles.subtitle}>
        Fullstack software engineer & designer
      </Typography>
    </CenterPage>
  );
}
