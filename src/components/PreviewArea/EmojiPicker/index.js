
import React from 'react';
import 'emoji-mart/css/emoji-mart.css';
import data from 'emoji-mart/data/facebook.json'
import { NimblePicker } from 'emoji-mart'

import TagFacesIcon from 'components/SvgIcons/TagFacesIcon';
import './EmojiPicker.css';

const EmojiPicker = () => {
  return (
    <div className='emoji-picker'>
      <TagFacesIcon
        type='button'
        style={{padding: '4px', pointerEvents: 'auto'}} />
      <NimblePicker
        set='facebook'
        data={data}
        sheetSize={32}
        exclude={['recent', 'search']}
        showSkinTones={false}
        useButton={false}
        emojiTooltip={false}
        // showPreview={false}
        title=''
        set='google'
        style={{
          position: 'absolute',
          bottom: '32px',
          right: 0
        }} />
    </div>
  );
};

export default EmojiPicker;
