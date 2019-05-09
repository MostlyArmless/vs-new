#!/usr/bin/env node
var ncp = require('ncp').ncp;
var jsonfile = require('jsonfile');
var os = require('os');
var fs = require('fs');
var path = require('path');
var { exec } = require('child_process');

let packageName = process.argv[2];
try {
    fs.mkdirSync(packageName)    
} catch (err) {
    console.error(`There's already a folder with the package name "${packageName}" in this directory. Aborting.`);
    process.exit(-1);
}

let packageDir = path.join(process.cwd(), packageName);

ncp.limit = 16;
ncp(path.join(__dirname,'../blueprint/'), packageDir, function(err) {
    if (err) {
        return console.error(err);
    }

    // Replace the package name and author name
    let packageFilePath = path.join(packageDir, '/package.json');
    console.log(packageFilePath);

    let username = 'Dummy User';
    try {
        username = os.userInfo().username
    } catch (error) {
        console.error('Error getting Windows username, using default username');        
    }
    
    let packageJsonContents = jsonfile.readFileSync(packageFilePath);
    packageJsonContents.name = packageName;
    packageJsonContents.author = username;
    binField = {};
    binField[packageName] = "./build/main.js";
    packageJsonContents.bin = binField;

    jsonfile.writeFileSync(packageFilePath, packageJsonContents, { spaces: 2 });

    console.log(`Package name = "${packageName}", author = "${username}"`);

    // Set up a blank git repo
    exec(`git init ./${packageName}`, (err, stdout, stderr) => {
        if (err) {
            // node couldn't execute the command
            console.error('git init command failed due to node.');
            return;
        }
        console.log(stdout);
        if (stderr) {
            console.error(`stderr: ${stderr}`);
        }
    });
    // Create a .gitignore file with default contents
    gitIgnoreContents = 
    `# Ignore node_modules anywhere in the directory tree
**/node_modules/
# Ignore the outputs of tsc
/build/`;
    fs.writeFileSync(`./${packageName}/.gitignore`, gitIgnoreContents);
    
    // Insert the package name into the README file
    const deployedReadmeFile = `./${packageName}/README.md`;
    let readmeContents = fs.readFileSync(deployedReadmeFile, 'utf8');
    let newReadmeContents = readmeContents.replace(/my-new-project/gi, packageName);
    fs.writeFileSync(deployedReadmeFile, newReadmeContents);
});