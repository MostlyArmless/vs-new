#!/usr/bin/env node
var ncp = require('ncp').ncp;
var jsonfile = require('jsonfile');
var os = require('os');
var fs = require('fs');
var path = require('path');

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
    let packageJsonContents = jsonfile.readFileSync(packageFilePath);

    
    console.log(`Package name = "${packageName}", author = "${os.userInfo().username}"`);
    packageJsonContents.name = packageName;
    packageJsonContents.author = os.userInfo().username;

    jsonfile.writeFileSync(packageFilePath, packageJsonContents, { spaces: 2 });

    console.log('Done.');
});