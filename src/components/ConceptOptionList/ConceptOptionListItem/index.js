
import React from 'react';

import styles from './style.module.css';

const ConceptOptionListItem = ({ value, caption, checked, selectOption }) => (
  <div className={styles['flex']}>
    <input
      checked={checked}
      onChange={selectOption}
      className={styles['radio']}
      type='radio'
      name='react-loading-patterns'
      value={value} />
    <span>&nbsp;{caption}</span>
  </div>
);

export default ConceptOptionListItem;
