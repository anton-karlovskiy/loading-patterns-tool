
const delaysAndLabels = {
  'static-import': {
    messageList: {
      delay: 0,
      label: 'MessageList is static-imported.',
      fallbackShown: false
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is static-imported.',
      fallbackShown: false
    },
    emojiPicker: {
      delay: 0,
      label: 'EmojiPicker is static-imported.',
      fallbackShown: false
    }
  },
  'dynamic-import': {
    messageList: {
      delay: 0,
      label: 'MessageList is static-imported.',
      fallbackShown: false
    },
    messageInput: {
      delay:0,
      label: 'MessageInput is static-imported.',
      fallbackShown: false
    },
    emojiPicker: {
      delay: 1500,
      label: 'EmojiPicker is dynamic-imported.',
      fallbackShown: true
    }
  },
  'route-based-code-splitting': {
    messageList: {
      delay: 1500,
      label: 'The whole Channel is dynamic-imported based on Route-based code splitting.',
      fallbackShown: true
    },
    messageInput: {
      delay: 1000,
      label: '',
      fallbackShown: false
    },
    emojiPicker: {
      delay: 0,
      martDelay: 1000,
      label: '',
      fallbackShown: false
    }
  },
  'dynamic-with-error-boundary': {
    messageList: {
      delay: 0,
      label: 'MessageList is static-imported.',
      fallbackShown: false
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is static-imported.',
      fallbackShown: false
    },
    emojiPicker: {
      delay: 1500,
      label: 'EmojiPicker is dynamic-imported and wrapped in ErrorBoundary.',
      fallbackShown: true
    }
  },
  'import-on-interaction': {
    messageList: {
      delay: 0,
      label: 'MessageList is static-imported.',
      fallbackShown: false
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is static-imported.',
      fallbackShown: false
    },
    emojiPicker: {
      delay: 0,
      martDelay: 1000,
      label: 'EmojiPicker is lazy-loaded on user interacting with the button.',
      fallbackShown: false
    }
  },
  'loadable-components': {
    messageList: {
      delay: 0,
      label: 'MessageList is static-imported.',
      fallbackShown: false
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is static-imported.',
      fallbackShown: false
    },
    emojiPicker: {
      delay: 1500,
      label: 'EmojiPicker is dynamic-imported using Loadable Components.',
      fallbackShown: true
    }
  },
  'loadable-components-ssr': {
    messageList: {
      delay: 0,
      label: 'MessageList is server-rendered.',
      fallbackShown: false
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is server-rendered but we static-imported JS to make it interactive.',
      fallbackShown: false
    },
    emojiPicker: {
      delay: 0,
      label: 'EmojiPicker is dynamic-imported but we can see it without delay because it\'s server-rendered.',
      fallbackShown: false
    }
  },
  'streaming-rendering': {
    messageList: {
      delay: 0,
      label: 'MessageList is server-stream-rendered.',
      fallbackShown: false
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is server-stream-rendered but we static-imported JS to make it interactive..',
      fallbackShown: false
    },
    emojiPicker: {
      delay: 0,
      label: 'EmojiPicker is dynamic-imported but we can see it without delay because it\'s server-stream-rendered.',
      fallbackShown: false
    }
  },
  'progressive-hydration': {
    messageList: {
      delay: 0,
      label: 'MessageList is server-rendered but progressively hydrated by Concurrent Mode.',
      fallbackShown: false
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is server-rendered but progressively hydrated by Concurrent Mode.',
      fallbackShown: false
    },
    emojiPicker: {
      delay: 0,
      label: 'EmojiPicker is server-rendered but progressively hydrated by Concurrent Mode.',
      fallbackShown: false
    }
  },
  'import-on-visibility': {
    messageList: {
      delay: 0,
      label: 'MessageList is static-imported.',
      fallbackShown: false
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is static-imported.',
      fallbackShown: false
    },
    emojiPicker: {
      delay: 1500,
      label: 'EmojiPicker is lazy-loaded when it\'s visible on the page.',
      fallbackShown: true
    }
  },
  'prefetch': {
    messageList: {
      delay: 0,
      label: 'MessageList is static-imported.',
      fallbackShown: false
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is static-imported.',
      fallbackShown: false
    },
    emojiPicker: {
      delay: 0,
      label: 'EmojiPicker is prefetched.',
      fallbackShown: false
    }
  },
  'preload': {
    messageList: {
      delay: 0,
      label: 'MessageList is static-imported.',
      fallbackShown: false
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is static-imported.',
      fallbackShown: false
    },
    emojiPicker: {
      delay: 0,
      label: 'EmojiPicker is preloaded.',
      fallbackShown: false
    }
  }
};

export default delaysAndLabels;
