let fs = require('fs');
let cmd_type = process.argv[2];
let path = process.argv[3];
let tree = require('./tree.js');

if(cmd_type === "tree"){
    if(fs.existsSync(path) && fs.lstatSync(path).isDirectory()){
        tree.fun(path);
    }else{
        console.log("INVALID PATH");
    }
}else{
    console.log("sorry no command with this name");
}



