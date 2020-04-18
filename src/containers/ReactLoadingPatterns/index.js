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

import React, { useState, useEffect } from 'react';

import CodeSnippetArea from 'components/CodeSnippetArea';
import PreviewArea from 'components/PreviewArea';
import LoadingPatternOptionList from 'components/LoadingPatternOptionList';
import TextDescription from 'components/TextDescription';
import SkeletonUICheckbox from 'components/SkeletonUICheckbox';
import Title from 'components/Title';
import LOADING_PATTERN_IDS from 'utils/data/loading-pattern-ids';
import styles from './style.module.css';

const checkHashWithPatternId = hashWithoutSharp => {
  return !!LOADING_PATTERN_IDS[hashWithoutSharp];
};

const ReactLoadingPatterns = () => {
  const [selectedPatternId, setSelectedPatternId] = useState(LOADING_PATTERN_IDS.STATIC_IMPORT);
  const [skeletonUIChecked, setSkeletonUIChecked] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    const hashWithoutSharp = hash.replace('#', '');
    if (checkHashWithPatternId(hashWithoutSharp)) {
      setSelectedPatternId(hashWithoutSharp);
    }
  }, []);

  const selectPatternHandler = event => {
    window.history.pushState('object or string', 'Title', `/#${event.currentTarget.value}`);
    setSelectedPatternId(event.currentTarget.value);
  };

  const checkSkeletonUIHandler = checked => {
    setSkeletonUIChecked(checked);
  };

  return (
    <div>
      <Title />
      <div className={styles['upper-section']}>
        <div className={styles['right-side']}>
          <LoadingPatternOptionList
            selectOption={selectPatternHandler}
            selectedOptionId={selectedPatternId}
            skeletonUIChecked={skeletonUIChecked} />
          <SkeletonUICheckbox
            checked={skeletonUIChecked}
            onChange={checkSkeletonUIHandler} />
        </div>
        <div className={styles['left-side']}>
          <CodeSnippetArea
            selectedPatternId={selectedPatternId}
            skeletonUIChecked={skeletonUIChecked} />
          <PreviewArea selectedPatternId={selectedPatternId} />
        </div>
      </div>
      <TextDescription
        selectedPatternId={selectedPatternId}
        skeletonUIChecked={skeletonUIChecked} />
    </div>
  );
};

export default ReactLoadingPatterns;
