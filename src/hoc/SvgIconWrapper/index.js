
import React, { cloneElement } from 'react';
import clsx from 'clsx';

import './SvgIconWrapper.css';

const SvgIconWrapper = ({
  style = {padding: '4px'},
  width = 28,
  height = 28,
  type,
  className,
  viewBox = '0 0 24 24',
  children,
  ...rest
}) => (
  <svg
    {...rest}
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    className={clsx('icon', {['icon-button']: type === 'button'}, className)}
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'>
      {children.constructor === Array
        ? children.map((child, index) => cloneElement(child, {key: index.toString()}))
        : cloneElement(children)}
  </svg>
);

export default SvgIconWrapper;
