
import React from 'react';
import clsx from 'clsx';

import styles from './style.module.css';

const AriaText = ({ text, className, ...rest }) => (
  <span {...rest} className={clsx(styles['aria-text'], className)}>{text}</span>
);

export default AriaText;
