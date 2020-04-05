
import React from 'react';

import Channel from './Channel';
import GifFinder from './GifFinder';
import styles from './style.module.css';

const PreviewArea = ({ selectedPatternId }) => (
  <>
    <Channel
      className={styles['content']}
      selectedPatternId={selectedPatternId} />
    <GifFinder className={styles['content']} />
  </>
);

export default PreviewArea;
