
import React, { useState } from 'react';

import TagFacesIcon from 'components/SvgIcons/TagFacesIcon';
import useClickAway from 'utils/hooks/use-click-away';
import './EmojiPicker.css';
import withDelayedRender from 'hoc/withDelayedRender';
import EmojiMart from './EmojiMart';

const EmojiPicker = ({ ariaText, martDelay = 0 }) => {
  const [open, setOpen] = useState(true);

  const openEmojiPickerHandler = () => {
    !open && setOpen(true);
  };
  const closeEmojiPickerHandler = () => {
    // ray test touch <
    // open && setOpen(false);
    // ray test touch >
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
      {open && <EmojiMart ariaText={ariaText} delay={martDelay} />}
    </div>
  );
};

export default withDelayedRender(EmojiPicker);
