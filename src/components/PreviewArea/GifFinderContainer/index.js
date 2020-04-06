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
import React from 'react';

import Loading from 'components/PreviewArea/Loading';
import AriaText from 'components/PreviewArea/AriaText';
import { LOADING_PATTERN_IDS } from 'utils/constants';
import useIntersect from 'utils/hooks/use-intersect';
import GifFinder from './GifFinder';
import previewAdjustments from 'utils/data/preview-adjustments';
import styles from './style.module.css';

const GifFinderContainer = ({ selectedPatternId, className }) => {
  const [ref, entry] = useIntersect({threshold: 0.1});
  const intersectionRatio = entry.intersectionRatio;
  const { gifFinder } = previewAdjustments[selectedPatternId];

  console.log('[PreviewArea] intersectionRatio of GifFinder => ', intersectionRatio);

  return (
    <div
      className={className}
      ref={ref}>
      {selectedPatternId === LOADING_PATTERN_IDS.IMPORT_ON_VISIBILITY && intersectionRatio > 0.1 ? (
        <GifFinder
          key={`gif-finder-${selectedPatternId}`}
          delay={gifFinder.delay}
          fallback={gifFinder.fallbackShown && <Loading />} />
      ) : (
        <AriaText
          text='GifFinder component is loaded based on Import on Visibility pattern when you select Import on visibility from Category.'
          className={styles['aria-text']} />
      )}
    </div>
  );
};

export default GifFinderContainer;
// ray test touch >
