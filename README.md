# GMod DSI App

**Simplify your Garry's Mod Dedicated Server setup!**

**⚠️ WARNING: This project is currently under HEAVY development (as of April 2025) and is NOT YET USABLE. Features are incomplete, likely broken, and subject to change. ⚠️**

GMod DSI (Dedicated Server Interface) is a desktop application _intended_ to make configuring and launching Garry's Mod dedicated servers easier, especially for popular gamemodes. Instead of manually editing configuration files, you will eventually be able to use this graphical interface.

## Why Use GMod DSI?

Setting up a Garry's Mod dedicated server often involves command-line arguments and configuration files. GMod DSI provides a user-friendly interface to manage these settings for different gamemodes, saving you time and effort.

## Features

- Provides a Graphical User Interface (GUI) for server configuration.
- Tailored configuration screens for popular Garry's Mod gamemodes:
  - DarkRP
  - Sandbox
  - SCP:RP
  - Star Wars RP (SWRP)
  - Trouble in Terrorist Town (TTT)
- Input fields for essential settings like Installation Directory and Server Name.
- A "Start" button to launch the configured server (Note: This functionality is under development and relies on your server files being correctly set up).

## ⚠️ Installation Warning ⚠️

**This application is currently under heavy development and is NOT ready for general use.** There are no stable releases available for installation yet. Building from source is only recommended for developers or testers who understand the risks of using incomplete software.

## How to Use (Current Development State - NOT FUNCTIONAL)

While you can launch the interface and interact with the elements, the core functionality (launching the server) is **not yet implemented or is highly unstable.**

1.  Open the GMod DSI application.
2.  On the main screen, click the icon for the gamemode you want to configure (e.g., DarkRP, Sandbox).
3.  Fill in the required fields:
    - **Installation Directory:** The full path to your Garry's Mod dedicated server installation folder.
    - **Server Name:** The name you want your server to have in the server browser.
    - _(Other gamemode-specific settings may appear here)._
4.  Click the **"Start"** button. **Currently, this button is unlikely to function correctly. The logic to properly configure and launch `srcds.exe` is still under development.**

## Technologies Used

This application is built using modern web technologies wrapped in a native desktop shell:

- **Framework:** [Tauri](https://tauri.app/) - Allows building desktop apps with web frontend technologies and a Rust backend. Chosen for its performance and security focus.
- **Backend:** Rust - Provides the core logic and interacts with the operating system.
- **Frontend:** HTML, CSS, JavaScript - Standard web technologies for the user interface.
- **CSS Framework:** [Tailwind CSS](https://tailwindcss.com/) - Used for styling the user interface efficiently.

## Building from Source (for Developers/Testers)

If you want to build the application yourself (recommended during development):

1.  **Prerequisites:**
    - Install Rust & Cargo: [rustup.rs](https://rustup.rs/)
    - Install Node.js & npm: [nodejs.org](https://nodejs.org/)
    - Install Tauri prerequisites for your OS: [Tauri Prerequisites Guide](https://tauri.app/v1/guides/getting-started/prerequisites)
2.  **Clone the repository:**
    ```bash
    git clone https://github.com/SpaceBuddy231/gmod-dsi-app.git
    cd gmod-dsi-app
    ```
3.  **Build the application:**
    ```bash
    # This command installs frontend dependencies, builds CSS, compiles Rust, and bundles the app
    cargo tauri build
    ```
    The executable/installer will be in `src-tauri/target/release/bundle/`.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues on the project's repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
