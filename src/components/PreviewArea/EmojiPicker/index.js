
// ray test touch <
import React, { useEffect, useState, useRef } from 'react';
import 'emoji-mart/css/emoji-mart.css';
import data from 'emoji-mart/data/facebook.json';
import { NimblePicker } from 'emoji-mart';

import TagFacesIcon from 'components/SvgIcons/TagFacesIcon';
import './EmojiPicker.css';

const EmojiPicker = () => {
  const node = useRef();
  const [open, setOpen] = useState(false);
  const handleClick = event => {
    if (node.current.contains(event.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const openEmojiPickerHandler = () => {
    setOpen(true);
  };

  return (
    <div ref={node} className='emoji-picker'>
      <TagFacesIcon
        onClick={openEmojiPickerHandler}
        type='button'
        style={{padding: '4px', pointerEvents: 'auto'}} />
      {open && (
        <NimblePicker
          set='facebook'
          data={data}
          sheetSize={32}
          exclude={['recent', 'search']}
          showSkinTones={false}
          useButton={false}
          emojiTooltip={false}
          title=''
          set='google'
          style={{
            position: 'absolute',
            bottom: '32px',
            right: 0
          }} />
      )}
    </div>
  );
};

export default EmojiPicker;
// ray test touch >
