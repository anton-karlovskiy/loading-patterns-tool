
import React, { useState } from 'react';

import CodeArea from 'components/CodeArea';
import ConceptOptionList from 'components/ConceptOptionList';
import TextDescription from 'components/TextDescription';
import styles from './style.module.css';
import { reactLoadingPatterns } from 'utils/data/concepts';

const ReactLoadingPatterns = () => {
  const [selectedPatternId, setSelectedPatternId] = useState(reactLoadingPatterns[0].id);

  const selectPatternHandler = event => {
    setSelectedPatternId(event.currentTarget.value);
  };

  return (
    <div className={styles['root']}>
      <h2>React Loading Patterns</h2>
      <div className={styles['flex']}>
        <div className={styles['grown-flex']}>
          <CodeArea
            className={styles['code-area']}
            selectedPatternId={selectedPatternId} />
          <TextDescription selectedPatternId={selectedPatternId} />
        </div>
        <ConceptOptionList
          selectOption={selectPatternHandler}
          selectedOptionId={selectedPatternId} />
      </div>
    </div>
  );
};

export default ReactLoadingPatterns;
