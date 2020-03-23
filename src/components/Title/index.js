
import React from 'react';

import styles from './style.module.css';

import { appTitle } from 'utils/constants';

const Title = () => {
  return (
    <h2 className={styles['title']}>{appTitle}</h2>
  )
};

export default Title;
