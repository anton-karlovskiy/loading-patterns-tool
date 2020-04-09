/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useState } from 'react';

import TagFacesIcon from 'components/SvgIcons/TagFacesIcon';
import useClickAway from 'utils/hooks/use-click-away';
import withDelayedRender from 'hoc/withDelayedRender';
import './EmojiPicker.css';
import EmojiMart from './EmojiMart';

const EmojiPicker = ({ ariaText, emojiMartDelay = 0, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  const openEmojiPickerHandler = () => {
    !open && setOpen(true);
  };
  const closeEmojiPickerHandler = () => {
    open && setOpen(false);
  };

  const onTagFacesIconClickHandler = () => {
    open ? closeEmojiPickerHandler() : openEmojiPickerHandler();
  };
  const node = useClickAway({onClickOutside: closeEmojiPickerHandler});
  
  return (
    <div
      ref={node}
      className='emoji-picker'>
      <TagFacesIcon
        width={36}
        height={36}
        onClick={onTagFacesIconClickHandler}
        type='button'
        style={{pointerEvents: 'auto'}} />
      {open && <EmojiMart ariaText={ariaText} delay={emojiMartDelay} />}
    </div>
  );
};

export default withDelayedRender(EmojiPicker);
