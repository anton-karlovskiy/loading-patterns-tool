
import React from 'react';

import styles from './style.module.css';

const SkeletonUICheckbox = ({ checked, onChange }) => {
  const onChangeHandler = event => {
    onChange && onChange(event.target.checked);
  };

  return (
    <div className={styles['skeleton-ui-checkbox']}>
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

export default SkeletonUICheckbox;
