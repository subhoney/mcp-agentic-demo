# Syniti Lunch & Learn - MCP Servers & Agentic AI

A NestJS web application for the Syniti Lunch & Learn session on Model Context Protocol (MCP) Servers and Agentic AI.

## 🚀 Features

- Professional welcome page with Syniti branding
- Detailed session agenda
- Key topics overview
- Resources section
- **Interactive presentation mode with reveal.js**
- **Slide-by-slide navigation (keyboard and touch)**
- **Professional slide transitions**
- Fully responsive design
- Modern, clean UI with smooth animations

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

   This will install:
   - NestJS framework and dependencies
   - reveal.js presentation framework (v5.x)
   - TypeScript and build tools

## 🎥 reveal.js Configuration

This application uses reveal.js to provide an interactive presentation experience.

### Basic Configuration

The reveal.js instance is initialized with the following settings in `views/index.html`:

```javascript
Reveal.initialize({
  controls: true,      // Show navigation controls
  progress: true,      // Show progress bar
  center: true,        // Center slides vertically
  hash: true,          // Enable URL hash navigation
  transition: 'slide'  // Transition style (slide/fade/convex/concave/zoom)
});
```

### Navigation

- **Arrow Keys (← →)**: Navigate between slides
- **Space Bar**: Advance to next slide
- **ESC**: Toggle overview mode
- **Touch Gestures**: Swipe left/right on mobile devices

### Static File Serving

The NestJS application is configured to serve reveal.js files from `node_modules`:

```typescript
// src/main.ts
app.useStaticAssets(join(__dirname, '..', 'node_modules'), {
    prefix: '/node_modules/'
});
```

This allows reveal.js CSS and JS files to be loaded directly in the browser.

## ▶️ Running the Application

### Development Mode (with auto-reload)

```bash
npm run start:dev
```

### Production Mode

```bash
# Build the application
npm run build

# Start the production server
npm run start:prod
```

### Standard Start

```bash
npm start
```

## 🌐 Accessing the Application

Once the server is running, open your browser and navigate to:

```
http://localhost:3000
```

You should see a beautiful welcome banner in the console and can access the Lunch & Learn welcome page in your browser.

## 📁 Project Structure

```
mcp-agentic-demo/
├── src/
│   ├── main.ts              # Application entry point
│   ├── app.module.ts        # Root module
│   └── app.controller.ts    # Main controller
├── views/
│   └── index.html           # Welcome page template
├── public/
│   └── styles/
│       └── main.css         # Application styles
├── package.json             # Project dependencies
├── tsconfig.json           # TypeScript configuration
├── nest-cli.json           # NestJS CLI configuration
└── README.md               # This file
```

## 🎨 Customization

### Updating the Agenda

Edit the `views/index.html` file to modify:

- Session times
- Topics
- Agenda items
- Resources

### Changing Styles

Edit `public/styles/main.css` to customize:

- Colors (Syniti branding colors are in CSS variables)
- Layout
- Animations
- Responsive breakpoints

### Adding New Pages

1. Create a new HTML file in the `views/` directory
2. Add a new route in `src/app.controller.ts`
3. Update the CSS as needed

## 🧹 Available Scripts

- `npm start` - Start the application
- `npm run start:dev` - Start in development mode with auto-reload
- `npm run start:prod` - Start in production mode
- `npm run build` - Build the application for production
- `npm run format` - Format code using Prettier

## 🔧 Technology Stack

- **Framework:** NestJS
- **Presentation:** reveal.js (v5.x)
- **Runtime:** Node.js
- **Language:** TypeScript
- **Template Engine:** HTML
- **Styling:** CSS3
- **Package Manager:** npm

## 📝 Notes

- The application runs on port 3000 by default
- All static assets are served from the `public/` directory
- reveal.js files are served from `node_modules/` directory
- Views are served from the `views/` directory
- TypeScript errors shown in the IDE will resolve once dependencies are installed
- The presentation currently has 2 test slides to verify reveal.js integration

## 🎯 User Story: KYB-16214

This implementation completes **KYB-16214: Setup reveal.js Framework in NestJS Application**

✅ **Acceptance Criteria Met:**
- reveal.js npm package installed (v5.x)
- reveal.js initialized with basic configuration
- Basic slide functionality working (2 test slides)
- NestJS server structure maintained (no breaking changes)
- Configuration documented in README

**Next Steps:**
- Convert full agenda sections into slides (KYB-16215)
- Implement keyboard and touch navigation (KYB-16216)
- Add speaker notes integration (KYB-16217)

## 🤝 Contributing

This is a demo application for the Syniti Lunch & Learn session. Feel free to modify and extend it as needed for your presentation.

## 📄 License

UNLICENSED - Internal Syniti use only

---

**Syniti** © 2025 | Empowering Data Excellence Through Innovation
