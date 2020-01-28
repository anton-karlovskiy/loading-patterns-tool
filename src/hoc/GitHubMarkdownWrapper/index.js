
import React from 'react';
import 'github-markdown-css';

import './style.css';

const GitHubMarkdownWrapper = ({ children }) => {
  return (
    <div className='markdown-body'>
      {children}
    </div>
    );
};

export default GitHubMarkdownWrapper;
