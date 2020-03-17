
import React from 'react';

import './Toolbar.css';

const Toolbar = ({ title, leftItems, rightItems }) => (
  <div className='toolbar'>
    <div className='left-items'>{leftItems}</div>
    <h1 className='toolbar-title'>{title}</h1>
    <div className='right-items'>{rightItems}</div>
  </div>
);

export default Toolbar;
