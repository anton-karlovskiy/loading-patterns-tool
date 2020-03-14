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

import ReactCodeBlock from 'components/ReactCodeBlock';
import styles from './style.module.css';
import { reactLoadingPatterns } from 'utils/data/concepts';

const CodeSnippetArea = ({ selectedPatternId, className }) => {
  const pattern = reactLoadingPatterns.find(reactLoadingPattern => reactLoadingPattern.id === selectedPatternId);

  return (
    <div className={clsx(styles['root'], className)}>
      <ReactCodeBlock
        linesInPrimary={pattern.linesInPrimary}
        linesInSecondary={pattern.linesInSecondary}
        value={pattern.codeSnippet} />
    </div>
  );
};

export default CodeSnippetArea;
