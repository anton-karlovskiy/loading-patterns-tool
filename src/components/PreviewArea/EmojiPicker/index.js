
import React, { useState } from 'react';
import 'emoji-mart/css/emoji-mart.css';
import data from 'emoji-mart/data/facebook.json';
import { NimblePicker } from 'emoji-mart';

import TagFacesIcon from 'components/SvgIcons/TagFacesIcon';
import useClickAway from 'utils/hooks/use-click-away';
import './EmojiPicker.css';
import withDelayedRender from 'hoc/withDelayedRender';

const EmojiPicker = () => {
  const [open, setOpen] = useState(false);
  const openEmojiPickerHandler = () => {
    setOpen(true);
  };
  const closeEmojiPickerHandler = () => {
    setOpen(false);
  };
  const onTagFacesIconClickHandler = () => {
    open ? closeEmojiPickerHandler() : openEmojiPickerHandler();
  };
  const node = useClickAway({ onClickOutside: closeEmojiPickerHandler });
  
  return (
    <div ref={node} className='emoji-picker'>
      <TagFacesIcon
        onClick={onTagFacesIconClickHandler}
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
          style={{
            position: 'absolute',
            bottom: '32px',
            right: 0
          }} />
      )}
    </div>
  );
};

export default withDelayedRender(EmojiPicker);
