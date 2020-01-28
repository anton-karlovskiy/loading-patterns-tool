
import React from 'react';

import ConeptOptionListItem from './ConeptOptionListItem';
import { reactLoadingPatterns } from 'utils/data/concepts';
import styles from './style.module.css';

const ConceptOptionList = ({ selectedOptionId, selectOption }) => (
  <div className={styles['flex-column']}>
    {reactLoadingPatterns.map(reactLoadingPattern => {
      const checked = reactLoadingPattern.id === selectedOptionId;
      return (
        <ConeptOptionListItem
          checked={checked}
          selectOption={selectOption}
          key={reactLoadingPattern.id}
          value={reactLoadingPattern.id}
          caption={reactLoadingPattern.optionName} />
      );
    })}
  </div>
);

export default ConceptOptionList;
