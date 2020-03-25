
const delaysAndLabels = {
  'static-import': {
    messageList: {
      delay: 0,
      label: 'MessageList is static-imported.'
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is static-imported.'
    },
    emojiPicker: {
      delay: 0,
      label: 'EmojiPicker is static-imported.'
    }
  },
  'dynamic-import': {
    messageList: {
      delay: 0,
      label: 'MessageList is static-imported.'
    },
    messageInput: {
      delay:0,
      label: 'MessageInput is static-imported.'
    },
    emojiPicker: {
      delay: 1500,
      label: 'EmojiPicker is dynamic-imported.'
    }
  },
  'route-based-code-splitting': {
    messageList: {
      delay: 1500,
      label: 'The whole Channel is dynamic-imported based on Route-based code splitting.'
    },
    messageInput: {
      delay: 0,
      label: ''
    },
    emojiPicker: {
      delay: 1000,
      label: ''
    }
  },
  'dynamic-with-error-boundary': {
    messageList: {
      delay: 0,
      label: 'MessageList is static-imported.'
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is static-imported.'
    },
    emojiPicker: {
      delay: 1500,
      label: 'EmojiPicker is dynamic-imported and wrapped in ErrorBoundary.'
    }
  },
  'import-on-interaction': {
    messageList: {
      delay: 0,
      label: 'MessageList is static-imported.'
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is static-imported.'
    },
    emojiPicker: {
      delay: 0,
      martDelay: 1000,
      label: 'EmojiPicker is lazy-loaded on user interacting with the button.'
    }
  },
  'loadable-components': {
    messageList: {
      delay: 0,
      label: 'MessageList is static-imported.'
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is static-imported.'
    },
    emojiPicker: {
      delay: 1500,
      label: 'EmojiPicker is dynamic-imported using Loadable Components.'
    }
  },
  'loadable-components-ssr': {
    messageList: {
      delay: 0,
      label: 'MessageList is server-rendered.'
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is server-rendered but we static-imported JS to make it interactive.'
    },
    emojiPicker: {
      delay: 0,
      label: 'EmojiPicker is dynamic-imported but we can see it without delay because it\'s server-rendered.'
    }
  },
  'streaming-rendering': {
    messageList: {
      delay: 0,
      label: 'MessageList is server-stream-rendered.'
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is server-stream-rendered but we static-imported JS to make it interactive..'
    },
    emojiPicker: {
      delay: 0,
      label: 'EmojiPicker is dynamic-imported but we can see it without delay because it\'s server-stream-rendered.'
    }
  },
  'progressive-hydration': {
    messageList: {
      delay: 0,
      label: 'MessageList is server-rendered but progressively hydrated by Concurrent Mode.'
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is server-rendered but progressively hydrated by Concurrent Mode.'
    },
    emojiPicker: {
      delay: 0,
      label: 'EmojiPicker is server-rendered but progressively hydrated by Concurrent Mode.'
    }
  },
  'import-on-visibility': {
    messageList: {
      delay: 0,
      label: 'MessageList is static-imported.'
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is static-imported.'
    },
    emojiPicker: {
      delay: 1500,
      label: 'EmojiPicker is lazy-loaded when it\'s visible on the page.'
    }
  },
  'prefetch': {
    messageList: {
      delay: 0,
      label: 'MessageList is static-imported.'
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is static-imported.'
    },
    emojiPicker: {
      delay: 0,
      label: 'EmojiPicker is prefetched.'
    }
  },
  'preload': {
    messageList: {
      delay: 0,
      label: 'MessageList is static-imported.'
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is static-imported.'
    },
    emojiPicker: {
      delay: 0,
      label: 'EmojiPicker is preloaded.'
    }
  }
};

export default delaysAndLabels;
