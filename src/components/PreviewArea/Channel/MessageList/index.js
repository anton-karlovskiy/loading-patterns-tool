/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useEffect, useState } from 'react';

import Message from './Message';
import withDelayedRender from 'hoc/withDelayedRender';
import styles from './style.module.css';
import AriaText from 'components/PreviewArea/AriaText';

const MY_USER_ID = 'apple';

const getTempMessages = () => {
  const tempMessages = [
    {
      id: 1,
      author: 'apple',
      message: 'Hello world! The messenger components are designed to simulate different react loading patterns by being rendered with some delay. <MessageList /> is delayed by 1000ms, <MessageInput /> 1500ms, <EmojiPicker /> 2000ms.',
      timestamp: new Date().getTime()
    },
    {
      id: 2,
      author: 'orange',
      message: 'Once refreshing, I can see those components being rendered with some delay!',
      timestamp: new Date().getTime()
    },
    {
      id: 3,
      author: 'orange',
      message: 'Hello world! The messenger components are designed to simulate different react loading patterns by being rendered with some delay. <MessageList /> is delayed by 1000ms, <MessageInput /> 1500ms, <EmojiPicker /> 2000ms.',
      timestamp: new Date().getTime()
    },
    {
      id: 4,
      author: 'apple',
      message: 'Once refreshing, I can see those components being rendered with some delay!',
      timestamp: new Date().getTime()
    },
    {
      id: 5,
      author: 'apple',
      message: 'Hello world! The messenger components are designed to simulate different react loading patterns by being rendered with some delay. <MessageList /> is delayed by 1000ms, <MessageInput /> 1500ms, <EmojiPicker /> 2000ms.',
      timestamp: new Date().getTime()
    },
    {
      id: 6,
      author: 'apple',
      message: 'Once refreshing, I can see those components being rendered with some delay!',
      timestamp: new Date().getTime()
    },
    {
      id: 7,
      author: 'orange',
      message: 'Hello world! The messenger components are designed to simulate different react loading patterns by being rendered with some delay. <MessageList /> is delayed by 1000ms, <MessageInput /> 1500ms, <EmojiPicker /> 2000ms.',
      timestamp: new Date().getTime()
    },
    {
      id: 8,
      author: 'orange',
      message: 'Once refreshing, I can see those components being rendered with some delay!',
      timestamp: new Date().getTime()
    },
    {
      id: 9,
      author: 'apple',
      message: 'Hello world! The messenger components are designed to simulate different react loading patterns by being rendered with some delay. <MessageList /> is delayed by 1000ms, <MessageInput /> 1500ms, <EmojiPicker /> 2000ms.',
      timestamp: new Date().getTime()
    },
    {
      id: 10,
      author: 'orange',
      message: 'Once refreshing, I can see those components being rendered with some delay!',
      timestamp: new Date().getTime()
    }
  ];
  
  return tempMessages;
};

const MessageList = ({ ariaText }) => {
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
    <div className={styles['message-list']}>
      {renderMessages()}
      <AriaText className={styles['aria-text']} text={ariaText} />
    </div>
  );
};

export default withDelayedRender(MessageList);
