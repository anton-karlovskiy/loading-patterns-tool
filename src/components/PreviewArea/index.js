
import React from 'react';

import Channel from './Channel';
// ray test touch <
import Loading from 'components/PreviewArea/Loading';
import AriaText from 'components/PreviewArea/AriaText';
import { LOADING_PATTERN_IDS } from 'utils/constants';
import useIntersect from 'utils/hooks/use-intersect';
// ray test touch >
import GifFinder from './GifFinder';
import styles from './style.module.css';

const PreviewArea = ({ selectedPatternId }) => {
  // ray test touch <
  const [ref, entry] = useIntersect({threshold: 0.1});
  const intersectionRatio = entry.intersectionRatio;

  console.log('[PreviewArea] intersectionRatio of GifFinder => ', intersectionRatio);
  // ray test touch >

  return (
    <>
      <Channel
        className={styles['content']}
        selectedPatternId={selectedPatternId} />
      {/* ray test touch < */}
      <div ref={ref}>
        {selectedPatternId === LOADING_PATTERN_IDS.IMPORT_ON_VISIBILITY && intersectionRatio > 0.2 ? (
          <GifFinder
            key={`gif-finder-${selectedPatternId}`}
            className={styles['content']}
            delay={2000}
            fallback={<Loading />} />
        ) : (
          <AriaText text='GifFinder component is loaded based on Import on Visibility pattern when you select Import on visibility from Category.' />
        )}
      </div>
      {/* ray test touch > */}
    </>
  );
};

export default PreviewArea;
