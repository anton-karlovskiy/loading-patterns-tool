
import React from 'react';

import MessageListSkeleton from 'components/PreviewArea/Channel/MessageList/skeleton';
import MessageInputSkeleton from 'components/PreviewArea/Channel/MessageInput/skeleton';
import styles from './style.module.css';

const ChannelSkeleton = () => (
  <div className={styles['root']}>
    <MessageListSkeleton />
    <MessageInputSkeleton />
  </div>
);

export default ChannelSkeleton;
