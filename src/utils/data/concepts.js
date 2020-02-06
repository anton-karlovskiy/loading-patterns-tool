
const reactLoadingPatterns = [
{
id: 'static-import',
optionName: 'Static Import',
codeSnippet:
`import Messages from './Messages';
import MessageForm from './MessageForm';
import EmojiPicker from './EmojiPicker';

const Chat = () => {
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
[(MDN web docs) import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import,)
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

const Chat = () => {
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
[(web.dev) Code splitting with React.lazy and Suspense](https://web.dev/code-splitting-suspense/)  
[(React docs) Code-Splitting / import()](https://reactjs.org/docs/code-splitting.html#import)
`,
linesInPrimary: [5, 14, 16]
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

const Chat = () => {
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
[(React docs) Error Boundaries](https://reactjs.org/docs/error-boundaries.html)  
[(web.dev) Code splitting with React.lazy and Suspense / Handle loading failures](https://web.dev/code-splitting-suspense/#handle-loading-failures)
`,
linesInPrimary: [13, 14, 15, 29, 39]
},
{
id: 'import-on-interaction',
optionName: 'Import on interaction',
codeSnippet:
`import React, { useState, createElement } from 'react';
import Messages from './Messages';
import MessageForm from './MessageForm';
import ErrorBoundary from './ErrorBoundary';

const Chat = () => {
  const [emojiPickerComp, setEmojiPickerComp] = useState(null);

  const openEmojiPickerHandler = () => {
    import('./EmojiPicker')
      .then(module => module.default)
      .then(emojiPicker => {
l       setEmojiPickerComp(createElement(emojiPicker));
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
[(web.dev) Reduce JavaScript payloads with code splitting](https://web.dev/reduce-javascript-payloads-with-code-splitting/)
`,
linesInPrimary: [10, 11, 12, 13, 14]
},
{
id: 'loadable-components-ssr',
optionName: 'Loadable Components (SSR)',
codeSnippet:
`import loadable from '@loadable/component';
import Messages from './Messages';
import MessageForm from './MessageForm';
import ErrorBoundary from './ErrorBoundary';

const EmojiPicker = loadable(() => import('./EmojiPicker'), {
  fallback: <p>Loading...</p>
});

const Chat = () => {
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
[(Loadable Components doc) Comparison with React.lazy](https://loadable-components.com/docs/loadable-vs-react-lazy/)  
[(Loadable Components doc) Error Boundaries](https://loadable-components.com/docs/error-boundaries/)  
[(Loadable Components doc) Server Side Rendering](https://loadable-components.com/docs/server-side-rendering/)
`,
linesInPrimary: [6, 7, 8, 13, 21]
},
// ray test touch <
{
id: 'import-on-visibility',
optionName: 'Import on visibility',
codeSnippet:
`import React, { lazy, Suspense } from 'react';
import loadableVisibility from 'react-loadable-visibility/loadable-components';
import Messages from './Messages';
import MessageForm from './MessageForm';

const EmojiPicker = loadableVisibility(() => import('./EmojiPicker'), {
  fallback: <p>Loading...</p>
});

const Chat = () => {
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
textDescription: 'import-on-visibility-text-description',
linesInPrimary: [2, 6, 7, 8, 16, 17, 18]
},
// ray test touch >
{
id: 'prefetch',
optionName: 'Prefetch',
codeSnippet:
`import React, { lazy, Suspense } from 'react';
import Messages from './Messages';
import MessageForm from './MessageForm';

const EmojiPicker = lazy(() => import(/* webpackPrefetch: true */ './EmojiPicker'));

const Chat = () => {
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
[(web.dev) Prefetch resources to speed up future navigations / Prefetching JavaScript modules with webpack magic comments](https://web.dev/link-prefetch/#prefetching-javascript-modules-with-webpack-magic-comments)  
[(web.dev) Preload critical assets to improve loading speed / Preloading and prefetching with webpack](https://web.dev/codelab-preload-critical-assets/#preloading-and-prefetching-with-webpack)  
[(Medium) Preload, Prefetch And Priorities in Chrome](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)  
[(Medium) <link rel=”prefetch/preload”> in webpack](https://medium.com/webpack/link-rel-prefetch-preload-in-webpack-51a52358f84c)
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

const Chat = () => {
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
[(MDN web docs) Preloading content with rel="preload"](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content)  
[(web.dev) Preload critical assets to improve loading speed / Preloading JavaScript modules with webpack](https://web.dev/preload-critical-assets/#preloading-javascript-modules-with-webpack)  
[(web.dev) Preload critical assets to improve loading speed / Preloading and prefetching with webpack](https://web.dev/codelab-preload-critical-assets/#preloading-and-prefetching-with-webpack)  
[(Medium) Preload, Prefetch And Priorities in Chrome](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)  
[(Medium) <link rel=”prefetch/preload”> in webpack](https://medium.com/webpack/link-rel-prefetch-preload-in-webpack-51a52358f84c)
`,
linesInPrimary: [5]
}
];

export {
  reactLoadingPatterns
};
