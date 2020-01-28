
import React from 'react';

import CodeArea from 'components/CodeArea';
import ConceptOptionList from 'components/ConceptOptionList';
import TextDescription from 'components/TextDescription';
import styles from './style.module.css';

const ReactLoadingPatterns = () => {
  return (
    <div className={styles['flex']}>
      <div className={styles['grown-flex']}>
        <CodeArea />
        <TextDescription />
      </div>
      <ConceptOptionList />
    </div>
  );
};

export default ReactLoadingPatterns;
