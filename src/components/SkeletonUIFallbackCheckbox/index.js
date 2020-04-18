
import React from 'react';

import styles from './style.module.css';

const SkeletonUIFallbackCheckbox = ({ checked, onChange }) => {
  const onChangeHandler = event => {
    onChange && onChange(event.target.checked);
  };

  return (
    <div className={styles['skeleton-ui-fallback-checkbox']}>
      <input
        className={styles["input[type='checkbox']"]}
        type='checkbox'
        name='skeleton-ui'
        checked={checked}
        onChange={onChangeHandler} />
      <label htmlFor='skeleton-ui'>Do you want to experience Skeleton UI?</label>
    </div>
  );
};

export default SkeletonUIFallbackCheckbox;
