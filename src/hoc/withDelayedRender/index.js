
import React from 'react';

import useDelayedRender from 'utils/hooks/use-delayed-render';
import { getDisplayName } from 'utils/helpers';

const withDelayedRender = WrappedComponent => {
  const WithDelayedRender = ({ delay, ...rest }) => {
    const delayedRender = useDelayedRender(delay);

    return delayedRender(() => <WrappedComponent {...rest} />);
  };

  WithDelayedRender.displayName = `WithDelayedRender(${getDisplayName(WrappedComponent)})`;

  return WithDelayedRender;
};

export default withDelayedRender;
