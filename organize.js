
let fs = require('fs');
let path_mod = require('path');

function organize(path){
    let files = checkFilesinDirectory(path);
    if(files.length == 0){
        console.log('No files in directory');
    }else{
        if(fs.existsSync(path_mod.join(path, 'Organize_Folder'))){
            console.log('Organize folder already exists It will be updated');
            
            files_path_list = fs.readdirSync(path);
            console.log(files_path_list);

            files_path_list.forEach(x => {
                if(fs.lstatSync(path_mod.join(path,x)).isFile()){
                    let type = path_mod.extname(x).split('.')[1].toUpperCase();
                    if(fs.existsSync(path_mod.join(path,'Organize_Folder',type)) == false){
                        fs.mkdirSync(path_mod.join(path,'Organize_Folder',type));
                    }
                }
            })

            files_path_list.forEach(x => {
                if(fs.lstatSync(path_mod.join(path,x)).isFile()){
                    let type = path_mod.extname(x).split('.')[1].toUpperCase();
                    let file_name = path_mod.basename(x);
                    console.log("Copying file "+path_mod.basename(x)+" into "+path_mod.join(__dirname,'Organize_Folder',type));
                    fs.copyFileSync(path_mod.join(path,x),path_mod.join(path,'Organize_Folder',type,file_name));
                    fs.unlinkSync(path_mod.join(path,x));
                }
            })
            console.log('New Files added successfully');

        }else{
            fs.mkdirSync(path_mod.join(path, 'Organize_Folder'));
            
            console.log('Organize folder created successfully');
            
            files.forEach(x => {
                console.log("Creating folder of "+x.split('.')[1].toUpperCase()+" files");
                fs.mkdirSync(path_mod.join(path,'Organize_Folder',x.split('.')[1].toUpperCase()));
            })
            
            console.log('Folders created successfully');

            files_path_list = fs.readdirSync(path);
            console.log(files_path_list);

            files_path_list.forEach(x => {
                if(fs.lstatSync(path_mod.join(path,x)).isFile()){
                    let type = path_mod.extname(x).split('.')[1].toUpperCase();
                    let file_name = path_mod.basename(x);
                    console.log("Copying file "+path_mod.basename(x)+" into "+path_mod.join(__dirname,'Organize_Folder',type));
                    fs.copyFileSync(path_mod.join(path,x),path_mod.join(path,'Organize_Folder',type,file_name));
                    fs.unlinkSync(path_mod.join(path,x));
                }
            })
            console.log('Files Copied successfully');
        }
    }
}

function checkFilesinDirectory(path){
    var files = new Set();
    let files_list = fs.readdirSync(path);
    files_list.forEach((x) => {
        if(fs.lstatSync(path_mod.join(path,x)).isFile()){
            files.add(path_mod.extname(x));
        }
    })
    return files;
}

module.exports = organize;