
import React, { useEffect, useState, createElement } from 'react';

import TagFacesIcon from 'components/SvgIcons/TagFacesIcon';
import useClickAway from 'utils/hooks/use-click-away';
import './EmojiPicker.css';
import withDelayedRender from 'hoc/withDelayedRender';

const EmojiPicker = ({ ariaText }) => {
  const [emojiMartEl, setEmojiMartEl] = useState(null);
  useEffect(() => {
    openEmojiPickerHandler();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openEmojiPickerHandler = () => {
    !emojiMartEl && import(/* webpackChunkName: "emoji-mart" */ './EmojiMart')
      .then(module => module.default)
      .then(emojiMart => {
        setEmojiMartEl(createElement(emojiMart, {ariaText}));
      });
  };
  const closeEmojiPickerHandler = () => {
    emojiMartEl && setEmojiMartEl(null);
  };

  const onTagFacesIconClickHandler = () => {
    emojiMartEl ? closeEmojiPickerHandler() : openEmojiPickerHandler();
  };
  const node = useClickAway({onClickOutside: closeEmojiPickerHandler});
  
  return (
    <div ref={node} className='emoji-picker'>
      <TagFacesIcon
        onClick={onTagFacesIconClickHandler}
        type='button'
        style={{padding: '4px', pointerEvents: 'auto'}} />
      {emojiMartEl}
    </div>
  );
};

export default withDelayedRender(EmojiPicker);
