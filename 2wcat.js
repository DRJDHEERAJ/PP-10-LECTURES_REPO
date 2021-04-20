//input
//taking fs file for checking the file is exist using (fs.existsSync) by apply the loop function on filepaths variable   
//check the input file path is exist or not
///if file path is not exist print does not exist
let input = process.argv.slice(2);
let fs = require("fs");
console.log("input",input);
let options = [];
let filepaths = [];
for(let i = 0; i< input.length; i++){

    if(input[i] == "-s" || input[i] == "-b" || input[i] == "-n" ){
    options.push(input[i]);
}
else{
    filepaths.push(input[i]);
}
}
console.log("options" , options);
console.log("filepath" , filepaths);

//apply the loop function on filepaths variable
//for checking the input file path is exist or not
for(let i = 0; i < filepaths.length; i++){
    let isFilePresent = fs.existsSync(filepaths[i]);
    if(isFilePresent == false){
        console.log("filepath" , filepaths[i], "does not exist");
        return;
    }
}







//output
///D:\DEV\javascript3>node 2wcat.js -s -b -n "f1.txt" "f2.txt" "f4.txt"
// input [ '-s', '-b', '-n', 'f1.txt', 'f2.txt', 'f4.txt' ]
// options [ '-s', '-b', '-n' ]
// filepath [ 'f1.txt', 'f2.txt', 'f4.txt' ]
// filepath f4.txt does not exist