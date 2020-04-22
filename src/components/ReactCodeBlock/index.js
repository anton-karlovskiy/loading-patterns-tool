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
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import okaidia from 'react-syntax-highlighter/dist/esm/styles/prism/okaidia';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const ReactCodeBlock = ({ value, linesInPrimary = [], linesInSecondary = [] }) => (
  <SyntaxHighlighter
    wrapLines
    lineProps={lineNumber => {
      let style = {display: 'block'};
      if (linesInPrimary.includes(lineNumber)) {
        style.backgroundColor = '#495f53';
      } else if (linesInSecondary.includes(lineNumber)) {
        style.backgroundColor = '#5a5f3e';
      }
      return {style};
    }}
    language='jsx'
    // TODO: delete when release
    showLineNumbers
    style={okaidia}>
    {value}
  </SyntaxHighlighter>
);

export default ReactCodeBlock;
