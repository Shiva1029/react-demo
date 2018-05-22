import React from 'react';
import { Link } from 'react-router-dom';

import styles from './HeaderComponent.sass';

const HeaderComponent = props => (
  <div className={styles.header}>
    <div className={styles.menu}>
      <div className={styles.menuItem}>
        <Link className={styles.link} to="/">Demo</Link>
      </div>
    </div>
  </div>
);

export default HeaderComponent;
