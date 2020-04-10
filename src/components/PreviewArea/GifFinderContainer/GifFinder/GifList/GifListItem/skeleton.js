
import React from 'react';
import clsx from 'clsx';

import skeletonStyles from 'components/PreviewArea/skeleton-style.module.css';
import styles from './style.module.css';

const GifListItemSkeleton = () => (
  <div className={clsx(styles['gif-list-item'], skeletonStyles['skeleton-ui-effect'])} />
);

export default GifListItemSkeleton;
