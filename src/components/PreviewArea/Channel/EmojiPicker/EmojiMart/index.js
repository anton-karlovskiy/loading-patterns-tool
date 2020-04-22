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

import React from 'react';
import { facebookData } from './dummy-data';
import { NimblePicker } from 'emoji-mart';

import AriaText from 'components/PreviewArea/AriaText';
import styles from './style.module.css';
import { checkIsSmallViewport } from 'utils/helpers';
import withDelayedRender from 'hoc/withDelayedRender';

const isSmallViewport = checkIsSmallViewport();
const exclude = isSmallViewport ? [
  'flags',
  'symbols',
  'objects',
  'places',
  'activity',
  'recent',
  'search'
]: [
  'recent',
  'search'
];

const EmojiMart = ({ ariaText }) => (
  <div className={styles['emoji-mart']}>
    <NimblePicker
      set='facebook'
      data={facebookData}
      sheetSize={16}
      perLine={isSmallViewport ? 6 : 9}
      exclude={exclude}
      showSkinTones={false}
      useButton={false}
      emojiTooltip={false}
      title=''
      backgroundImageFn={((set, sheetSize) => `/assets/images/emoji-sheets/${set}/${sheetSize}.png`)}
      style={{
        position: 'absolute',
        bottom: '36px',
        right: 0
      }} />
    <AriaText className={styles['aria-text']} text={ariaText} />
  </div>
);

export default withDelayedRender(EmojiMart);
