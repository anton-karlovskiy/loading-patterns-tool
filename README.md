# React Loading Patterns Tool

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![React](https://img.shields.io/badge/React-16.12.0-blue.svg)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> **Interactive demonstration tool for React code splitting and loading patterns** - Learn and compare different React loading strategies with live code examples and visual demonstrations.

## 🚀 Overview

The **React Loading Patterns Tool** is an interactive educational application that demonstrates various React code splitting and loading patterns. Built by Google, this tool helps developers understand and implement different strategies for optimizing React application performance through code splitting, lazy loading, and progressive enhancement.

### ✨ Key Features

- **Interactive Code Examples**: Live demonstrations of 13 different React loading patterns
- **Visual Comparisons**: Side-by-side code snippets with real-time previews
- **Skeleton UI Support**: Toggle between basic loading states and skeleton UI patterns
- **Educational Content**: Detailed explanations and references for each pattern
- **Mobile Responsive**: Optimized for both desktop and mobile devices
- **SEO Optimized**: Built with performance and discoverability in mind

## 🎯 Supported Loading Patterns

### Core Patterns
- **Static Import** - Traditional ES6 module imports
- **Dynamic Import** - React.lazy() with Suspense
- **Route-based Code Splitting** - Lazy loading at route level
- **Error Boundaries** - Error handling for dynamic imports

### Advanced Patterns
- **Import on Interaction** - Load components on user interaction
- **Loadable Components** - Alternative to React.lazy with SSR support
- **Progressive Hydration** - React Concurrent Mode features
- **Import on Visibility** - Intersection Observer-based loading
- **Prefetch/Preload** - Resource optimization strategies

### Server-Side Rendering
- **SSR with Loadable Components** - Server-side rendering support
- **Streaming Rendering** - Progressive server-side rendering
- **Progressive Hydration** - Client-side hydration optimization

## 🛠️ Technology Stack

- **Frontend**: React 16.12.0, JavaScript ES6+
- **Build Tool**: Create React App
- **Styling**: CSS Modules, Responsive Design
- **Code Highlighting**: react-syntax-highlighter
- **Markdown**: react-markdown
- **Icons**: Custom SVG components
- **Deployment**: Firebase Hosting

## 🚀 Quick Start

### Prerequisites
- Node.js (v12 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/anton-karlovskiy/loading-patterns-tool.git
   cd loading-patterns-tool
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
# or
yarn build
```

### Deploy to Firebase

```bash
npm run deploy
# or
yarn deploy
```

## 📖 How to Use

1. **Select a Loading Pattern**: Choose from the dropdown or radio buttons on the right
2. **Toggle Skeleton UI**: Enable/disable skeleton UI to see different loading states
3. **View Code Examples**: See the implementation code in the left panel
4. **Interactive Preview**: Watch the loading behavior in the messenger interface
5. **Read Documentation**: Learn about each pattern in the description section

## 🎨 Features in Detail

### Interactive Learning
- **Live Code Examples**: Real React code snippets for each pattern
- **Visual Demonstrations**: Working messenger interface showing loading states
- **Pattern Comparison**: Easy switching between different approaches
- **Educational Content**: Comprehensive explanations and external references

### Performance Optimization
- **Code Splitting**: Demonstrates various code splitting strategies
- **Lazy Loading**: Shows different lazy loading implementations
- **Resource Optimization**: Prefetch and preload pattern examples
- **Progressive Enhancement**: Skeleton UI and progressive hydration

### Developer Experience
- **Mobile Responsive**: Works seamlessly on all device sizes
- **Accessibility**: ARIA labels and keyboard navigation support
- **SEO Friendly**: Optimized meta tags and semantic HTML
- **Fast Loading**: Optimized bundle size and loading performance

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── CodeSnippetArea/ # Code display component
│   ├── PreviewArea/     # Live preview interface
│   ├── LoadingPatternOptionList/ # Pattern selection
│   └── ...
├── containers/          # Main application container
├── utils/               # Utility functions and data
│   ├── data/           # Loading patterns data
│   ├── helpers/         # Helper functions
│   └── hooks/           # Custom React hooks
└── hoc/                 # Higher-order components
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm test`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📚 Learning Resources

### React Code Splitting
- [React Documentation - Code Splitting](https://reactjs.org/docs/code-splitting.html)
- [Web.dev - Code Splitting Guide](https://web.dev/code-splitting-suspense/)
- [React.lazy() and Suspense](https://reactjs.org/docs/code-splitting.html#reactlazy)

### Performance Optimization
- [Web.dev - JavaScript Performance](https://web.dev/fast/)
- [React Performance Tips](https://reactjs.org/docs/optimizing-performance.html)
- [Bundle Analysis Tools](https://webpack.js.org/guides/code-splitting/)

### Server-Side Rendering
- [React SSR Guide](https://reactjs.org/docs/react-dom-server.html)
- [Loadable Components Documentation](https://loadable-components.com/)
- [Progressive Hydration](https://reactjs.org/docs/concurrent-mode-intro.html)

## 🐛 Troubleshooting

### Common Issues

**Build Errors**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Development Server Issues**
```bash
# Check if port 3000 is available
npm start -- --port 3001
```

**Firebase Deployment Issues**
```bash
# Login to Firebase
firebase login
# Initialize Firebase (if not done)
firebase init
```

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google** - For creating and maintaining this educational tool
- **React Team** - For the amazing React framework and documentation
- **Web.dev** - For comprehensive web performance resources
- **Open Source Community** - For the libraries and tools that make this possible

## 🔗 Related Projects

- [React Documentation](https://reactjs.org/)
- [Web.dev Performance](https://web.dev/fast/)
- [Loadable Components](https://loadable-components.com/)
- [React Concurrent Mode](https://reactjs.org/docs/concurrent-mode-intro.html)

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/anton-karlovskiy/loading-patterns-tool/issues)
- **Discussions**: [GitHub Discussions](https://github.com/anton-karlovskiy/loading-patterns-tool/discussions)
- **Documentation**: [Project Wiki](https://github.com/anton-karlovskiy/loading-patterns-tool/wiki)

---

**Made with ❤️ by the Google team for the React community**

*This tool is designed to help developers understand and implement React loading patterns effectively. Whether you're a beginner learning code splitting or an experienced developer optimizing performance, this tool provides practical examples and real-world implementations.*