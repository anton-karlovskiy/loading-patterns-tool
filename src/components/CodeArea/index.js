
import React from 'react';

import GitHubMarkdownWrapper from 'hoc/GitHubMarkdownWrapper';
import ReactCodeBlock from 'components/ReactCodeBlock';

import styles from './style.module.css';

const CodeArea = () => (
  <GitHubMarkdownWrapper className={styles['root']}>
    <ReactCodeBlock value={`import FOOTER_MENU_ITEMS from 'utils/links/footer-menu-items';`} />
  </GitHubMarkdownWrapper>
);

export default CodeArea;
