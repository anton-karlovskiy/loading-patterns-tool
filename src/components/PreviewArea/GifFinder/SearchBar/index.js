
import React from 'react';

import styles from './style.module.css';

const SearchBar = () => (
  <div className={styles['search-bar']}>
    <label htmlFor='search-bar'></label>
    <input
      className={styles['text-input']}
      type='text'
      id='search-bar'
      name='search-bar'
      placeholder='Search GIFs' />
  </div>
);

export default SearchBar;
