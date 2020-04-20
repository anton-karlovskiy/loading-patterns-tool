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

import React, { useState } from 'react';

import CodeSnippetArea from 'components/CodeSnippetArea';
import PreviewArea from 'components/PreviewArea';
import LoadingPatternOptionList from 'components/LoadingPatternOptionList';
import TextDescription from 'components/TextDescription';
import SkeletonUICheckbox from 'components/SkeletonUICheckbox';
import Heading from 'components/Heading';
import LOADING_PATTERN_IDS from 'utils/data/loading-pattern-ids';
import { QUERY_PARAMS } from 'utils/constants';
import styles from './style.module.css';

const checkHashWithPatternId = hashWithoutSharp => {
  return Object.values(LOADING_PATTERN_IDS).includes(hashWithoutSharp);
};

const ReactLoadingPatterns = () => {
  const hash = window.location.hash;
  const hashWithoutSharp = hash.replace('#', '');
  const [selectedPatternId, setSelectedPatternId] = useState(
    checkHashWithPatternId(hashWithoutSharp)
      ? hashWithoutSharp
      : LOADING_PATTERN_IDS.STATIC_IMPORT
  );
  const queryString = window.location.search;
  const queryParams = new URLSearchParams(queryString);
  const skeletonUIFlag = queryParams.get(QUERY_PARAMS.SKELETON_UI) === 'true';
  const [skeletonUIChecked, setSkeletonUIChecked] = useState(skeletonUIFlag);

  const selectPatternHandler = newPatternId => {
    window.history.pushState(null, null, `/?${QUERY_PARAMS.SKELETON_UI}=${skeletonUIChecked}#${newPatternId}`);
    setSelectedPatternId(newPatternId);
  };

  const checkSkeletonUIHandler = newChecked => {
    window.history.pushState(null, null, `/?${QUERY_PARAMS.SKELETON_UI}=${newChecked}#${selectedPatternId}`);
    setSkeletonUIChecked(newChecked);
  };

  return (
    <div>
      <Heading />
      <div className={styles['upper-section']}>
        <div className={styles['right-side']}>
          <LoadingPatternOptionList
            onChange={selectPatternHandler}
            value={selectedPatternId}
            skeletonUIChecked={skeletonUIChecked} />
          <SkeletonUICheckbox
            checked={skeletonUIChecked}
            onChange={checkSkeletonUIHandler} />
        </div>
        <div className={styles['left-side']}>
          <CodeSnippetArea
            selectedPatternId={selectedPatternId}
            skeletonUIChecked={skeletonUIChecked} />
          <PreviewArea
            selectedPatternId={selectedPatternId}
            skeletonUIChecked={skeletonUIChecked} />
        </div>
      </div>
      <TextDescription
        selectedPatternId={selectedPatternId}
        skeletonUIChecked={skeletonUIChecked} />
    </div>
  );
};

export default ReactLoadingPatterns;
