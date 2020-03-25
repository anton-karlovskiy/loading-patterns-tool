
import React from 'react';

import withDelayedRender from 'hoc/withDelayedRender';
// ray test touch <
import AriaText from 'components/PreviewArea/AriaText';
import styles from './style.module.css';
// ray test touch >

// ray test touch <
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
// ray test touch >

export default withDelayedRender(MessageInput);
