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
From your parent Projects directory: <code>vsnew my-new-project</code> will create a new directory named my-new-project and will insert that name into the package.json file. All other boilerplate files will be copied into that directory.

## Revisions
### 1.0.2
Added <code>ts-node</code> and <code>typescript</code> packages to the dev-dependencies so that the "Launch current file with ts-node" launch config will work out-of-the-box.

## TODO
Potential upcoming features:
* Add an argument to determine whether to deploy a vanilla javascript setup, or a typescript one (default)
