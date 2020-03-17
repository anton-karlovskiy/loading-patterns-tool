
import React from 'react';
import clsx from 'clsx';

import Channel from './Channel';
import styles from './style.module.css';

const PreviewArea = () => {
  return (
    <div className={clsx(styles['scrollable'], styles['content'])}>
      <Channel />
    </div>
  );
};

export default PreviewArea;
