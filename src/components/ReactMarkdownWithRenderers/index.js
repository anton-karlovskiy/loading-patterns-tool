
import ReactMarkdown from 'react-markdown';

import ReactCodeBlock from 'components/ReactCodeBlock';

const ReactMarkdownWithRenderers = ({ source, ...rest }) => (
  <ReactMarkdown
    source={source}
    renderers={{
      code: ReactCodeBlock
    }}
    {...rest} />
);

export default ReactMarkdownWithRenderers;
