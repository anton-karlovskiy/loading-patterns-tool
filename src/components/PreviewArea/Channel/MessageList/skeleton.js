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

import MessageSkeleton from 'components/PreviewArea/Channel/MessageList/Message/skeleton';
import styles from './style.module.css';

const MessageListSkeleton = () => {
  return (
    <div className={styles['message-list']}>
      <MessageSkeleton
        numberOfLines={3}
        isMine
        startsSequence
        endsSequence />
      <MessageSkeleton
        numberOfLines={3}
        startsSequence />
      <MessageSkeleton
        numberOfLines={4}
        endsSequence />
      <MessageSkeleton
        numberOfLines={4}
        isMine
        startsSequence />
      <MessageSkeleton
        numberOfLines={3}
        isMine
        endsSequence />
    </div>
  );
};

export default MessageListSkeleton;
