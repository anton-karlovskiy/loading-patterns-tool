
import React from 'react';
import 'github-markdown-css';

import styles from './style.module.css';

const GitHubMarkdownWrapper = ({ children }) => (
  <div className={{...styles}}>
    {children}
  </div>
);

export default GitHubMarkdownWrapper;
