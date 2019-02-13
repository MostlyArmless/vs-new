# vs-new
Set up a blueprint folder ready to go for TypeScript Node.js development in VS Code.

This package lets you deploy a preconfigured directory structure including:
* .git folder, with .gitignore that ignores /node_modules/
* .vscode folder with preconfigured launch.json and tasks.json
* preconfigured tsconfig.json
* blank README.md
* package.json preconfigured with mocha and chai pre-installed
* test folder with a boilerplate mocha test.ts file

## Installation
<code>npm i -g vs-new</code>

## Usage
From your parent Projects directory: <code>vs-new my-new-project</code> will create a new directory named my-new-project, will insert that name into the package.json file, and will use your Windows username to populate the Author field. All other boilerplate files will be copied into the directory.

## Revisions
### 1.0.3
* Added content to blueprint README file
* Made the boilerplate Mocha tests runnable
* Fixed path to test folder in blueprint launch.json
* Added error handling on retreiving Windows username
* Now script will run <code>git init</code> in the deployed directory, rather than attempting to copy a blank .git folder
* Launch.json now uses the integrated terminal by default instead of the debugger console, in order to allow for debugging of interactive CLI apps
* Fixed typo in deployed package.json (main.ts -> main.js)
* Fixed typo in README

### 1.0.2
Added <code>ts-node</code> and <code>typescript</code> packages to the dev-dependencies so that the "Launch current file with ts-node" launch config will work out-of-the-box.

## TODO
Potential upcoming features:
* Add an argument to let user choose whether to deploy a vanilla javascript setup, or a typescript one (default)
