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

import React, { useMemo } from 'react';
import clsx from 'clsx';

import { appTitle } from 'utils/constants';
import Toolbar from './Toolbar';
import InfoOutlineIcon from 'components/SvgIcons/InfoOutlineIcon';
import VideoCamIcon from 'components/SvgIcons/VideoCamIcon';
import PhoneInTalkIcon from 'components/SvgIcons/PhoneInTalkIcon';
import previewAdjustments from 'utils/data/preview-adjustments';
import withDelayedRender from 'hoc/withDelayedRender';
import AriaText from 'components/PreviewArea/AriaText';
import MessageList from './MessageList';
import MessageListSkeleton from 'components/PreviewArea/Channel/MessageList/skeleton';
import MessageInput from './MessageInput';
import MessageInputSkeleton from 'components/PreviewArea/Channel/MessageInput/skeleton';
import EmojiPicker from './EmojiPicker';
import EmojiPickerSkeleton from './EmojiPicker/skeleton';
import styles from './style.module.css';

const Channel = ({ className, selectedPatternId, ariaText }) => {
  const {
    messageList,
    messageInput,
    emojiPicker
  } = useMemo(() => previewAdjustments[selectedPatternId], [selectedPatternId]);

  return (
    <div className={clsx(className, styles['root'])}>
      <Toolbar
        title={appTitle}
        rightItems={[
          <InfoOutlineIcon key='info' />,
          <VideoCamIcon key='video' />,
          <PhoneInTalkIcon key='phone' />
        ]} />
      <MessageList
        key={messageList.delay > 0 ? `message-list-${selectedPatternId}` : 'message-list'}
        delay={messageList.delay}
        fallback={messageList.fallbackShown && <MessageListSkeleton />}
        ariaText={messageList.label} />
      <MessageInput
        key={messageInput.delay > 0 ? `message-input-${selectedPatternId}` : 'message-input'}
        delay={messageInput.delay}
        fallback={messageInput.fallbackShown && <MessageInputSkeleton />}
        ariaText={messageInput.label}
        rightItems={[
          <EmojiPicker
            key={emojiPicker.delay > 0 ? `emoji-picker-${selectedPatternId}` : 'emoji-picker'}
            delay={emojiPicker.delay}
            fallback={emojiPicker.fallbackShown && <EmojiPickerSkeleton />}
            emojiMartDelay={emojiPicker.emojiMartDelay}
            defaultOpen={emojiPicker.defaultOpen}
            ariaText={emojiPicker.label} />
        ]} />
      <AriaText className={styles['aria-text']} text={ariaText} />
    </div>
  );
};

export default withDelayedRender(Channel);
