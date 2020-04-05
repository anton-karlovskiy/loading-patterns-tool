
import React from 'react';
import clsx from 'clsx';

import SearchBar from './SearchBar';
import GifList from './GifList';
import styles from './style.module.css';

const GifFinder = ({ className }) => (
  <div className={clsx(styles['root'], className)}>
    <SearchBar />
    <GifList />
  </div>
);

export default GifFinder;
