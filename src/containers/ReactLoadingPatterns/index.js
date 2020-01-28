
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
    <div className={styles['flex']}>
      <div className={styles['grown-flex']}>
        <CodeArea />
        <TextDescription />
      </div>
      <ConceptOptionList
        selectOption={selectPatternHandler}
        selectedOptionId={selectedPatternId} />
    </div>
  );
};

export default ReactLoadingPatterns;
