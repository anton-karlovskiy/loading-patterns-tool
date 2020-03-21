
import React from 'react';

import TagFacesIcon from 'components/SvgIcons/TagFacesIcon';
import InfoOutlineIcon from 'components/SvgIcons/InfoOutlineIcon';
import VideoCamIcon from 'components/SvgIcons/VideoCamIcon';
import PhoneInTalkIcon from 'components/SvgIcons/PhoneInTalkIcon';
import Toolbar from 'components/PreviewArea/Toolbar';
import MessageList from 'components/PreviewArea/MessageList';
import MessageInput from 'components/PreviewArea/MessageInput';
import { appTitle } from 'utils/constants';

const Channel = () => (
  <div>
    <Toolbar
      title={appTitle}
      rightItems={[
        <InfoOutlineIcon key='info' />,
        <VideoCamIcon key='video' />,
        <PhoneInTalkIcon key='phone' />
      ]} />
    <MessageList />
    <MessageInput rightItems={[
      <TagFacesIcon
        type='button'
        key='emoji'
        style={{padding: '4px', pointerEvents: 'auto'}} />
    ]} />
  </div>
);

export default Channel;
