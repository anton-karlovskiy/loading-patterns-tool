
import React, { useMemo } from 'react';
import clsx from 'clsx';

import './Message.css';
import skeletonStyles from 'components/PreviewArea/skeleton-style.module.css';

const LineSkeleton = props => (
  <div
    {...props}
    className={clsx('line-skeleton', skeletonStyles['skeleton-ui-effect'])} />
);

const MessageSkeleton = ({ isMine, startsSequence, endsSequence, numberOfLines = 1 }) => {
  const lineSkeletons = useMemo(() => {
    let lines = [];
    for (let index = 0; index < numberOfLines; index++) {
      lines = [...lines, <LineSkeleton key={index} />];
    }

    return lines;
  }, [numberOfLines]);

  return (
    <div className={clsx('message', isMine && 'mine', startsSequence && 'start', endsSequence && 'end')}>
      <div className='bubble-container'>
        <div className={clsx('bubble', 'bubble-skeleton')}>
        {lineSkeletons}
        </div>
      </div>
    </div>
  );
};

export default MessageSkeleton;
