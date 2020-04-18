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

import { appTitle } from 'utils/constants';
import Toolbar from './Toolbar';
import InfoOutlineIcon from 'components/SvgIcons/InfoOutlineIcon';
import VideoCamIcon from 'components/SvgIcons/VideoCamIcon';
import PhoneInTalkIcon from 'components/SvgIcons/PhoneInTalkIcon';
import withDelayedRender from 'hoc/withDelayedRender';
import AriaText from 'components/PreviewArea/AriaText';
import MessageList from './MessageList';
import MessageListSkeleton from './MessageList/skeleton';
import MessageInput from './MessageInput';
import MessageInputSkeleton from './MessageInput/skeleton';
import EmojiPicker from './EmojiPicker';
import EmojiPickerSkeleton from './EmojiPicker/skeleton';
import GifFinder from './GifFinder';
import GifFinderSkeleton from './GifFinder/skeleton';
import Loading from 'components/PreviewArea/Loading';
import previewAdjustments, { GIF_FINDER_LABEL } from 'utils/data/preview-adjustments';
import styles from './style.module.css';

const Channel = ({ className, selectedPatternId, ariaText, skeletonUIChecked }) => {
  const {
    messageList,
    messageInput,
    emojiPicker,
    gifFinder
  } = useMemo(() => previewAdjustments[selectedPatternId], [selectedPatternId]);

  return (
    <div className={className}>
      <div className={styles['channel']}>
        <Toolbar
          title={appTitle}
          rightItems={[
            <InfoOutlineIcon key='info' />,
            <VideoCamIcon key='video' />,
            <PhoneInTalkIcon key='phone' />
          ]} />
        <MessageList
          key={`message-list-${selectedPatternId}`}
          delay={messageList.delay}
          fallback={messageList.fallbackShown && (
            skeletonUIChecked ? (
              <MessageListSkeleton />
            ) : (
              <Loading />
            )
          )}
          ariaText={messageList.label} />
        <MessageInput
          key={`message-input-${selectedPatternId}`}
          delay={messageInput.delay}
          fallback={messageInput.fallbackShown && (
            skeletonUIChecked ? (
              <MessageInputSkeleton />
            ) : (
              <Loading />
            )
          )}
          ariaText={messageInput.label}
          rightItems={[
            <EmojiPicker
              key={`emoji-picker-${selectedPatternId}`}
              delay={emojiPicker.delay}
              fallback={emojiPicker.fallbackShown && (
                skeletonUIChecked ? (
                  <EmojiPickerSkeleton />
                ) : (
                  <Loading />
                )
              )}
              emojiMartDelay={emojiPicker.emojiMartDelay}
              defaultOpen={emojiPicker.defaultOpen}
              ariaText={emojiPicker.label} />
          ]} />
        <AriaText className={styles['aria-text']} text={ariaText} />
      </div>
      {gifFinder ? (
        <GifFinder
          key={`gif-finder-${selectedPatternId}`}
          delay={gifFinder.delay}
          ariaText={gifFinder.label}
          fallback={gifFinder.fallbackShown && (
            skeletonUIChecked ? (
              <GifFinderSkeleton delay={200} />
            ) : (
              <Loading />
            )
          )} />
      ) : (
        <AriaText
          text={GIF_FINDER_LABEL}
          className={styles['gif-finder-availability']} />
      )}
    </div>
  );
};

export default withDelayedRender(Channel);
