
import React from 'react';

import GitHubMarkdownWrapper from 'hoc/GitHubMarkdownWrapper';
import ReactCodeBlock from 'components/ReactCodeBlock';
import styles from './style.module.css';
import { reactLoadingPatterns } from 'utils/data/concepts';

const CodeArea = ({ selectedPatternId }) => {
  const pattern = reactLoadingPatterns.find(reactLoadingPattern => reactLoadingPattern.id === selectedPatternId);

  return (
    <GitHubMarkdownWrapper className={styles['root']}>
      <ReactCodeBlock value={pattern.codeSnippet} />
    </GitHubMarkdownWrapper>
  );
};

export default CodeArea;
