
import React from 'react';
// TODO: unused
// import 'github-markdown-css'; 

import styles from './style.module.css';

const GitHubMarkdownWrapper = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);

export default GitHubMarkdownWrapper;
