
import useDelayedRender from 'utils/hooks/use-delayed-render';

const DelayedRenderWrapper = ({ delay, children }) => {
  return useDelayedRender(delay)(() => children);
};

export default DelayedRenderWrapper;
