
import React from 'react';

import TagFacesIcon from 'components/SvgIcons/TagFacesIcon';
import InfoOutlineIcon from 'components/SvgIcons/InfoOutlineIcon';
import VideoCamIcon from 'components/SvgIcons/VideoCamIcon';
import PhoneInTalkIcon from 'components/SvgIcons/PhoneInTalkIcon';
import PhotoCameraIcon from 'components/SvgIcons/PhotoCameraIcon';
import ImageIcon from 'components/SvgIcons/ImageIcon';
import MicIcon from 'components/SvgIcons/MicIcon';
import PaymentIcon from 'components/SvgIcons/PaymentIcon';
import VideoGameAssetIcon from 'components/SvgIcons/VideoGameAssetIcon';
import Toolbar from 'components/PreviewArea/Toolbar';
import MessageList from 'components/PreviewArea/MessageList';
import MessageInput from 'components/PreviewArea/MessageInput';
// ray test touch <
import { appTitle } from 'utils/constants';
// ray test touch >

const Channel = () => (
  <div className='message-panel'>
    <Toolbar
      title={appTitle}
      rightItems={[
        <InfoOutlineIcon key='info' />,
        <VideoCamIcon key='video' />,
        <PhoneInTalkIcon key='phone' />
      ]} />
    <MessageList />
    <MessageInput rightItems={[
      <PhotoCameraIcon key='photo' />,
      <ImageIcon key='image' />,
      <MicIcon key='audio' />,
      <PaymentIcon key='money' />,
      <VideoGameAssetIcon key='games' />,
      <TagFacesIcon key='emoji' />
    ]} />
  </div>
);

export default Channel;
