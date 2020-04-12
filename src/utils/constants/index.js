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

const appTitle = 'React Loading Patterns';
const LOADING_PATTERN_IDS = {
  STATIC_IMPORT: 'static-import',
  DYNAMIC_IMPORT: 'dynamic-import',
  ROUTE_BASED_CODE_SPLITTING: 'route-based-code-splitting',
  ROUTE_BASED_CODE_SPLITTING_WITH_SKELETON_UI: 'route-based-code-splitting-with-skeleton-ui',
  DYNAMIC_IMPORT_WITH_ERROR_BOUNDARY: 'dynamic-import-with-error-boundary',
  IMPORT_ON_INTERACTION: 'import-on-interaction',
  LOADABLE_COMPONENTS: 'loadable-components',
  LOADABLE_COMPONENTS_SSR: 'loadable-components-ssr',
  STREAMING_RENDERING: 'streaming-rendering',
  PROGRESSIVE_HYDRATION: 'progressive-hydration',
  IMPORT_ON_VISIBILITY: 'import-on-visibility',
  PREFETCH: 'prefetch',
  PRELOAD: 'preload'
};

export {
  appTitle,
  LOADING_PATTERN_IDS
};
