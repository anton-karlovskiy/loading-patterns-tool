
import React from 'react';
import clsx from 'clsx';

import EmojiPickerSkeleton from 'components/PreviewArea/Channel/EmojiPicker/skeleton';
import skeletonStyles from 'components/PreviewArea/skeleton-style.module.css';
import styles from './style.module.css';

const MessageInputSkeleton = () => (
  <div className={styles['message-input']}>
    <div className={clsx(styles['text-input'], skeletonStyles['skeleton-ui-effect'])} />
    <div className={styles['toolbar-button-set']}>
      <EmojiPickerSkeleton />
    </div>
  </div>
);

export default MessageInputSkeleton;
