
import React from 'react';
import clsx from 'clsx';

import Channel from './Channel';
import styles from './style.module.css';

const PreviewArea = ({ selectedPatternId }) => (
  <>
    <Channel
      className={clsx(styles['scrollable'], styles['content'])}
      selectedPatternId={selectedPatternId} />
  </>
);

export default PreviewArea;
