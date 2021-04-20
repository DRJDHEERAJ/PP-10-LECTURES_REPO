//make folder and store the types of th foder in it
//images = .jpg , .jpeg like this

let fs= require('fs');
let path = require('path');
let extensions={
  //keys are images,audio
    "Images":['.png','.jpg','.jpeg','.gif'],
    'Audio':['.mp3'],
    'Documents':['.pdf','.txt','.doc'],
    'Compressed':['.zip','.rar'],
    'Videos':['.mkv','.mp4']
}
let input = process.argv.slice(2);
let folderPath = input[0];
console.log(input[0]);
let extFolderPath = folderPath;

function createFolder(){
    console.log(extFolderPath);
    fs.mkdirSync(extFolderPath);
}

function checkFolder(extension,folderPath)///checck the folder is exist
{
    for(let key in extensions)
    {
        let arr = extensions[key];
        //array.includes values array exist or not
        let eon = arr.includes(extension);
        //given extension is exist or not checking
        if(eon==true)
        {
            // console.log(true);
          // console.log(key);//////////////////////////////////////////////////////////////////////////////////////////////
            extFolderPath = path.join(folderPath,key);
            //join combines the path of material folder with keys   by /
            console.log(extFolderPath);//this print in output
            break;    
        }
        
    }
    return fs.existsSync(extFolderPath);
    // exist krta h ya nhi check
    
}

let content = fs.readdirSync(folderPath);
for(let i=0;i<content.length;i++)
{
    // console.log(content[i]);
    //extensions
   // console.log(path.extname(content[i]));////////////////////////////////////////////////////////////////////
    let extensionName = path.extname(content[i]);
    let extensionFolderExist =checkFolder(extensionName,folderPath);
  // console.log(extensionFolderExist); ////////////////////////////////////////////////////////////////////////

if(extensionFolderExist == false){
    createFolder();////make folder and store the types of th foder in it

}



}



//output//


// mp3
// Audio
// D:\DEV\material\Audio
// false
// .json
// false
// .jpg
// Images
// D:\DEV\material\Images
// false
// .pdf
// Documents
// D:\DEV\material\Documents
// false
// .mp4
// Videos
// D:\DEV\material\Videos
// false
// .mp4
// Videos
// D:\DEV\material\Videos
// false
// .mp3
// Audio
// D:\DEV\material\Audio
// false
// .jpeg
// Images
// D:\DEV\material\Images
// false
// .jpeg
// Images
// D:\DEV\material\Images
// false

























// D:\DEV\javascript3>node aactivity.js D:\DEV\material
// D:\DEV\material
// D:\DEV\material\Audio
// D:\DEV\material\Images
// D:\DEV\material\Documents
// D:\DEV\material\Videos
// D:\DEV\material\Videos
// D:\DEV\material\Audio
// D:\DEV\material\Images
// D:\DEV\material\Images

// D:\DEV\javascript3>




