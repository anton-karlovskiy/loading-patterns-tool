
// ray test touch <
const reactLoadingPatterns = [
{
id: 'static-import',
optionName: 'Static Import',
codeSnippet:
`import sortBy from 'lodash.sortby';

form.addEventListener('submit', e => {
  e.preventDefault()
  const values = [input1.valueAsNumber, input2.valueAsNumber, input3.valueAsNumber];
  const sortedValues = sortBy(values);
});`,
textDescription:
`
The static \`import\` statement is used to import bindings which are exported by another module.  
Imported modules are in \`strict mode\` whether you declare them as such or not. The \`import\` statement cannot be used in embedded scripts unless such script has a \`type="module"\`.  

References:  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import,
`,
linesInPrimary: [1]
},
{
id: 'dynamic-import',
optionName: 'Dynamic Import',
codeSnippet:
`import React, { lazy, Suspense } from 'react';

const AvatarComponent = lazy(() => import('./AvatarComponent'));

const DetailsComponent = () => (
  <Suspense fallback={<p>Loading</p>}>
    <AvatarComponent />
  </Suspense>
);`,
textDescription: 'dynamic-import-text-description',
linesInPrimary: []
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
    <Suspense fallback={<p>Loading</p>}>
      <AvatarComponent />
      <InfoComponent />
      <MoreInfoComponent />
    </Suspense>
  </ErrorBoundary>
);`,
textDescription: 'dynamic-with-error-boundary-text-description',
linesInPrimary: []
},
{
id: 'import-on-interaction',
optionName: 'Import on interaction',
codeSnippet:
`form.addEventListener('submit', e => { 
	e.preventDefault();
	import('lodash.sortby')
		.then(module => module.default)
		.then((sortBy) => {
       const values = [input1.valueAsNumber, input2.valueAsNumber, input3.valueAsNumber];
       const sortedValues = sortBy(values);
    });
});`,
textDescription: 'import-on-interaction-text-description',
linesInPrimary: []
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
`import Prefetch from 'prefetch';`,
textDescription: 'prefetch-text-description',
linesInPrimary: []
},
{
id: 'preload',
optionName: 'Preload',
codeSnippet:
`import Preload from 'preload';`,
textDescription: 'preload-text-description',
linesInPrimary: []
}
];

export {
  reactLoadingPatterns
};
// ray test touch >
