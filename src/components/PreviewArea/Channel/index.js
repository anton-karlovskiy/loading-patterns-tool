
import React from 'react';

import EmojiPicker from '../EmojiPicker';
import InfoOutlineIcon from 'components/SvgIcons/InfoOutlineIcon';
import VideoCamIcon from 'components/SvgIcons/VideoCamIcon';
import PhoneInTalkIcon from 'components/SvgIcons/PhoneInTalkIcon';
import Toolbar from 'components/PreviewArea/Toolbar';
import MessageList from 'components/PreviewArea/MessageList';
import MessageInput from 'components/PreviewArea/MessageInput';
import { appTitle } from 'utils/constants';
import delays from 'utils/data/delays';

const Channel = ({ selectedPatternId }) => {
  const { messageList, messageInput, emojiPicker } = delays[selectedPatternId];
  
  return (
    <div>
      <Toolbar
        title={appTitle}
        rightItems={[
          <InfoOutlineIcon key='info' />,
          <VideoCamIcon key='video' />,
          <PhoneInTalkIcon key='phone' />
        ]} />
        <>
          <MessageList
            key={`message-list-${selectedPatternId}`}
            delay={messageList} />
          <MessageInput
            key={`message-input-${selectedPatternId}`}
            delay={messageInput}
            rightItems={[
              <EmojiPicker
                key={`emoji-picker-${selectedPatternId}`}
                delay={emojiPicker} />
            ]} />
        </>
    </div>
  );
};

export default Channel;
