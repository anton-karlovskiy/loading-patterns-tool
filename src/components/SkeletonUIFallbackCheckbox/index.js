
import React from 'react';

import styles from './style.module.css';

const SkeletonUIFallbackCheckbox = ({ isSkeletonUIFallback, onChange }) => {
  const onChangeHandler = event => {
    onChange && onChange(event.target.checked);
  };

  return (
    <div className={styles['skeleton-ui-fallback-checkbox']}>
      <input
        className={styles["input[type='checkbox']"]}
        type='checkbox'
        name='skeleton-ui'
        checked={isSkeletonUIFallback}
        onChange={onChangeHandler} />
      <label htmlFor='skeleton-ui'>Skeleton UI</label>
    </div>
  );
};

export default SkeletonUIFallbackCheckbox;
