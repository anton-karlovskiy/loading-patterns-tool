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

import { LOADING_PATTERN_IDS } from 'utils/constants';

const previewAdjustments = {
  [LOADING_PATTERN_IDS.STATIC_IMPORT]: {
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
  [LOADING_PATTERN_IDS.DYNAMIC_IMPORT]: {
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
  [LOADING_PATTERN_IDS.ROUTE_BASED_CODE_SPLITTING]: {
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
  [LOADING_PATTERN_IDS.DYNAMIC_WITH_ERROR_BOUNDARY]: {
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
  [LOADING_PATTERN_IDS.IMPORT_ON_INTERACTION]: {
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
  [LOADING_PATTERN_IDS.LOADABLE_COMPONENTS]: {
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
  [LOADING_PATTERN_IDS.LOADABLE_COMPONENTS_SSR]: {
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
  [LOADING_PATTERN_IDS.STREAMING_RENDERING]: {
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
  [LOADING_PATTERN_IDS.PROGRESSIVE_HYDRATION]: {
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
  // ray test touch <
  [LOADING_PATTERN_IDS.IMPORT_ON_VISIBILITY]: {
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
      fallbackShown: true,
      open: false
    },
    gifFinder: {
      delay: 2000,
      label: 'GifFinder is lazy-loaded when it\'s visible in the viewport (available at Import on visibility option from Category).',
      fallbackShown: true
    }
  },
  // ray test touch >
  [LOADING_PATTERN_IDS.PREFETCH]: {
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
  [LOADING_PATTERN_IDS.PRELOAD]: {
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

export default previewAdjustments;
