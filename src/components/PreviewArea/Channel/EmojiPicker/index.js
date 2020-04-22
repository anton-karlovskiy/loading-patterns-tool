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

import React, { useState, lazy, Suspense } from 'react';

import TagFacesIcon from 'components/SvgIcons/TagFacesIcon';
import useClickAway from 'utils/hooks/use-click-away';
import withDelayedRender from 'hoc/withDelayedRender';
import './EmojiPicker.css';

const LazyEmojiMart = lazy(() => import(/* webpackChunkName: 'emoji-mart' */ './EmojiMart'));

const WIDTH = 36;
const HEIGHT = 36;

const EmojiPicker = ({ ariaText, emojiMartDelay = 0, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  const openEmojiPickerHandler = () => {
    !open && setOpen(true);
  };
  const closeEmojiPickerHandler = () => {
    // TODO: block for now
    // open && setOpen(false);
  };

  const onTagFacesIconClickHandler = () => {
    open ? closeEmojiPickerHandler() : openEmojiPickerHandler();
  };

  const node = useClickAway({onClickOutside: closeEmojiPickerHandler});

  return (
    <div
      style={{width: `${WIDTH}px`, height: `${HEIGHT}px`}}
      ref={node}
      className='emoji-picker'>
      <TagFacesIcon
        width={WIDTH}
        height={HEIGHT}
        onClick={onTagFacesIconClickHandler}
        type='button'
        style={{pointerEvents: 'auto'}} />
      {open && (
        <Suspense fallback={null}>
          <LazyEmojiMart ariaText={ariaText} delay={emojiMartDelay} />
        </Suspense>
      )}
    </div>
  );
};

export default withDelayedRender(EmojiPicker);
