# vs-new

Set up a blueprint folder ready to go for TypeScript Node.js development in VS Code.

This package lets you deploy a pre-configured directory structure including:

* Boilerplate README markdown file
* blank git repository, with a .gitignore that ignores `./node_modules/`, `./build/` and the `./coverage` directories
* .vscode folder with:
    * pre-configured launch.json file with a `debug-current-working-file` config
    * pre-configured tasks.json that defines a tsc-watch task for background TypeScript compiling
    * some recommended vscode extensions that you may find useful for generic Typescript development
* pre-configured tsconfig.json that auto-includes all .ts files under ./src
* package.json file
    * includes dependencies for TypeScript development & debugging, testing with Jest, and ts-node & typescript packages for debugging .ts files directly in VS Code
    * Auto-populates the package name and author name (using your Windows username)
* ./src/test/test.ts includes boilerplate Jest test

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

### 2.0.0

* Replace `mocha` with `jest` as the test runner
* Run `npm i ...` to install all the dev dependencies in the resulting project, rather than just copying a static package.json file
  * This allows the user to always start with the latest versions of all these packages
* Added a helper library and a sample unit test which better demonstrate the unity test functionality
* Added recommended VS Code extensions to support generic Typescript development.

### 1.2.2

* Moved all @types dependencies in the generated package.json file to devDependencies

### 1.2.1

* Added shebang to main.js and `bin` field to package.json, which are required for `npm i -g ./` to work
* .gitignore file is now being generated correctly.

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

# Development

