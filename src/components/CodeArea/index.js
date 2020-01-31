
import React from 'react';
import clsx from 'clsx';

import ReactCodeBlock from 'components/ReactCodeBlock';
import styles from './style.module.css';
import { reactLoadingPatterns } from 'utils/data/concepts';

const CodeArea = ({ selectedPatternId, className }) => {
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

export default CodeArea;
