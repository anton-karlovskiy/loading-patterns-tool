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
// ray test touch <
import PreviewArea from 'components/PreviewArea';
// ray test touch >
import ConceptOptionList from 'components/ConceptOptionList';
import TextDescription from 'components/TextDescription';
import { reactLoadingPatterns } from 'utils/data/concepts';
// ray test touch <
import { appTitle } from 'utils/constants';
// ray test touch >
import styles from './style.module.css';

const checkHashWithPatternId = hashWithoutSharp => {
  const isMatchedWithPatternId = reactLoadingPatterns.findIndex(reactLoadingPattern => reactLoadingPattern.id === hashWithoutSharp) > -1;
  return isMatchedWithPatternId;
};

const ReactLoadingPatterns = () => {
  const [selectedPatternId, setSelectedPatternId] = useState(reactLoadingPatterns[0].id);
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

  return (
    <div>
      <h2>{appTitle}</h2>
      <div className={styles['upper-section']}>
        <ConceptOptionList
          selectOption={selectPatternHandler}
          selectedOptionId={selectedPatternId} />
        {/* ray test touch < */}
        <div className={styles['left-side']}>
          <PreviewArea />
          <CodeSnippetArea selectedPatternId={selectedPatternId} />
        </div>
        {/* ray test touch > */}
      </div>
      <TextDescription selectedPatternId={selectedPatternId} />
    </div>
  );
};

export default ReactLoadingPatterns;
