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

import AriaText from 'components/PreviewArea/AriaText';
import { LOADING_PATTERN_IDS } from 'utils/constants';
import GifFinder from './GifFinder';
import styles from './style.module.css';
import GifFinderSkeleton from 'components/PreviewArea/GifFinderContainer/GifFinder/skeleton';
import Loading from 'components/PreviewArea/Loading';
import previewAdjustments, { FALLBACK_TYPES } from 'utils/data/preview-adjustments';

const { gifFinder } = previewAdjustments[LOADING_PATTERN_IDS.IMPORT_ON_VISIBILITY];

const GifFinderContainer = ({ selectedPatternId, className }) => {
  return (
    <div className={className}>
      {selectedPatternId === LOADING_PATTERN_IDS.IMPORT_ON_VISIBILITY ? (
        <GifFinder
          key={`gif-finder-${selectedPatternId}`}
          delay={gifFinder.delay}
          ariaText={gifFinder.label}
          fallback={gifFinder.fallbackType && (
            gifFinder.fallbackType === FALLBACK_TYPES.SKELETON_UI ? (
              <GifFinderSkeleton delay={200} />
            ) : (
              <Loading />
            )
          )} />
      ) : (
        <AriaText
          text={gifFinder.label}
          className={styles['aria-text-elsewhere']} />
      )}
    </div>
  );
};

export default GifFinderContainer;
