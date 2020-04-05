
import React from 'react';

import GifListItem from './GifListItem';
import styles from './style.module.css';

const gifs = [
  {
    id: 1,
    src: '/assets/gifs/animated-flower-image-0008.gif',
    alt: ''
  },
  {
    id: 2,
    src: '/assets/gifs/animated-flower-image-0015.gif',
    alt: ''
  },
  {
    id: 3,
    src: '/assets/gifs/animated-flower-image-0017.gif',
    alt: ''
  },
  {
    id: 4,
    src: '/assets/gifs/animated-flower-image-0050.gif',
    alt: ''
  }
];

const GifList = () => (
  <div className={styles['gif-list']}>
    {gifs.map(gif => <GifListItem key={gif.id} src={gif.src} />)}
  </div>
);

export default GifList;
