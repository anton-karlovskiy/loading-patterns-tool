
import React from 'react';

import styles from './style.module.css';

const ConeptOptionListItem = ({ value, caption }) => (
  <div className={styles['flex']}>
    <input type='radio' name='react-loading-patterns' value={value} />
    <span>&nbsp;{caption}</span>
  </div>
);

export default ConeptOptionListItem;
