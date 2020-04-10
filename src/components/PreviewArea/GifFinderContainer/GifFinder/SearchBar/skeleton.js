
import React from 'react';
import clsx from 'clsx';

import skeletonStyles from 'components/PreviewArea/skeleton-style.module.css';
import styles from './style.module.css';

const SearchBarSkeleton = () => (
  <div className={styles['search-bar']}>
    <span className={clsx(styles['text-label'], styles['text-label-skeleton'], skeletonStyles['skeleton-ui-effect'])} />
    <div className={clsx(styles['text-input'], skeletonStyles['skeleton-ui-effect'])} />
  </div>
);

export default SearchBarSkeleton;
