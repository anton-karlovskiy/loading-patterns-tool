
import React from 'react';
import clsx from 'clsx';

import Channel from './Channel';
import styles from './style.module.css';

const PreviewArea = ({ selectedPatternId }) => (
  <div className={clsx(styles['scrollable'], styles['content'])}>
    <Channel selectedPatternId={selectedPatternId} />
  </div>
);

export default PreviewArea;
