#!/usr/bin/env node
let fs = require('fs');


if(process.argv[2] === undefined){
    console.log("Sorry no command with this name please check the syntax use -h or --help.");
    return;
}

let cmd_type = process.argv[2].toLowerCase();
let path = process.argv[3];

let tree = require('./tree.js');
let help = require('./help.js');
let organize = require('./organize.js');



if(cmd_type === "--tree" || cmd_type === "-t"){
    if(path === undefined){
        tree.fun(process.cwd());
    }else if(fs.existsSync(path) && fs.lstatSync(path).isDirectory()){
        tree.fun(path);
    }else{
        console.log("INVALID PATH or THE FOLLOWING PATH IS NOT A DIRECTORY use -h or --help");
    }
}else if(cmd_type === "--help" || cmd_type === "-h"){
    help();
}else if(cmd_type === "-o" || cmd_type === "--organize"){
    if(path === undefined){
        organize(process.cwd());
    }else if(fs.existsSync(path) && fs.lstatSync(path).isDirectory()){
        organize(path);
    }else{
        console.log("INVALID PATH OR THE FOLLOWING PATH IS NOT A DIRECTORY use -h or --help");
    }
}
else{
    console.log("Sorry no command with this name please check the syntax use -h or --help.");
}



