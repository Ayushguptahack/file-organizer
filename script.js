let fs = require('fs');


if(process.argv[2] === undefined){
    console.log("Sorry no command with this name please check the syntax.");
    return;
}

let cmd_type = process.argv[2].toLowerCase();
let path = process.argv[3];

let tree = require('./tree.js');


if(cmd_type === "--tree" || cmd_type === "-t"){
    if(fs.existsSync(path) && fs.lstatSync(path).isDirectory()){
        tree.fun(path);
    }else if(path === undefined){
        tree.fun(process.cwd());
    }else{
        console.log("INVALID PATH");
    }
}else if(cmd_type === "--help" || cmd_type === "-h"){
    console.log("Followig commands are available: \n 1. tree Path_Name or -t Path_Name (IF PATH NOT GIVEN IT WILL WORK ON CURRENT WROKING DIRECTORY)\n 2. help or -h \n3. organize Path_Name or -o Path_Name(IF PATH NOT GIVEN IT WILL WORK ON CURRENT WROKING DIRECTORY)")
}
else{
    console.log("Sorry no command with this name please check the syntax.");
}



