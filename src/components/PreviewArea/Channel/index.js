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

// ray test touch <
import React, { useMemo, lazy, Suspense } from 'react';
// ray test touch >
import clsx from 'clsx';

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
// ray test touch <
import EmojiPicker from './EmojiPicker';
import EmojiPickerSkeleton from './EmojiPicker/skeleton';
// ray test touch >
import Loading from 'components/PreviewArea/Loading';
import previewAdjustments, { GIF_FINDER_LABEL } from 'utils/data/preview-adjustments';
import styles from './style.module.css';

// ray test touch <
// import GifFinder from './GifFinder';
// import GifFinderSkeleton from './GifFinder/skeleton';
const PrefetchedGifFinder = lazy(
  () => import(/* webpackPrefetch: true, webpackChunkName: 'gif-finder' */ './GifFinder')
);
const PrefetchedGifFinderSkeleton = lazy(
  () => import(/* webpackPrefetch: true, webpackChunkName: 'gif-finder-skeleton' */ './GifFinder/skeleton')
);
// ray test touch >

const Channel = ({ className, selectedPatternId, ariaText, skeletonUIChecked }) => {
  const {
    messageList,
    messageInput,
    emojiPicker,
    gifFinder
  } = useMemo(() => previewAdjustments[selectedPatternId], [selectedPatternId]);

  return (
    <div className={className}>
      <div className={clsx(styles['messenger'], styles['messenger--height'])}>
        <Toolbar
          title={appTitle}
          rightItems={[
            <InfoOutlineIcon key='info' />,
            <VideoCamIcon key='video' />,
            <PhoneInTalkIcon key='phone' />
          ]} />
        <MessageList
          key={`message-list-${selectedPatternId}-${skeletonUIChecked}`}
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
          key={`message-input-${selectedPatternId}-${skeletonUIChecked}`}
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
            // ray test touch <
            <EmojiPicker
              key={`emoji-picker-${selectedPatternId}-${skeletonUIChecked}`}
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
            // ray test touch >
          ]} />
        <AriaText className={styles['aria-text']} text={ariaText} />
      </div>
      {gifFinder ? (
        <Suspense fallback={null}>
          <PrefetchedGifFinder
            key={`gif-finder-${selectedPatternId}-${skeletonUIChecked}`}
            delay={gifFinder.delay}
            ariaText={gifFinder.label}
            fallback={gifFinder.fallbackShown && (
              skeletonUIChecked ? (
                <PrefetchedGifFinderSkeleton delay={200} />
              ) : (
                <Loading />
              )
            )} />
        </Suspense>
      ) : (
        <AriaText
          text={GIF_FINDER_LABEL}
          className={styles['gif-finder-availability']} />
      )}
    </div>
  );
};

export default withDelayedRender(Channel);
