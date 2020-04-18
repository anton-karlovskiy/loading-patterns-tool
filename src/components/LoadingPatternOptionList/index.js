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

import LoadingPatternOptionListItem from './LoadingPatternOptionListItem';
import { getLoadingPatterns } from 'utils/data/loading-patterns';
import styles from './style.module.css';

const LoadingPatternOptionList = ({ selectedOptionId, selectOption, skeletonUIChecked }) => {
  const loadingPatterns = useMemo(() => getLoadingPatterns(skeletonUIChecked), [skeletonUIChecked]);

  return (
    <div className={styles['loading-pattern-option-list']}>
      <h3 className={styles['category-title']}>
        <strong>Category</strong>
      </h3>
      <select
        value={selectedOptionId}
        className={styles['mobile']}
        onChange={selectOption}>
        {loadingPatterns.map(loadingPattern => {
          return (
            <option
              key={loadingPattern.id}
              value={loadingPattern.id}>
              {loadingPattern.optionName}
            </option>
          );
        })}
      </select>
      <div className={styles['desktop']}>
        {loadingPatterns.map(loadingPattern => {
          const checked = loadingPattern.id === selectedOptionId;
          return (
            <LoadingPatternOptionListItem
              checked={checked}
              selectOption={selectOption}
              key={loadingPattern.id}
              value={loadingPattern.id}
              caption={loadingPattern.optionName} />
          );
        })}
      </div>
    </div>
  );
};

export default LoadingPatternOptionList;
