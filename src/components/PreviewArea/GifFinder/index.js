
import React from 'react';
import clsx from 'clsx';

import SearchBar from './SearchBar';
import GifList from './GifList';
import styles from './style.module.css';
// ray test touch <
import withDelayedRender from 'hoc/withDelayedRender';
// ray test touch >

// ray test touch <
const GifFinder = ({ className }) => (
// ray test touch >
  <div
    className={clsx(styles['root'], className)}>
    <SearchBar />
    <GifList />
  </div>
);

// ray test touch <
export default withDelayedRender(GifFinder);
// ray test touch >
