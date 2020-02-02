
import React from 'react';

import ConceptOptionListItem from './ConceptOptionListItem';
import { reactLoadingPatterns } from 'utils/data/concepts';

const ConceptOptionList = ({ selectedOptionId, selectOption, className }) => (
  <div className={className}>
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
);

export default ConceptOptionList;
