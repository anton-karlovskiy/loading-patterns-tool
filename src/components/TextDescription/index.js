
import React from 'react';

import { reactLoadingPatterns } from 'utils/data/concepts';

const TextDescription = ({ selectedPatternId }) => {
  const pattern = reactLoadingPatterns.find(reactLoadingPattern => reactLoadingPattern.id === selectedPatternId);

  return (
    <div>{pattern.textDescription}</div>
  );
};

export default TextDescription;
