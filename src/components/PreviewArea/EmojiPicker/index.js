
import React, { useState } from 'react';

import TagFacesIcon from 'components/SvgIcons/TagFacesIcon';
import useClickAway from 'utils/hooks/use-click-away';
import './EmojiPicker.css';
import withDelayedRender from 'hoc/withDelayedRender';
import EmojiMart from './EmojiMart';

const EmojiPicker = () => {
  const [open, setOpen] = useState(true);

  const openEmojiPickerHandler = () => {
    setOpen(true);
  };
  const closeEmojiPickerHandler = () => {
    setOpen(false);
  };

  const onTagFacesIconClickHandler = () => {
    open ? closeEmojiPickerHandler() : openEmojiPickerHandler();
  };
  const node = useClickAway({onClickOutside: closeEmojiPickerHandler});
  
  return (
    <div ref={node} className='emoji-picker'>
      <TagFacesIcon
        onClick={onTagFacesIconClickHandler}
        type='button'
        style={{padding: '4px', pointerEvents: 'auto'}} />
      {open && (
        <EmojiMart />
      )}
    </div>
  );
};

export default withDelayedRender(EmojiPicker);
