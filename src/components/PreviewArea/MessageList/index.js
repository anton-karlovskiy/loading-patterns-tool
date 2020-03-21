
import React, { useEffect, useState } from 'react';

import Message from './Message';
import './MessageList.css';
import withDelayedRender from 'hoc/withDelayedRender';

const MY_USER_ID = 'apple';

const getTempMessages = () => {
  const tempMessages = [
    {
      id: 1,
      author: 'apple',
      message: 'Hello world! Please click emoji icon on the bottom right corner to open emoji picker.',
      timestamp: new Date().getTime()
    },
    {
      id: 2,
      author: 'orange',
      message: 'Emoji picker looks good!',
      timestamp: new Date().getTime()
    },
    {
      id: 3,
      author: 'orange',
      message: 'Hello world! Please click emoji icon on the bottom right corner to open emoji picker.',
      timestamp: new Date().getTime()
    },
    {
      id: 4,
      author: 'apple',
      message: 'Emoji picker looks good!',
      timestamp: new Date().getTime()
    },
    {
      id: 5,
      author: 'apple',
      message: 'Hello world! Please click emoji icon on the bottom right corner to open emoji picker.',
      timestamp: new Date().getTime()
    },
    {
      id: 6,
      author: 'apple',
      message: 'Emoji picker looks good!',
      timestamp: new Date().getTime()
    },
    {
      id: 7,
      author: 'orange',
      message: 'Hello world! Please click emoji icon on the bottom right corner to open emoji picker.',
      timestamp: new Date().getTime()
    },
    {
      id: 8,
      author: 'orange',
      message: 'Emoji picker looks good!',
      timestamp: new Date().getTime()
    },
    {
      id: 9,
      author: 'apple',
      message: 'Hello world! Please click emoji icon on the bottom right corner to open emoji picker.',
      timestamp: new Date().getTime()
    },
    {
      id: 10,
      author: 'orange',
      message: 'Emoji picker looks good!',
      timestamp: new Date().getTime()
    }
  ];
  
  return tempMessages;
};

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    const tempMessages = getTempMessages();
    setMessages(prevMessages => [...prevMessages, ...tempMessages]);
  }, []);

  const renderMessages = () => {
    const renderedMessages = messages.map((message, index) => {
      const previous = messages[index - 1];
      const current = messages[index];
      const next = messages[index + 1];
      const isMine = current.author === MY_USER_ID;
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        const isPrevWithinAnHour = true;
        prevBySameAuthor = previous.author === current.author;
        
        if (prevBySameAuthor && isPrevWithinAnHour) {
          startsSequence = false;
        }

        if (isPrevWithinAnHour) {
          showTimestamp = false;
        }
      }

      if (next) {
        const isNextWithinAnHour = true;
        nextBySameAuthor = next.author === current.author;

        if (nextBySameAuthor && isNextWithinAnHour) {
          endsSequence = false;
        }
      }

      return (
        <Message
          key={index}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current} />
      );
    });
    
    return renderedMessages;
  };

  return (
    <div className='message-list'>{renderMessages()}</div>
  );
};

export default withDelayedRender(MessageList);
