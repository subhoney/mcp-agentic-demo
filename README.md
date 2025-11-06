# Syniti Lunch & Learn - MCP Servers & Agentic AI

A NestJS web application for the Syniti Lunch & Learn session on Model Context Protocol (MCP) Servers and Agentic AI.

## 🚀 Features

- Professional welcome page with Syniti branding
- Detailed session agenda
- Key topics overview
- Resources section
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
- **Runtime:** Node.js
- **Language:** TypeScript
- **Template Engine:** HTML
- **Styling:** CSS3
- **Package Manager:** npm

## 📝 Notes

- The application runs on port 3000 by default
- All static assets are served from the `public/` directory
- Views are served from the `views/` directory
- TypeScript errors shown in the IDE will resolve once dependencies are installed

## 🤝 Contributing

This is a demo application for the Syniti Lunch & Learn session. Feel free to modify and extend it as needed for your presentation.

## 📄 License

UNLICENSED - Internal Syniti use only

---

**Syniti** © 2025 | Empowering Data Excellence Through Innovation
