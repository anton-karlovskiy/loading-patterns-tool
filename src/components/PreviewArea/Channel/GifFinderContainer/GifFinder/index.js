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

import React from 'react';
import clsx from 'clsx';

import SearchBar from './SearchBar';
import GifList from './GifList';
import withDelayedRender from 'hoc/withDelayedRender';
import withIfVisible from 'hoc/withIfVisible';
import AriaText from 'components/PreviewArea/AriaText';
import styles from './style.module.css';

const GifFinder = ({ className, ariaText }) => (
  <div
    className={clsx(styles['gif-finder'], className)}>
    <SearchBar />
    <GifList />
    <AriaText
      text={ariaText}
      className={styles['aria-text-visibility']} />
  </div>
);

export default withIfVisible(withDelayedRender(GifFinder));
