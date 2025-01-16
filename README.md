# Vue Standalone Component

A proof-of-concept project demonstrating how to create reusable Vue 3 Custom Elements that can be integrated into any web application, regardless of the framework being used. This project showcases the power of Web Components using Vue 3, Vite, PrimeVue, and Firebase.

## Features

- 🎯 Framework-agnostic: Use the component in any web application
- ⚡️ Built with Vite for optimal performance
- 🎨 Styled with PrimeVue components and Aura theme
- 🔥 Firebase integration ready
- 🚀 Simple integration via a single JavaScript file

## Installation

1. Clone the repository:
2. Install dependencies:
```bash
npm install
```
3. Build:
```bash
npm run build
```

## Usage

After building the project, you'll find the generated `vue-components.js` file in the `dist` directory. To use the component in your application:

1. Include the script in your HTML:
```html
<script src="path/to/vue-components.js"></script>
```

2. Use the custom element in your HTML:
```html
<vue-app></vue-app>
```

## Project Structure

```
vue-standalone-component/
├── src/
│   ├── App.ce.vue         # Main Custom Element component
│   ├── ChildCounter.vue   # Example child component
│   ├── Goodbye.vue        # Example component
│   ├── HelloVue.vue       # Example component
│   └── main.js           # Custom Element definition and setup
├── vite.config.js        # Vite configuration
└── package.json          # Project dependencies
```

## Technologies Used

- Vue 3
- Vite
- PrimeVue
- Firebase
- Web Components API

## Development

The project is configured to build a single JavaScript file that can be easily distributed and integrated into any web application. The build configuration in `vite.config.js` is optimized for this use case, producing a self-contained IIFE (Immediately Invoked Function Expression) bundle.

## Configuration

The project uses Vite for building and bundling. Key configuration options can be found in `vite.config.js`. The build is configured to:

- Generate a single JavaScript file (`vue-components.js`)
- Include all dependencies inline
- Support asset handling with proper file naming

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC

## Created By

YES-MKT

---
Last updated: 2025-01-16
