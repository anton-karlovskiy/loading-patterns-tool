
import React from 'react';

import ConeptOptionListItem from './ConeptOptionListItem';
import { reactLoadingPatterns } from 'utils/data/concepts';
import styles from './style.module.css';

const ConceptOptionList = () => (
  <div className={styles['flex-column']}>
    {reactLoadingPatterns.map(reactLoadingPattern => (
      <ConeptOptionListItem
        key={reactLoadingPattern.id}
        value={reactLoadingPattern.id}
        caption={reactLoadingPattern.optionName} />
    ))}
  </div>
);

export default ConceptOptionList;
