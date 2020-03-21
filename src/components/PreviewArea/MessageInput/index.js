
import React from 'react';

import './MessageInput.css';
import withDelayedRender from 'hoc/withDelayedRender';

const MessageInput = ({ rightItems }) => (
  <div className='message-input'>
    <input
      type='text'
      className='text-input'
      placeholder='Type a message' />
    <div className='toolbar-button-set'>
      {rightItems}
    </div>
  </div>
);

export default withDelayedRender(MessageInput);
