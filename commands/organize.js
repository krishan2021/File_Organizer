let fs=require("fs");
let path=require("path");
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    pictures: ['png','jpg','jpeg']
}

function organizefunction(givenpath){

    let organizedfolderpath=path.join(givenpath, "organizedfolder");
    if(!fs.existsSync(organizedfolderpath)){
        fs.mkdirSync(organizedfolderpath);
    }
    let alldata=fs.readdirSync(givenpath);
    for(let i=0;i<alldata.length;i++){

        if(fs.statSync(path.join(givenpath,alldata[i])).isFile()){
        let type=checktype(alldata[i]);
      
        let typepath=path.join(organizedfolderpath, type);
        if(!fs.existsSync(typepath)){
            fs.mkdirSync(typepath);
        }
        
        let srcpath=path.join(givenpath,alldata[i]);
        let destpath=path.join(typepath,alldata[i]);

        fs.copyFileSync(srcpath, destpath);
    }
    }

}


function checktype(file){
    for(let type in types){
        for(let ext of types[type]){
            if(path.extname(file).split(".")[1]==ext){
                return type;
            }
        }
    }
    return 'other';
}
module.exports={
    organizefun:organizefunction
}