
import React from 'react';

import GifListItemSkeleton from 'components/PreviewArea/GifFinderContainer/GifFinder/GifList/GifListItem/skeleton';
import styles from './style.module.css';

const LENGTH = 4;

let gifListItemSkeletons = [];
for (let index = 0; index < LENGTH; index++) {
  gifListItemSkeletons = [...gifListItemSkeletons, <GifListItemSkeleton key={index} />];
}

const GifListSkeleton = () => (
  <div className={styles['gif-list']}>
    {gifListItemSkeletons}
  </div>
);

export default GifListSkeleton;
