
import React from 'react';
import clsx from 'clsx';

import SearchBarSkeleton from 'components/PreviewArea/GifFinderContainer/GifFinder/SearchBar/skeleton';
import GifListSkeleton from 'components/PreviewArea/GifFinderContainer/GifFinder/GifList/skeleton';
import styles from './style.module.css';

const GifFinderSkeleton = () => (
  <div className={clsx(styles['gif-finder'], styles['gif-finder-skeleton'])}>
    <SearchBarSkeleton />
    <GifListSkeleton />
  </div>
);

export default GifFinderSkeleton;
