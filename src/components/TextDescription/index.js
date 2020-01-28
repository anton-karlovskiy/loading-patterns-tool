
import React from 'react';

import GitHubMarkdownWrapper from 'hoc/GitHubMarkdownWrapper';
import ReactMarkdownWithRenderers from 'components/ReactMarkdownWithRenderers';
import { reactLoadingPatterns } from 'utils/data/concepts';

const TextDescription = ({ selectedPatternId }) => {
  const pattern = reactLoadingPatterns.find(reactLoadingPattern => reactLoadingPattern.id === selectedPatternId);

  return (
    <GitHubMarkdownWrapper>
      <ReactMarkdownWithRenderers source={pattern.textDescription} />
    </GitHubMarkdownWrapper>
  );
};

export default TextDescription;
