
import React from 'react';
import 'emoji-mart/css/emoji-mart.css';
import data from 'emoji-mart/data/facebook.json';
import { NimblePicker } from 'emoji-mart';

const EmojiMart = () => (
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
);

export default EmojiMart
