
import React from 'react';
import clsx from 'clsx';

import styles from './style.module.css';

const AriaText = ({ text, className, ...rest }) => (
  text && <div {...rest} className={clsx(styles['aria-text'], className)}>{text}</div>
);

export default AriaText;
