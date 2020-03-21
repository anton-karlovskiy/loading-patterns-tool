
import React from 'react';

import EmojiPicker from '../EmojiPicker';
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
      <EmojiPicker key='emoji' />
    ]} />
  </div>
);

export default Channel;
