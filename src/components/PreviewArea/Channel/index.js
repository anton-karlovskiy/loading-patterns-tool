
import React from 'react';

import EmojiPicker from 'components/PreviewArea/EmojiPicker';
import InfoOutlineIcon from 'components/SvgIcons/InfoOutlineIcon';
import VideoCamIcon from 'components/SvgIcons/VideoCamIcon';
import PhoneInTalkIcon from 'components/SvgIcons/PhoneInTalkIcon';
import Toolbar from 'components/PreviewArea/Toolbar';
import MessageList from 'components/PreviewArea/MessageList';
import MessageInput from 'components/PreviewArea/MessageInput';
import { appTitle } from 'utils/constants';
import delaysAndLabels from 'utils/data/delays-and-labels';

const Channel = ({ selectedPatternId }) => {
  const {
    messageList,
    messageInput,
    emojiPicker
  } = delaysAndLabels[selectedPatternId];

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
            delay={messageList.delay}
            ariaText={messageList.label} />
          <MessageInput
            key={`message-input-${selectedPatternId}`}
            delay={messageInput.delay}
            ariaText={messageInput.label}
            rightItems={[
              <EmojiPicker
                key={`emoji-picker-${selectedPatternId}`}
                delay={emojiPicker.delay}
                martDelay={emojiPicker.martDelay}
                ariaText={emojiPicker.label} />
            ]} />
        </>
    </div>
  );
};

export default Channel;
