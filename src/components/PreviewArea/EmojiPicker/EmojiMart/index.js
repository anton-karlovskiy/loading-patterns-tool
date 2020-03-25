
import React from 'react';
import 'emoji-mart/css/emoji-mart.css';
import data from 'emoji-mart/data/facebook.json';
import { NimblePicker } from 'emoji-mart';

import AriaText from 'components/PreviewArea/AriaText';
import styles from './style.module.css';
import { checkIsSmallViewport } from 'utils/helpers';

const isSmallViewport = checkIsSmallViewport();
const exclude = isSmallViewport ? [
  'flags',
  'symbols',
  'objects',
  'places',
  'activity',
  'recent',
  'search'
]: [
  'recent',
  'search'
];

const EmojiMart = ({ ariaText }) => (
  <div className={styles['emoji-mart']}>
    <NimblePicker
      set='facebook'
      data={data}
      sheetSize={32}
      perLine={isSmallViewport ? 6 : 9}
      exclude={exclude}
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
