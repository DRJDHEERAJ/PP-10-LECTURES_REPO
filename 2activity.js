let fs= require('fs');
let path = require('path');
//path of folder
let extensions={
    ///this is object
    "Images":['.png','.jpg','.jpeg','.gif'],
    'Audio':['.mp3'],
    'Documents':['.pdf','.txt','.doc'],
    'Compressed':['.zip','.rar'],
    'Videos':['.mkv','.mp4']
}
let input = process.argv.slice(2);

console.log(input[0]);
let content = fs.readdirSync(input[0]);
//[0]means start from 0 index
for(let i=0;i<content.length;i++)
{
    //loop for travel all files
    // console.log(content[i]);//this gives the full name of file with its type
    //extensions
    console.log(path.extname(content[i]));
    //this gives the extension of the given path
    //path is module
    //extname is typeof keys in function 
    //
}
