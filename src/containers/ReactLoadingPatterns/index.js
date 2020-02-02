
import React, { useState, useEffect } from 'react';

import CodeArea from 'components/CodeArea';
import ConceptOptionList from 'components/ConceptOptionList';
import TextDescription from 'components/TextDescription';
import styles from './style.module.css';
import { reactLoadingPatterns } from 'utils/data/concepts';

const checkHashWithPatternId = hashWithoutSharp => {
  const isMatchedWithPatternId = reactLoadingPatterns.findIndex(reactLoadingPattern => reactLoadingPattern.id === hashWithoutSharp) > -1;
  return isMatchedWithPatternId;
};

const ReactLoadingPatterns = () => {
  const [selectedPatternId, setSelectedPatternId] = useState(reactLoadingPatterns[0].id);
  useEffect(() => {
    const hash = window.location.hash;
    const hashWithoutSharp = hash.replace('#', '');
    if (checkHashWithPatternId(hashWithoutSharp)) {
      setSelectedPatternId(hashWithoutSharp);
    }
  }, []);

  const selectPatternHandler = event => {
    window.history.pushState('object or string', 'Title', `/#${event.currentTarget.value}`);
    setSelectedPatternId(event.currentTarget.value);
  };

  return (
    <div className={styles['root']}>
      <h2>React Loading Patterns</h2>
      <div className={styles['flex']}>
        <ConceptOptionList
          className={styles['concept-option-list']}
          selectOption={selectPatternHandler}
          selectedOptionId={selectedPatternId} />
        <CodeArea
          className={styles['code-area']}
          selectedPatternId={selectedPatternId} />
      </div>
      <TextDescription selectedPatternId={selectedPatternId} />
    </div>
  );
};

export default ReactLoadingPatterns;
