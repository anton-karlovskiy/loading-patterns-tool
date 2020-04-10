
import React from 'react';

import MessageSkeleton from 'components/PreviewArea/Channel/MessageList/Message/skeleton';
import styles from './style.module.css';

const MessageListSkeleton = () => {
  return (
    <div className={styles['message-list']}>
      <MessageSkeleton
        numberOfLines={3}
        isMine
        startsSequence
        endsSequence />
      <MessageSkeleton
        numberOfLines={3}
        startsSequence />
      <MessageSkeleton
        numberOfLines={4}
        endsSequence />
      <MessageSkeleton
        numberOfLines={4}
        isMine
        startsSequence />
      <MessageSkeleton
        numberOfLines={3}
        isMine
        endsSequence />
    </div>
  );
};

export default MessageListSkeleton;
