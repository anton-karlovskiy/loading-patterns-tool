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

const reactLoadingPatterns = [
{
id: 'static-import',
optionName: 'Static Import',
codeSnippet:
`import Messages from './Messages';
import MessageForm from './MessageForm';
import EmojiPicker from './EmojiPicker';

const Chats = () => {
  ...
  return (
    <div>
      <Messages />
      <MessageForm />
      {isEmojiPickerOpen && <EmojiPicker />}
    </div>
  );
};`,
textDescription:
`
The static \`import\` statement is used to import bindings which are exported by another module.  
Imported modules are in \`strict mode\` whether you declare them as such or not. The \`import\` statement cannot be used in embedded scripts unless such script has a \`type="module"\`.  

#### References:  
* [(MDN web docs) import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import,)
`,
linesInPrimary: [1, 2, 3]
},
{
id: 'dynamic-import',
optionName: 'Dynamic Import',
codeSnippet:
`import React, { lazy, Suspense } from 'react';
import Messages from './Messages';
import MessageForm from './MessageForm';

const EmojiPicker = lazy(() => import('./EmojiPicker'));

const Chats = () => {
  ...
  return (
    <div>
      <Messages />
      <MessageForm />
      {isEmojiPickerOpen && (
        <Suspense fallback={<p>Loading...</p>}>
          <EmojiPicker />
        </Suspense>
      )}
    </div>
  );
};`,
textDescription:
`
The \`React.lazy\` method makes it easy to code-split a React application on a component level using dynamic imports.
The \`React.lazy\` function provides a built-in way to separate components in an application into separate chunks of JavaScript with very little legwork. You can then take care of loading states when you couple it with the \`Suspense\` component.  

#### References:  
* [(web.dev) Code splitting with React.lazy and Suspense](https://web.dev/code-splitting-suspense/)  
* [(React docs) Code-Splitting / import()](https://reactjs.org/docs/code-splitting.html#import)
`,
linesInPrimary: [1, 5, 14, 16]
},
{
id: 'route-based-code-splitting',
optionName: 'Route-based code-splitting',
codeSnippet:
`import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import(/* webpackChunkName: "home" */ './Home'));
const Chats = lazy(() => import(/* webpackChunkName: "chats" */ './Chats'));
const Calls = lazy(() => import(/* webpackChunkName: "calls" */ './Calls'));
const Contacts = lazy(() => import(/* webpackChunkName: "contacts" */ './Contacts'));

const App = () => {
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/pages/chats" component={Chats} />
      <Route path="/pages/calls" component={Calls} />
      <Route path="/pages/contacts" component={Contacts} />
    </Switch>
  </Suspense>
};`,
textDescription:
`
Deciding where in your app to introduce code splitting can be a bit tricky. You want to make sure you choose places that will split bundles evenly, but won’t disrupt the user experience.  
A good place to start is with routes. Most people on the web are used to page transitions taking some amount of time to load. You also tend to be re-rendering the entire page at once so your users are unlikely to be interacting with other elements on the page at the same time.  

#### References:  
* [(React docs) Code-Splitting / Route-based code splitting](https://reactjs.org/docs/code-splitting.html#route-based-code-splitting)  
* [(developers.google) Reduce JavaScript Payloads with Code Splitting](https://developers.google.com/web/fundamentals/performance/optimizing-javascript/code-splitting/)  
`,
linesInPrimary: [1, 2, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17]
},
{
id: 'dynamic-with-error-boundary',
optionName: 'Dynamic w/Error Boundary',
codeSnippet:
`import React, { lazy, Suspense, Component } from 'react';
import Messages from './Messages';
import MessageForm from './MessageForm';

const EmojiPicker = lazy(() => import('./EmojiPicker'));

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    return {hasError: true};
  }

  render() {
    if (this.state.hasError) {
      return <p>Loading failed! Please reload.</p>;
    }

    return this.props.children;
  }
}

const Chats = () => {
  ...
  return (
    <ErrorBoundary>
      <div>
        <Messages />
        <MessageForm />
        {isEmojiPickerOpen && (
          <Suspense fallback={<p>Loading...</p>}>
            <EmojiPicker />
          </Suspense>
        )}
      </div>
    </ErrorBoundary>
  );
};`,
textDescription:
`
Error boundaries are React components that \`catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI\` instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.  

#### References:  
* [(React docs) Error Boundaries](https://reactjs.org/docs/error-boundaries.html)  
* [(web.dev) Code splitting with React.lazy and Suspense / Handle loading failures](https://web.dev/code-splitting-suspense/#handle-loading-failures)
`,
linesInPrimary: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 29, 39]
},
{
id: 'import-on-interaction',
optionName: 'Import on interaction',
codeSnippet:
`import React, { useState, createElement } from 'react';
import Messages from './Messages';
import MessageForm from './MessageForm';
import ErrorBoundary from './ErrorBoundary';

const Chats = () => {
  const [emojiPickerComp, setEmojiPickerComp] = useState(null);

  const openEmojiPickerHandler = () => {
    import('./EmojiPicker')
      .then(module => module.default)
      .then(emojiPicker => {
        setEmojiPickerComp(createElement(emojiPicker));
      });
  };

  const closeEmojiPickerHandler = () => {
    setEmojiPickerComp(null);
  };

  return (
    <ErrorBoundary>
      <div>
        <Messages />
        <MessageForm onClick={openEmojiPickerHandler} />
        {emojiPickerComp}
      </div>
    </ErrorBoundary>
  );
};`,
textDescription:
`
The code that makes up the module does not get included into the initial bundle and is now lazy loaded, or provided to the user only when it is needed after the form submission.  

#### References:  
* [(web.dev) Reduce JavaScript payloads with code splitting](https://web.dev/reduce-javascript-payloads-with-code-splitting/)
`,
linesInPrimary: [10, 11, 12, 13, 14]
},
{
id: 'loadable-components',
optionName: 'Loadable Components',
codeSnippet:
`import loadable from '@loadable/component';
import Messages from './Messages';
import MessageForm from './MessageForm';
import ErrorBoundary from './ErrorBoundary';

const EmojiPicker = loadable(() => import('./EmojiPicker'), {
  fallback: <p>Loading...</p>
});

const Chats = () => {
  ...
  return (
    <ErrorBoundary>
      <div>
        <Messages />
        <MessageForm />
        {isEmojiPickerOpen && (
          <EmojiPicker />
        )}
      </div>
    </ErrorBoundary>
  );
};`,
textDescription:
`
\`React.lazy\` is the recommended solution for Code Splitting. It uses Suspense and it is maintained by React.  
But if you feel limited or if you need SSR, then \`@loadable/component\` is the solution.  
Suspense is not available server-side and \`React.lazy\` can only work with Suspense. However \`@loadable/component\` can be used without Suspense. That's why today, \`React.lazy\` is not an option if you need Server Side Rendering.

#### References:  
* [(Loadable Components doc) Comparison with React.lazy](https://loadable-components.com/docs/loadable-vs-react-lazy/)  
* [(Loadable Components doc) Error Boundaries](https://loadable-components.com/docs/error-boundaries/)  
`,
linesInPrimary: [1, 6, 7, 8, 13, 21]
},
{
id: 'loadable-components-ssr',
optionName: 'Loadable Components (SSR)',
codeSnippet:
`// server/index.js
import express from 'express';
import React from 'react';
import { ChunkExtractor } from '@loadable/server';
import { renderToString } from 'react-dom/server';

const app = express();

app.get('*', (req, res) => {
  const statsFile = path.resolve('../dist/loadable-stats.json');
  const extractor = new ChunkExtractor({statsFile});
  const jsx = extractor.collectChunks(<App />);
  const html = renderToString(jsx);
  
  const scriptTags = extractor.getScriptTags();
  const linkTags = extractor.getLinkTags();
  const styleTags = extractor.getStyleTags();

  res.set('content-type', 'text/html');
  res.send(\`
    <!DOCTYPE html>
    <html>
      <head>
      \${linkTags}
      \${styleTags}
      </head>
      <body>
        <div id='root'>\${html}</div>
        \${scriptTags}
      </body>
    </html>
  \`)
});
...

// client/index.js
import React from 'react';
import { hydrate } from 'react-dom';
import { loadableReady } from '@loadable/component';
import App from './App';

loadableReady(() => {
  const root = document.getElementById('root');
  hydrate(<App />, root);
});

// client/App.js
import React from 'react';
import loadable from '@loadable/component';
import Messages from './Messages';
import MessageForm from './MessageForm';
import ErrorBoundary from './ErrorBoundary';

const EmojiPicker = loadable(() => import('./EmojiPicker'), {
  fallback: <p>Loading...</p>
});

const Chats = () => {
  ...
  return (
    <ErrorBoundary>
      <div>
        <Messages />
        <MessageForm />
        {isEmojiPickerOpen && (
          <EmojiPicker />
        )}
      </div>
    </ErrorBoundary>
  );
};

const App = () => (
  <div>
    ...
    <Chats />
  </div>
);

export default App;`,
textDescription:`
1. Install [@loadable/babel-plugin](https://www.npmjs.com/package/@loadable/babel-plugin) and setup \`.babelrc\` in order to transpile your server-side code.
  \`\`\`
  // .babelrc
  {
    "plugins": ["@loadable/babel-plugin"]
  }
  \`\`\`
2. Install [@loadable/webpack-plugin](https://www.npmjs.com/package/@loadable/webpack-plugin) and setup \`webpack\` to generate the stats file \`loadable-stats.json\`.
  \`\`\`
  // webpack.config.js
  const LoadablePlugin = require('@loadable/webpack-plugin');

  module.exports = {
    // ...
    plugins: [new LoadablePlugin()],
  }
  \`\`\`

#### References:  
* [(Loadable Components doc) Server Side Rendering](https://loadable-components.com/docs/server-side-rendering/)
`,
linesInPrimary: [4, 5, 10, 11, 12, 13, 15, 16, 17, 38, 39, 42, 43, 44, 45, 49, 54, 55, 56]
},
{
id: 'import-on-visibility',
optionName: 'Import on visibility',
codeSnippet:
`import React from 'react';
import loadableVisibility from 'react-loadable-visibility/loadable-components';
import Messages from './Messages';
import MessageForm from './MessageForm';

const EmojiPicker = loadableVisibility(() => import('./EmojiPicker'), {
  fallback: <p>Loading...</p>
});

const Chats = () => {
  ...
  return (
    <div>
      <Messages />
      <MessageForm />
      {isEmojiPickerOpen && (
        <EmojiPicker />
      )}
    </div>
  );
};`,
textDescription:
`
[react-loadable-visibility](https://github.com/stratiformltd/react-loadable-visibility) is a handy library that provides a wrapper around [loadable-components](https://github.com/gregberge/loadable-components) and [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API). You can use it to load components as they become visible within the device viewport when the user scrolls the page.  
Therefore, it will only function in [browsers that have the IntersectionObserver API](http://caniuse.com/#feat=intersectionobserver).

#### References:  
* [react-loadable-visibility README](https://github.com/stratiformltd/react-loadable-visibility)  
* [progressive react](https://houssein.me/progressive-react)
`,
linesInPrimary: [2, 6, 7, 8, 16, 17, 18]
},
{
id: 'prefetch',
optionName: 'Prefetch',
codeSnippet:
`import React, { lazy, Suspense } from 'react';
import Messages from './Messages';
import MessageForm from './MessageForm';

const EmojiPicker = lazy(() => import(/* webpackPrefetch: true */ './EmojiPicker'));

const Chats = () => {
  ...
  return (
    <div>
      <Messages />
      <MessageForm />
      {isEmojiPickerOpen && (
        <Suspense fallback={<p>Loading...</p>}>
          <EmojiPicker />
        </Suspense>
      )}
    </div>
  );
};`,
textDescription:
`
Instead of waiting for the 'submit' event to take place to load sorting functionality from the lodash library, you can prefetch this resource to increase the chances of having it available in the cache by the time the user submits the form. webpack allows that using the [magic comments](https://webpack.js.org/api/module-methods/#magic-comments) inside \`import()\`.  
This tells webpack to inject the \`<link rel="prefetch">\` tag into the HTML document:  
\`<link rel="prefetch" as="script" href="1.bundle.js">\`  

#### References:  
* [(web.dev) Prefetch resources to speed up future navigations / Prefetching JavaScript modules with webpack magic comments](https://web.dev/link-prefetch/#prefetching-javascript-modules-with-webpack-magic-comments)  
* [(web.dev) Preload critical assets to improve loading speed / Preloading and prefetching with webpack](https://web.dev/codelab-preload-critical-assets/#preloading-and-prefetching-with-webpack)  
* [(Medium) Preload, Prefetch And Priorities in Chrome](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)  
* [(Medium) <link rel=”prefetch/preload”> in webpack](https://medium.com/webpack/link-rel-prefetch-preload-in-webpack-51a52358f84c)
`,
linesInPrimary: [5]
},
{
id: 'preload',
optionName: 'Preload',
codeSnippet:
`import React, { lazy, Suspense } from 'react';
import Messages from './Messages';
import MessageForm from './MessageForm';

const EmojiPicker = lazy(() => import(/* webpackPreload: true */ './EmojiPicker'));

const Chats = () => {
  ...
  return (
    <div>
      <Messages />
      <MessageForm />
      {isEmojiPickerOpen && (
        <Suspense fallback={<p>Loading...</p>}>
          <EmojiPicker />
        </Suspense>
      )}
    </div>
  );
};`,
textDescription:
`
By preloading a certain resource, you are telling the browser that you would like to fetch it sooner than the browser would otherwise discover it because you are certain that it is important for the current page.  
Preloading works best if you [split](https://web.dev/reduce-javascript-payloads-with-code-splitting) your JavaScript bundles and only preload critical chunks.
With webpack version 4.6.0 or later, preloading is supported through the use of [magic comments](https://webpack.js.org/api/module-methods/#magic-comments) inside \`import()\`:  
\`import(_/* webpackPreload: true */_ "CriticalChunk")\`

#### References:  
* [(MDN web docs) Preloading content with rel="preload"](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content)  
* [(web.dev) Preload critical assets to improve loading speed / Preloading JavaScript modules with webpack](https://web.dev/preload-critical-assets/#preloading-javascript-modules-with-webpack)  
* [(web.dev) Preload critical assets to improve loading speed / Preloading and prefetching with webpack](https://web.dev/codelab-preload-critical-assets/#preloading-and-prefetching-with-webpack)  
* [(Medium) Preload, Prefetch And Priorities in Chrome](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)  
* [(Medium) <link rel=”prefetch/preload”> in webpack](https://medium.com/webpack/link-rel-prefetch-preload-in-webpack-51a52358f84c)
`,
linesInPrimary: [5]
}
];

export {
  reactLoadingPatterns
};
