
const getDisplayName = WrappedComponent => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

const checkIsSmallViewport = maxWidth => {
  const isSmallViewport = window.matchMedia(`(max-width: ${maxWidth || 600}px)`).matches;
  return isSmallViewport;
};

export {
  getDisplayName,
  checkIsSmallViewport
};
