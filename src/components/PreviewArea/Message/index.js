
import React from 'react';
import './Message.css';

const Message = ({
  data,
  isMine,
  startsSequence,
  endsSequence,
  showTimestamp
}) => {
  const friendlyTimestamp = new Date(data.timestamp).toString();

  return (
    <div className={[
      'message',
      isMine ? 'mine' : '',
      startsSequence ? 'start' : '',
      endsSequence ? 'end' : ''
    ].filter(each => each !== '').join(' ')}>
      {showTimestamp && (
        <div className='timestamp'>
          {friendlyTimestamp}
        </div>
      )}
      <div className='bubble-container'>
        <div className='bubble' title={friendlyTimestamp}>
          {data.message}
        </div>
      </div>
    </div>
  );
};

export default Message;
