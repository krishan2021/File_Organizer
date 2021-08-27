let fs=require("fs");
let path=require("path");


function treefunction(givenpath,count){
    let folderinspace="";
    let folderoutspace="";
    for(let i=1;i<=count;i++){
        folderinspace+=" ";
        if(count-i>=0){
        folderoutspace+=" ";
        }
    }
    let alldata=fs.readdirSync(givenpath);

    let basename=path.basename(givenpath);
    console.log(folderinspace+basename);
    
   
    console.log(folderinspace+" |__");

    let entities="";
    for(let i=0;i<alldata.length;i++){
           
        if(fs.statSync(path.join(givenpath,alldata[i])).isFile()){
        entities+= folderoutspace+"     ├──"+alldata[i]+"\n";
        }else{
           
             treefunction(path.join(givenpath,alldata[i]),count+4);
           
        }
    }
    console.log(entities);
}

module.exports={
    treefun:treefunction
}