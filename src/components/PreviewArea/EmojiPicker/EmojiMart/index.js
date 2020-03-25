
import React from 'react';
import 'emoji-mart/css/emoji-mart.css';
import data from 'emoji-mart/data/facebook.json';
import { NimblePicker } from 'emoji-mart';

import AriaText from 'components/PreviewArea/AriaText';
import styles from './style.module.css';

const EmojiMart = ({ ariaText }) => (
  <div className={styles['emoji-mart']}>
    <NimblePicker
      set='facebook'
      data={data}
      sheetSize={32}
      exclude={['recent', 'search']}
      showSkinTones={false}
      useButton={false}
      emojiTooltip={false}
      title=''
      style={{
        position: 'absolute',
        bottom: '32px',
        right: 0
      }} />
    <AriaText className={styles['aria-text']} text={ariaText} />
  </div>
);

export default EmojiMart
