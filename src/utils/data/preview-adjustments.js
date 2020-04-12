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

const FALLBACK_TYPES = {
  SKELETON_UI: 'skeleton-ui',
  LOADING_SPINNER: 'loading-spinner',
  LOADING_TEXT: 'loading-text'
};

const previewAdjustments = {
  [LOADING_PATTERN_IDS.STATIC_IMPORT]: {
    messageList: {
      delay: 0,
      label: 'MessageList is static-imported.',
      fallbackType: ''
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is static-imported.',
      fallbackType: ''
    },
    emojiPicker: {
      delay: 0,
      label: 'EmojiPicker is static-imported.',
      fallbackType: '',
      defaultOpen: true
    }
  },
  [LOADING_PATTERN_IDS.DYNAMIC_IMPORT]: {
    messageList: {
      delay: 0,
      label: 'MessageList is static-imported.',
      fallbackType: ''
    },
    messageInput: {
      delay:0,
      label: 'MessageInput is static-imported.',
      fallbackType: ''
    },
    emojiPicker: {
      delay: 1500,
      label: 'EmojiPicker is dynamic-imported.',
      fallbackType: FALLBACK_TYPES.LOADING_TEXT,
      defaultOpen: true
    }
  },
  [LOADING_PATTERN_IDS.ROUTE_BASED_CODE_SPLITTING]: {
    channel: {
      delay: 1500,
      label: 'The whole Channel is dynamic-imported based on Route-based code splitting.',
      fallbackType: FALLBACK_TYPES.LOADING_TEXT
    },
    messageList: {
      delay: 0,
      label: '',
      fallbackType: ''
    },
    messageInput: {
      delay: 0,
      label: '',
      fallbackType: ''
    },
    emojiPicker: {
      delay: 0,
      emojiMartDelay: 0,
      label: '',
      fallbackType: '',
      defaultOpen: true
    }
  },
  [LOADING_PATTERN_IDS.DYNAMIC_IMPORT_WITH_ERROR_BOUNDARY]: {
    messageList: {
      delay: 0,
      label: 'MessageList is static-imported.',
      fallbackType: ''
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is static-imported.',
      fallbackType: ''
    },
    emojiPicker: {
      delay: 1500,
      label: 'EmojiPicker is dynamic-imported and wrapped in ErrorBoundary.',
      fallbackType: FALLBACK_TYPES.LOADING_TEXT,
      defaultOpen: true
    }
  },
  [LOADING_PATTERN_IDS.IMPORT_ON_INTERACTION]: {
    messageList: {
      delay: 0,
      label: 'MessageList is static-imported.',
      fallbackType: ''
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is static-imported.',
      fallbackType: ''
    },
    emojiPicker: {
      delay: 0,
      emojiMartDelay: 1000,
      label: 'EmojiPicker is lazy-loaded on user interacting with the button.',
      fallbackType: '',
      defaultOpen: true
    }
  },
  [LOADING_PATTERN_IDS.LOADABLE_COMPONENTS]: {
    messageList: {
      delay: 0,
      label: 'MessageList is static-imported.',
      fallbackType: ''
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is static-imported.',
      fallbackType: ''
    },
    emojiPicker: {
      delay: 1500,
      label: 'EmojiPicker is dynamic-imported using Loadable Components.',
      fallbackType: FALLBACK_TYPES.LOADING_TEXT,
      defaultOpen: true
    }
  },
  [LOADING_PATTERN_IDS.LOADABLE_COMPONENTS_SSR]: {
    messageList: {
      delay: 0,
      label: 'MessageList is server-rendered.',
      fallbackType: ''
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is server-rendered but we static-imported JS to make it interactive.',
      fallbackType: ''
    },
    emojiPicker: {
      delay: 0,
      label: 'EmojiPicker is dynamic-imported but we can see it without delay because it\'s server-rendered.',
      fallbackType: '',
      defaultOpen: true
    }
  },
  [LOADING_PATTERN_IDS.STREAMING_RENDERING]: {
    messageList: {
      delay: 0,
      label: 'MessageList is server-stream-rendered.',
      fallbackType: ''
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is server-stream-rendered but we static-imported JS to make it interactive..',
      fallbackType: ''
    },
    emojiPicker: {
      delay: 0,
      label: 'EmojiPicker is dynamic-imported but we can see it without delay because it\'s server-stream-rendered.',
      fallbackType: '',
      defaultOpen: true
    }
  },
  [LOADING_PATTERN_IDS.PROGRESSIVE_HYDRATION]: {
    messageList: {
      delay: 0,
      label: 'MessageList is server-rendered but progressively hydrated by Concurrent Mode.',
      fallbackType: ''
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is server-rendered but progressively hydrated by Concurrent Mode.',
      fallbackType: ''
    },
    emojiPicker: {
      delay: 0,
      label: 'EmojiPicker is server-rendered but progressively hydrated by Concurrent Mode.',
      fallbackType: '',
      defaultOpen: true
    }
  },
  [LOADING_PATTERN_IDS.IMPORT_ON_VISIBILITY]: {
    messageList: {
      delay: 0,
      label: 'MessageList is static-imported.',
      fallbackType: ''
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is static-imported.',
      fallbackType: ''
    },
    emojiPicker: {
      delay: 0,
      label: '',
      fallbackType: '',
      defaultOpen: false
    },
    gifFinder: {
      delay: 2000,
      label: 'GifFinder is lazy-loaded when it\'s visible in the viewport (available at Import on visibility option from Category).',
      fallbackType: FALLBACK_TYPES.LOADING_TEXT
    }
  },
  [LOADING_PATTERN_IDS.PREFETCH]: {
    messageList: {
      delay: 0,
      label: 'MessageList is static-imported.',
      fallbackType: ''
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is static-imported.',
      fallbackType: ''
    },
    emojiPicker: {
      delay: 0,
      label: 'EmojiPicker is prefetched.',
      fallbackType: '',
      defaultOpen: true
    }
  },
  [LOADING_PATTERN_IDS.PRELOAD]: {
    messageList: {
      delay: 0,
      label: 'MessageList is static-imported.',
      fallbackType: ''
    },
    messageInput: {
      delay: 0,
      label: 'MessageInput is static-imported.',
      fallbackType: ''
    },
    emojiPicker: {
      delay: 0,
      label: 'EmojiPicker is preloaded.',
      fallbackType: '',
      defaultOpen: true
    }
  },
  [LOADING_PATTERN_IDS.ROUTE_BASED_CODE_SPLITTING_WITH_SKELETON_UI]: {
    channel: {
      delay: 1500,
      label: 'The whole Channel is dynamic-imported based on Route-based code splitting.',
      fallbackType: FALLBACK_TYPES.SKELETON_UI
    },
    messageList: {
      delay: 0,
      label: '',
      fallbackType: ''
    },
    messageInput: {
      delay: 0,
      label: '',
      fallbackType: ''
    },
    emojiPicker: {
      delay: 0,
      emojiMartDelay: 0,
      label: '',
      fallbackType: '',
      defaultOpen: true
    }
  }
};

export {
  FALLBACK_TYPES
};

export default previewAdjustments;
