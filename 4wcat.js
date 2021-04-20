//input
//taking fs file for checking the file is exist using (fs.existsSync) by apply the loop function on filepaths variable   
//check the input file path is exist or not
///if file path is not exist print does not exist
////read the file and print it, utf-8 is use for change the data into string (taki woh print ho sake)



///apply the -s option on f1.txt, f2.txt data 


let input = process.argv.slice(2);
let fs = require("fs");
//                 console.log("input",input);
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
//                   console.log("options" , options);
//                  console.log("filepath" , filepaths);

//apply the loop function on filepaths variable
//for checking the input file path is exist or not
for(let i = 0; i < filepaths.length; i++){
    let isFilePresent = fs.existsSync(filepaths[i]);
    if(isFilePresent == false){
      //  console.log("filepath" , filepaths[i], "does not exist");
        return;
    }
}

let totalContent = "";
///using a blank string beacause the data is transfer in this and then print in output
//utf-8 is use for change the data into string
for(let i = 0 ; i < filepaths.length; i++){
    let contentOFcurrent = fs.readFileSync(filepaths[i], "utf-8");
    //content is basically the data of the current file(f1.txt or f2.txt) 
    //read the file and print it, utf-8 is use for change the data into string (taki woh print ho sake)
    //   (\n) is use for line gap between data of f1.txt and f2.txt   
    totalContent += contentOFcurrent + "\n";
}
//console.log(totalContent);



let isSoption = options.includes("-s");
if(isSoption == true){
    let outputArr = totalContent.split("\r\n");
    //use of \r\n is avoid \n  or  \r  in the empty lines
    let tempArr = [];
    //for remove empty strings
    for(let i = 0; i < outputArr.length; i++){
     //   let isElementvalid = outputArr[i] !== "";
        if(outputArr[i] !== "")
        ////^^^^this "" statement is use for remove the empty string which is make in empty lines 
        {
            tempArr.push(outputArr[i]);
            //when index i is not empty means no empty string exist then push the data into temArr

        }
    }
    totalContent = tempArr.join("\r\n");
    ///join statement is use for changing tempArr means ARRAY into STRING
}
console.log(totalContent);









//output
// D:\DEV\javascript3>node 44wcat.js -s  "f1.txt" "f2.txt"
// qwert
// yuiop
// asdfg
// hjkl
// zxcv
// bnm

// 988889
// 654551
// 66545
// 665556
// 5566
// 54562
// 535265455666666