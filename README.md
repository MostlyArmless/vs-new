# vs-new

Set up a blueprint folder ready to go for TypeScript Node.js development in VS Code.

This package lets you deploy a pre-configured directory structure including:

* Boilerplate README markdown file
* blank git repository, with a .gitignore that ignores ./node_modules/ and the ./build/ directory
* .vscode folder with:
    * pre-configured launch.json file with a Mocha test debug config, and a debug-current-working-file config
    * pre-configured tasks.json that defines a tsc-watch task for background TypeScript compiling
* pre-configured tsconfig.json that auto-includes all .ts files under ./src
* package.json file
    * includes dependencies for TypeScript development & debugging, testing withg Mocha & Chai, and ts-node & typescript packages for debugging .ts files directly in VS Code
    * Auto-populates the package name and author name (using your Windows username)
* ./src/test/test.ts includes boilerplate Mocha test

## Installation

Install as a global command line tool:

```bash
npm i -g vs-new
```

## Usage

From your parent Projects directory:

```bash
vs-new my-new-project
```

will create a new directory named my-new-project, will insert that name into the package.json file, and will use your Windows username to populate the Author field. All other boilerplate files will be copied into the directory.

## Revisions

### 1.1.4

* Improved README
* Blueprint README file now also auto-populates the package name.

### 1.1.0

* Added content to blueprint README file
* Made the boilerplate Mocha tests runnable
* Fixed path to test folder in blueprint launch.json
* Added error handling on retrieving Windows username
* Now script will run `git init` in the deployed directory, rather than attempting to copy a blank .git folder
* Launch.json now uses the integrated terminal by default instead of the debugger console, in order to allow for debugging of interactive CLI apps
* Fixed typo in deployed package.json (main.ts -> main.js)
* Fixed typo in README

### 1.0.2

Added `ts-node` and `typescript` packages to the dev-dependencies so that the "Launch current file with ts-node" launch config will work out-of-the-box.

## TODO

Potential upcoming features:

* Add an argument to let user choose whether to deploy a vanilla javascript setup, or a typescript one (default)
