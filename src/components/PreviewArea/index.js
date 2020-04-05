
import React from 'react';

import Channel from './Channel';
import GifFinderContainer from './GifFinderContainer';
import styles from './style.module.css';

const PreviewArea = ({ selectedPatternId }) => (
  <>
    <Channel
      className={styles['content']}
      selectedPatternId={selectedPatternId} />
    <GifFinderContainer
      className={styles['content']}
      selectedPatternId={selectedPatternId} />
  </>
);

export default PreviewArea;
