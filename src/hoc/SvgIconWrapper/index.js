/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { cloneElement } from 'react';
import clsx from 'clsx';

import './SvgIconWrapper.css';

const SvgIconWrapper = ({
  style,
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
    className={clsx('icon', type === 'button' && 'icon-button', className)}
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'>
      {children.constructor === Array
        ? children.map((child, index) => cloneElement(child, {key: index.toString()}))
        : cloneElement(children)}
  </svg>
);

export default SvgIconWrapper;
