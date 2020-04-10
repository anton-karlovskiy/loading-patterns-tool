
// ray test touch <
import React from 'react';

import MessageInputSkeleton from 'components/PreviewArea/Channel/MessageInput/skeleton';
import styles from './style.module.css';

const ChannelSkeleton = () => (
  <div className={styles['root']}>
    <MessageInputSkeleton />
  </div>
);

export default ChannelSkeleton;
// ray test touch >
