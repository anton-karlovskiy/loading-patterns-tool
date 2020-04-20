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

import GifListItem from './GifListItem';
import styles from './style.module.css';

const gifs = [
  {
    id: 1,
    src: '/assets/images/messenger-gifs/animated-flower-image-0008.gif',
    alt: ''
  },
  {
    id: 2,
    src: '/assets/images/messenger-gifs/animated-flower-image-0015.gif',
    alt: ''
  },
  {
    id: 3,
    src: '/assets/images/messenger-gifs/animated-flower-image-0017.gif',
    alt: ''
  },
  {
    id: 4,
    src: '/assets/images/messenger-gifs/animated-flower-image-0050.gif',
    alt: ''
  }
];

const GifList = () => (
  <div className={styles['gif-list']}>
    {gifs.map(gif => <GifListItem key={gif.id} src={gif.src} />)}
  </div>
);

export default GifList;
