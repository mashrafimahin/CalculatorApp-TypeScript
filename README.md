# TypeScript Calculator

A modern, responsive calculator built with TypeScript, HTML, and CSS. This project demonstrates clean code architecture, modular design, and modern web development practices.

## 🚀 Features

- **Clean & Modern UI**: Minimalist design with smooth animations and intuitive layout
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **TypeScript**: Full TypeScript implementation for type safety and better development experience
- **Modular Architecture**: Clean separation of concerns with dedicated modules for calculation logic and display management
- **Keyboard Support**: Full keyboard input support for enhanced user experience
- **Error Handling**: Graceful handling of mathematical errors and edge cases
- **Lightweight**: No external dependencies, pure vanilla JavaScript/TypeScript

## 🛠️ Tech Stack

- **TypeScript** - Type-safe JavaScript development
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vite** - Fast build tool and development server
- **ES Modules** - Modern JavaScript module system

## 📦 Installation

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/mashrafimahin/CalculatorApp-TypeScript.git
   cd CalculatorApp-TypeScript
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎯 Usage

### Basic Operations

The calculator supports all standard mathematical operations:

- **Basic Arithmetic**: Addition (+), Subtraction (-), Multiplication (×), Division (÷)
- **Percentage**: Calculate percentages with the % button
- **Decimal Input**: Use the decimal point (.) for floating-point numbers
- **Clear Functions**:
  - `CE`: Clear Entry - removes the last entered digit
  - `AC`: All Clear - resets the entire calculation

### Keyboard Support

For enhanced usability, the calculator supports keyboard input:

- **Numbers**: 0-9
- **Operators**: +, -, \*, /
- **Decimal**: .
- **Equals**: Enter or =
- **Clear**: Escape (AC function)
- **Backspace**: Delete last entered digit (CE function)

### Advanced Features

- **Chain Calculations**: Perform multiple operations in sequence
- **Order of Operations**: Respects mathematical precedence (PEMDAS/BODMAS)
- **Large Numbers**: Handles large numbers with proper formatting
- **Error Prevention**: Prevents invalid operations and displays appropriate feedback

## 🏗️ Architecture

### Project Structure

```
CalculatorApp-TypeScript/
├── src/
│   ├── main.ts          # Application entry point
│   ├── calc.ts          # Calculation logic module
│   ├── display.ts       # Display management module
│   ├── style.css        # Styling and layout
│   └── typescript.svg   # TypeScript logo
├── public/
│   └── vite.svg         # Vite logo
├── index.html           # Main HTML template
├── package.json         # Project configuration
├── tsconfig.json        # TypeScript configuration
└── README.md           # This file
```

### Module Breakdown

#### `calc.ts`

- Core calculation logic using JavaScript's `eval()` function
- Input validation and error handling
- Result formatting and type conversion

#### `display.ts`

- DOM manipulation and event handling
- Button click event management
- Display content updates
- User interaction logic

#### `main.ts`

- Application initialization
- Component assembly and rendering
- Module coordination

## 🔧 Development

### Code Style

This project follows TypeScript best practices:

- Strict type checking enabled
- ES2020 target for modern browser support
- Module resolution set to Node.js standards

### Building

The project uses Vite for fast development and building:

- **Hot Module Replacement (HMR)** during development
- **Tree shaking** for optimized production builds
- **CSS processing** with autoprefixing

### Testing

While this project doesn't include a formal testing framework, you can manually test:

1. All mathematical operations
2. Edge cases (division by zero, very large numbers)
3. Keyboard input functionality
4. Responsive design across different screen sizes
5. Browser compatibility

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Contribution Guidelines

- Maintain TypeScript type safety
- Follow existing code style and patterns
- Update documentation for significant changes
- Test changes across different browsers and devices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### MIT License Summary

- ✅ **Commercial use** - You can use this in commercial projects
- ✅ **Modification** - You can modify the code
- ✅ **Distribution** - You can distribute copies
- ✅ **Private use** - You can use it privately
- ❌ **Liability** - No liability provided
- ❌ **Warranty** - No warranty provided

## 🙏 Acknowledgments

- Built with [TypeScript](https://www.typescriptlang.org/) for type safety
- Styled with modern CSS techniques
- Developed using [Vite](https://vitejs.dev/) for fast builds
- Inspired by modern calculator designs

## 📞 Support

If you encounter any issues or have suggestions for improvements:

1. **Check** the [Issues](https://github.com/mashrafimahin/CalculatorApp-TypeScript/issues) section
2. **Create** a new issue with detailed description
3. **Include** steps to reproduce, expected behavior, and actual behavior
4. **Provide** your environment details (browser, OS, etc.)

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=mashrafimahin/CalculatorApp-TypeScript&type=Date)](https://star-history.com/#mashrafimahin/CalculatorApp-TypeScript&Date)

---

**Made with ❤️ using TypeScript**
