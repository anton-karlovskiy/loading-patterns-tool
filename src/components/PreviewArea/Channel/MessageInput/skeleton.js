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
import clsx from 'clsx';

import EmojiPickerSkeleton from 'components/PreviewArea/Channel/EmojiPicker/skeleton';
import skeletonStyles from 'components/PreviewArea/skeleton-style.module.css';
import styles from './style.module.css';

const MessageInputSkeleton = () => (
  <div className={styles['message-input']}>
    <div className={clsx(styles['text-input'], skeletonStyles['skeleton-ui-effect'])} />
    <div className={styles['toolbar-button-set']}>
      <EmojiPickerSkeleton />
    </div>
  </div>
);

export default MessageInputSkeleton;
