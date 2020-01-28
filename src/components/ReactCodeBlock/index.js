
import React from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import okaidia from 'react-syntax-highlighter/dist/esm/styles/prism/okaidia';

const ReactCodeBlock = ({ value, linesInPrimary = [], linesInSecondary = [] }) => (
  <SyntaxHighlighter
    wrapLines={true}
    lineProps={lineNumber => {
      let style = {display: 'block'};
      if (linesInPrimary.includes(lineNumber)) {
        style.backgroundColor = '#495f53';
      } else if (linesInSecondary.includes(lineNumber)) {
        style.backgroundColor = '#5a5f3e';
      }
      return {style};
    }}
    showLineNumbers
    language='jsx'
    style={okaidia}>
    {value}
  </SyntaxHighlighter>
);

export default ReactCodeBlock;
