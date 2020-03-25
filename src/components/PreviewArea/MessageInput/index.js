
import React from 'react';

import withDelayedRender from 'hoc/withDelayedRender';
import AriaText from 'components/PreviewArea/AriaText';
import styles from './style.module.css';

const MessageInput = ({ ariaText, rightItems }) => (
  <div className={styles['message-input']}>
    <input
      type='text'
      className={styles['text-input']}
      placeholder='Type a message' />
    <div className='toolbar-button-set'>
      {rightItems}
    </div>
    <AriaText className={styles['aria-text']} text={ariaText} />
  </div>
);

export default withDelayedRender(MessageInput);
