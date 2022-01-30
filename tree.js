let fs = require('fs');
let path = require('path');

function tree(file_path){
    if(fs.existsSync(file_path) && fs.lstatSync(file_path).isDirectory()){
        treehelper(file_path,"");
        return true;
    }else{
        return false;
    }
}

function treehelper(file_path,space){
    if(fs.lstatSync(file_path).isDirectory()){
        console.log(space+path.basename(space+file_path));
        let dir_data = fs.readdirSync(file_path);
        for(let idx in dir_data){
            let name = path.join(file_path, dir_data[idx]);
            if(fs.lstatSync(name).isFile()){
                console.log('\t'+space+'******'+path.basename(name));
            }else{
                treehelper(name,space+'\t|_____');
            }
        }
    }
}

module.exports = {
    fun : tree
}