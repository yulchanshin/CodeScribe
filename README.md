# CodeScribe

**CodeScribe** is a powerful developer tool for creating interactive documentation. It allows you to write JavaScript/JSX code alongside Markdown explanation cells directly from your command line, offering a seamless, local notebook experience similar to Jupyter but tailored for the modern JavaScript ecosystem.

## ✨ Features

*   **Interactive Coding**: Write and execute JavaScript and React code snippets directly in your browser.
*   **Rich Documentation**: Combine executable code with Markdown text cells for comprehensive guides and tutorials.
*   **Instant Feedback**: See the output of your code immediately as you type.
*   **Local Persistence**: Your work is saved automatically to your local file system.
*   **Zero Configuration**: Launch with a single command and start coding instantly.
*   **Modern Stack**: Built with React, Redux, implementation of esbuild-wasm for in-browser bundling.

## 🏗 Architecture

CodeScribe is built as a **monorepo** using Lerna, consisting of three independent packages:

1.  **`cli`**: The command-line interface that launches the application.
2.  **`local-api`**: The Express server responsible for serving the React app and saving/loading cells from the user's file system.
3.  **`local-client`**: The React front-end application with an interactive code editor (Monaco Editor) and preview bundler.

## 🚀 Getting Started

### Prerequisites

*   Node.js (v14 or higher)
*   npm (v6 or higher)

### Installation

Clone the repository to your local machine:

```bash
git clone <repository-url>
cd codescribe
```

Install dependencies and link packages using Lerna:

```bash
# From the root directory
npm install
npm start
```

## 📖 Usage

### Development Mode

To run the entire CodeScribe suite in development mode (launching all packages in parallel):

```bash
npm start
```

This command uses Lerna to start the build processes for the CLI, API, and Client simultaneously.

### Using the CLI

Once built/installed, you can use the CLI to serve your notebook files.

The basic command structure is:

```bash
codescribe serve [filename] [options]
```

*   `filename` (optional): The name of the notebook file to open or create. Defaults to `notebook.js`.

#### Options

*   `-p, --port <number>`: Port to run the server on (default: `4005`).

#### Examples

**Open a specific notebook:**

```bash
codescribe serve my-notes.js
```

**Run on a specific port:**

```bash
codescribe serve --port 4006
```

_Note: If running commercially or distributing, you would typically link the `cli` package globally using `npm link` inside `packages/cli`._

## 🛠 Tech Stack

*   **Lerna**: For managing multi-package repositories.
*   **React & Redux**: Frontend UI and state management.
*   **Express**: Backend API for local file management.
*   **Commander**: For building the CLI interface.
*   **Monaco Editor**: The powerful code editor that powers VS Code.
*   **ESBuild (WASM)**: For lightning-fast in-browser code bundling.
*   **TypeScript**: Complete type safety across all packages.

## 📄 License

This project is licensed under the ISC License.
