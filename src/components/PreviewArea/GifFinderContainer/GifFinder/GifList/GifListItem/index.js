
import React from 'react';

import styles from './style.module.css';

const GifListItem = ({ src, alt }) => (
  <div className={styles['gif-list-item']}>
    <img src={src} alt={alt} />
  </div>
);

export default GifListItem
