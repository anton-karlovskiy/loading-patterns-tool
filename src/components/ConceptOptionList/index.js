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

import ConceptOptionListItem from './ConceptOptionListItem';
import { reactLoadingPatterns } from 'utils/data/concepts';
import styles from './style.module.css';

const ConceptOptionList = ({ selectedOptionId, selectOption }) => (
  <div className={styles['flex-container']}>
    <h3 className={styles['title']}>
      <strong>Category</strong>
    </h3>
    <select
      className={styles['mobile']}
      onChange={selectOption}>
      {reactLoadingPatterns.map(reactLoadingPattern => {
        return (
          <option
            key={reactLoadingPattern.id}
            value={reactLoadingPattern.id}>
            {reactLoadingPattern.optionName}
          </option>
        );
      })}
    </select>
    <div className={styles['desktop']}>
      {reactLoadingPatterns.map(reactLoadingPattern => {
        const checked = reactLoadingPattern.id === selectedOptionId;
        return (
          <ConceptOptionListItem
            checked={checked}
            selectOption={selectOption}
            key={reactLoadingPattern.id}
            value={reactLoadingPattern.id}
            caption={reactLoadingPattern.optionName} />
        );
      })}
    </div>
  </div>
);

export default ConceptOptionList;
