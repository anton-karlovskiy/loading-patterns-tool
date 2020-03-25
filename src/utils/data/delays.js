
// ray test touch <
const delays = {
  'static-import': {
    messageList: {
      delay: 0,
      label: 'MessageList is server-rendered.'
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is server-rendered but we static imported JS to make it interactive.'
    },
    emojiPicker: {
      delay: 0,
      label: 'EmojiPicker JS was lazy-loaded on user interacting with the button.'
    }
  },
  'dynamic-import': {
    messageList: {
      delay: 0,
      label: 'MessageList is server-rendered.'
    },
    messageInput: {
      delay:0,
      label: 'MessageInput is server-rendered but we static imported JS to make it interactive.'
    },
    emojiPicker: {
      delay: 1500,
      label: 'EmojiPicker JS was lazy-loaded on user interacting with the button.'
    }
  },
  'route-based-code-splitting': {
    messageList: {
      delay: 1000,
      label: 'MessageList is server-rendered.'
    },
    messageInput: {
      delay: 1000,
      label: 'MessageInput is server-rendered but we static imported JS to make it interactive.'
    },
    emojiPicker: {
      delay: 0,
      label: 'EmojiPicker JS was lazy-loaded on user interacting with the button.'
    }
  },
  'dynamic-with-error-boundary': {
    messageList: {
      delay: 0,
      label: 'MessageList is server-rendered.'
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is server-rendered but we static imported JS to make it interactive.'
    },
    emojiPicker: {
      delay: 1500,
      label: 'EmojiPicker JS was lazy-loaded on user interacting with the button.'
    }
  },
  'import-on-interaction': {
    messageList: {
      delay: 0,
      label: 'MessageList is server-rendered.'
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is server-rendered but we static imported JS to make it interactive.'
    },
    emojiPicker: {
      delay: 0,
      label: 'EmojiPicker JS was lazy-loaded on user interacting with the button.'
    }
  },
  'loadable-components': {
    messageList: {
      delay: 0,
      label: 'MessageList is server-rendered.'
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is server-rendered but we static imported JS to make it interactive.'
    },
    emojiPicker: {
      delay: 1500,
      label: 'EmojiPicker JS was lazy-loaded on user interacting with the button.'
    }
  },
  'loadable-components-ssr': {
    messageList: {
      delay: 0,
      label: 'MessageList is server-rendered.'
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is server-rendered but we static imported JS to make it interactive.'
    },
    emojiPicker: {
      delay: 1500,
      label: 'EmojiPicker JS was lazy-loaded on user interacting with the button.'
    }
  },
  'streaming-rendering': {
    messageList: {
      delay: 0,
      label: 'MessageList is server-rendered.'
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is server-rendered but we static imported JS to make it interactive.'
    },
    emojiPicker: {
      delay: 1500,
      label: 'EmojiPicker JS was lazy-loaded on user interacting with the button.'
    }
  },
  'progressive-hydration': {
    messageList: {
      delay: 1000,
      label: 'MessageList is server-rendered.'
    },
    messageInput: {
      delay: 1000,
      label: 'MessageInput is server-rendered but we static imported JS to make it interactive.'
    },
    emojiPicker: {
      delay: 0,
      label: 'EmojiPicker JS was lazy-loaded on user interacting with the button.'
    }
  },
  'import-on-visibility': {
    messageList: {
      delay: 0,
      label: 'MessageList is server-rendered.'
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is server-rendered but we static imported JS to make it interactive.'
    },
    emojiPicker: {
      delay: 2000,
      label: 'EmojiPicker JS was lazy-loaded on user interacting with the button.'
    }
  },
  'prefetch': {
    messageList: {
      delay: 0,
      label: 'MessageList is server-rendered.'
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is server-rendered but we static imported JS to make it interactive.'
    },
    emojiPicker: {
      delay: 0,
      label: 'EmojiPicker JS was lazy-loaded on user interacting with the button.'
    }
  },
  'preload': {
    messageList: {
      delay: 0,
      label: 'MessageList is server-rendered.'
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is server-rendered but we static imported JS to make it interactive.'
    },
    emojiPicker: {
      delay: 0,
      label: 'EmojiPicker JS was lazy-loaded on user interacting with the button.'
    }
  }
};

export default delays;
// ray test touch >
