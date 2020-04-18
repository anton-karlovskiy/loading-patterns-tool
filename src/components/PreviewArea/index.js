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

import Channel from './Channel';
import ChannelSkeleton from './Channel/skeleton';
import previewAdjustments from 'utils/data/preview-adjustments';
import Loading from 'components/PreviewArea/Loading';
import styles from './style.module.css';

const PreviewArea = ({ selectedPatternId, skeletonUIChecked }) => {
  const {
    channel = {delay: 0, fallbackType: '', label: ''}
  } = useMemo(() => previewAdjustments[selectedPatternId], [selectedPatternId]);

  return (
    <Channel
      key={channel.delay > 0 ? `channel-${selectedPatternId}` : 'channel'}
      delay={channel.delay}
      fallback={channel.fallbackShown && (
        skeletonUIChecked ? (
          <ChannelSkeleton />
        ) : (
          <Loading />
        )
      )}
      ariaText={channel.label}
      className={styles['content']}
      selectedPatternId={selectedPatternId}
      skeletonUIChecked={skeletonUIChecked} />
  );
};

export default PreviewArea;
