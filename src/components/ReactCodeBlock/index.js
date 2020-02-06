
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
    style={okaidia}>
    {value}
  </SyntaxHighlighter>
);

export default ReactCodeBlock;
