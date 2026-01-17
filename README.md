# Coffee Extension for Raycast (with Display Off Feature)

A modified version of the [Coffee extension](https://github.com/raycast/extensions/tree/main/extensions/coffee) for Raycast that adds support for keeping your Mac awake while allowing the display to sleep.

## 🆕 New Feature: Caffeinate For (Display Off)

This fork adds a new command that uses the `caffeinate -i` flag to prevent system sleep while allowing the display to turn off. Perfect for:

- 💾 Large downloads or uploads
- 🔄 Background processes and scripts
- 🔋 Saving battery while keeping tasks running
- ☁️ Cloud syncing operations

## Original Extension

This is a modified version of the Coffee extension originally created by:
- **Author**: [mooxl](https://github.com/mooxl)
- **Contributors**: bibixx, GastroGeek, pernielsentikaer, oasaleh, xilopaint, ridemountainpig, zakj, Visual-Studio-Coder
- **Original Repository**: [raycast/extensions](https://github.com/raycast/extensions/tree/main/extensions/coffee)
- **License**: MIT

## Installation

Since this is a custom development version, you'll need to run it in development mode:

### Prerequisites

- [Raycast](https://www.raycast.com/) installed
- [Node.js](https://nodejs.org/) (v20 or later)
- npm or yarn

### Steps

1. **Clone this repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/raycast-coffee-display-off.git
   cd raycast-coffee-display-off
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   
   Keep this terminal running. The extension will automatically appear in Raycast.

4. **Use the extension**:
   - Open Raycast (⌘ + Space)
   - Search for "Caffeinate For (Display Off)"
   - Enter duration (hours, minutes, seconds) or leave empty for indefinite

5. **Optional - Stop development mode**:
   - Press `Ctrl + C` in the terminal to stop the dev server
   - The extension will remain in Raycast and continue to work

## Features

All original Coffee extension features plus:

### New Command
- **Caffeinate For (Display Off)** - Keep system awake but allow display to sleep, with optional duration

### Original Commands
- **Caffeinate** - Prevent your Mac from sleeping indefinitely
- **Decaffeinate** - Turn off caffeine
- **Caffeinate For** - Prevent sleep for a specific duration
- **Caffeinate Until** - Prevent sleep until a specific time
- **Caffeinate While** - Prevent sleep while an app is running
- **Toggle Caffeinate** - Toggle caffeination on/off
- **Schedule Caffeination** - Set up automatic schedules
- **Caffeinate Status** - Check current status
- **Caffeinate Status Menu Bar** - Show status in menu bar

## How It Works

The extension uses macOS's built-in `caffeinate` command with different flags:

- **Regular Caffeinate**: Uses `-d` flag (prevents display AND system sleep)
- **Display Off Mode**: Uses `-i` flag (prevents system idle sleep, allows display to sleep)

## Development

To modify the extension:

1. Make changes to files in the `src/` directory
2. The dev server will automatically reload
3. Test changes in Raycast

## Build

To check for errors:
```bash
npm run build
```

## License

MIT License - See [LICENSE](LICENSE) file for details

This is a derivative work of the original Coffee extension, which is also licensed under MIT.

## Credits

Original Coffee extension created by the Raycast community. This fork adds display-off functionality to extend its capabilities.

## Contributing

This is a personal fork. If you want to contribute the display-off feature to the official extension, please submit a PR to the [official Raycast extensions repository](https://github.com/raycast/extensions).
