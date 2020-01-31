
const reactLoadingPatterns = [
{
id: 'static-import',
optionName: 'Static Import',
codeSnippet:
`import sortBy from 'lodash.sortby';

const FormComponent = () => {
  ...
  const onSubmitHandler = event => {
    event.preventDefault();
    const values = [input1.valueAsNumber, input2.valueAsNumber, input3.valueAsNumber];
    const sortedValues = sortBy(values);
    ...
  };

  return (
    <form onSubmit={onSubmitHandler}>
    ...
    </form>
  );
};`,
textDescription:
`
The static \`import\` statement is used to import bindings which are exported by another module.  
Imported modules are in \`strict mode\` whether you declare them as such or not. The \`import\` statement cannot be used in embedded scripts unless such script has a \`type="module"\`.  

References:  
[(MDN web docs) import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import,)
`,
linesInPrimary: [1, 8]
},
{
id: 'dynamic-import',
optionName: 'Dynamic Import',
codeSnippet:
`import React, { lazy, Suspense } from 'react';

const AvatarComponent = lazy(() => import('./AvatarComponent'));

const DetailsComponent = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <AvatarComponent />
  </Suspense>
);`,
textDescription:
`
The \`React.lazy\` method makes it easy to code-split a React application on a component level using dynamic imports.
The \`React.lazy\` function provides a built-in way to separate components in an application into separate chunks of JavaScript with very little legwork. You can then take care of loading states when you couple it with the \`Suspense\` component.  

References:  
[(web.dev) Code splitting with React.lazy and Suspense](https://web.dev/code-splitting-suspense/)  
[(React docs) Code-Splitting / import()](https://reactjs.org/docs/code-splitting.html#import)
`,
linesInPrimary: [3, 6, 8]
},
{
id: 'dynamic-with-error-boundary',
optionName: 'Dynamic w/Error Boundary',
codeSnippet:
`import React, { lazy, Suspense, Component } from 'react';

const AvatarComponent = lazy(() => import('./AvatarComponent'));
const InfoComponent = lazy(() => import('./InfoComponent'));
const MoreInfoComponent = lazy(() => import('./MoreInfoComponent'));

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

const DetailsComponent = () => (
  <ErrorBoundary>
    <Suspense fallback={<p>Loading...</p>}>
      <AvatarComponent />
      <InfoComponent />
      <MoreInfoComponent />
    </Suspense>
  </ErrorBoundary>
);`,
textDescription:
`
Error boundaries are React components that \`catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI\` instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.  

References:  
[(React docs) Error Boundaries](https://reactjs.org/docs/error-boundaries.html)  
[(web.dev) Code splitting with React.lazy and Suspense / Handle loading failures](https://web.dev/code-splitting-suspense/#handle-loading-failures)
`,
linesInPrimary: [13, 14, 15, 27, 33]
},
{
id: 'import-on-interaction',
optionName: 'Import on interaction',
codeSnippet:
`const FormComponent = () => {
  ...
  const onSubmitHandler = event => {
    event.preventDefault();
    import('lodash.sortby')
      .then(module => module.default)
      .then(sortBy => {
        const values = [input1.valueAsNumber, input2.valueAsNumber, input3.valueAsNumber];
        const sortedValues = sortBy(values);
        ...
      });
  };

  return (
    <form onSubmit={onSubmitHandler}>
    ...
    </form>
  );
};`,
textDescription:
`
The code that makes up the module does not get included into the initial bundle and is now lazy loaded, or provided to the user only when it is needed after the form submission.  

References:  
[(web.dev) Reduce JavaScript payloads with code splitting](https://web.dev/reduce-javascript-payloads-with-code-splitting/)
`,
linesInPrimary: [5, 6, 7, 8, 9, 10, 11]
},
{
id: 'import-on-visibility',
optionName: 'Import on visibility',
codeSnippet:
`import Import_On_Visibility from 'import-on-visibility';`,
textDescription: 'import-on-visibility-text-description',
linesInPrimary: []
},
{
id: 'loadable-component-ssr',
optionName: 'Loadable Component (SSR)',
codeSnippet:
`import Loadable_Component_SSR from 'loadable-component-ssr';`,
textDescription: 'loadable-component-ssr-text-description',
linesInPrimary: []
},
{
id: 'prefetch',
optionName: 'Prefetch',
codeSnippet:
`const FormComponent = () => {
  ...
  const sortInput = () => {
    return sortBy => {
      const values = [input1.valueAsNumber, input2.valueAsNumber, input3.valueAsNumber];
      const sortedValues = sortBy(values);
      ...
    };
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    import(/* webpackPrefetch: true */ 'lodash.sortby')
      .then(module => module.default)
      .then(sortInput()) 
      .catch(err => {alert(err);});
  };

  return (
    <form onSubmit={onSubmitHandler}>
    ...
    </form>
  );
};`,
textDescription:
`
Instead of waiting for the 'submit' event to take place to load sorting functionality from the lodash library, you can prefetch this resource to increase the chances of having it available in the cache by the time the user submits the form. webpack allows that using the [magic comments](https://webpack.js.org/api/module-methods/#magic-comments) inside \`import()\`.  
This tells webpack to inject the \`<link rel="prefetch">\` tag into the HTML document:  
\`<link rel="prefetch" as="script" href="1.bundle.js">\`  

References:  
[(web.dev) Prefetch resources to speed up future navigations / Prefetching JavaScript modules with webpack magic comments](https://web.dev/link-prefetch/#prefetching-javascript-modules-with-webpack-magic-comments)  
[(web.dev) Preload critical assets to improve loading speed / Preloading and prefetching with webpack](https://web.dev/codelab-preload-critical-assets/#preloading-and-prefetching-with-webpack)  
[(Medium) Preload, Prefetch And Priorities in Chrome](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)  
[(Medium) <link rel=”prefetch/preload”> in webpack](https://medium.com/webpack/link-rel-prefetch-preload-in-webpack-51a52358f84c)
`,
linesInPrimary: [3, 6, 14, 15, 16],
linesInSecondary: [13]
},
{
id: 'preload',
optionName: 'Preload',
codeSnippet:
`const FormComponent = () => {
  ...
  const sortInput = () => {
    return sortBy => {
      const values = [input1.valueAsNumber, input2.valueAsNumber, input3.valueAsNumber];
      const sortedValues = sortBy(values);
      ...
    };
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    import(/* webpackPreload: true */ 'lodash.sortby')
      .then(module => module.default)
      .then(sortInput()) 
      .catch(err => {alert(err);});
  };

  return (
    <form onSubmit={onSubmitHandler}>
    ...
    </form>
  );
};`,
textDescription:
`
By preloading a certain resource, you are telling the browser that you would like to fetch it sooner than the browser would otherwise discover it because you are certain that it is important for the current page.  
Preloading works best if you [split](https://web.dev/reduce-javascript-payloads-with-code-splitting) your JavaScript bundles and only preload critical chunks.
With webpack version 4.6.0 or later, preloading is supported through the use of [magic comments](https://webpack.js.org/api/module-methods/#magic-comments) inside \`import()\`:  
\`import(_/* webpackPreload: true */_ "CriticalChunk")\`

References:  
[(MDN web docs) Preloading content with rel="preload"](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content)  
[(web.dev) Preload critical assets to improve loading speed / Preloading JavaScript modules with webpack](https://web.dev/preload-critical-assets/#preloading-javascript-modules-with-webpack)  
[(web.dev) Preload critical assets to improve loading speed / Preloading and prefetching with webpack](https://web.dev/codelab-preload-critical-assets/#preloading-and-prefetching-with-webpack)  
[(Medium) Preload, Prefetch And Priorities in Chrome](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)  
[(Medium) <link rel=”prefetch/preload”> in webpack](https://medium.com/webpack/link-rel-prefetch-preload-in-webpack-51a52358f84c)
`,
linesInPrimary: [3, 6, 14, 15, 16],
linesInSecondary: [13]
}
];

export {
  reactLoadingPatterns
};
