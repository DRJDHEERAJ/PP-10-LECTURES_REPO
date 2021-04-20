//input
//taking fs file for checking the file is exist using (fs.existsSync) by apply the loop function on filepaths variable   
//check the input file path is exist or not
///if file path is not exist print does not exist
////read the file and print it, utf-8 is use for change the data into string (taki woh print ho sake)
///apply the -s option on f1.txt, f2.txt data 
//apply the -n option on f1.txt, f2.txt data 
///////////apply the -b  option on f1.txt, f2.txt data 

///////////apply the -b & -s option on f1.txt, f2.txt data 

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
    
    
    totalContent += contentOFcurrent + "\r\n";

    ////////////this problem solve    ^^^^^^^^^ \r\n
}
//console.log(totalContent);



let isSoption = options.includes("-s");
if(isSoption == true){
    let outputArr = totalContent.split("\r\n");
    let tempArr = [];
    //for remove empty strings
    for(let i = 0; i < outputArr.length; i++){
     //   let isElementvalid = outputArr[i] !== "";
        if(outputArr[i] !== ""){
            tempArr.push(outputArr[i]);

        }
    }
    totalContent = tempArr.join("\r\n");
}
//////////////////////////////////////////////////////////////////////////////////////
//apply -b -n both operations

let isN = options.includes("-n");
let isB = options.includes("-b");
let finalOption;

if(isN == true){
    if(isB == true){
        //option which come first 
        ///wahi chalega final option me
        let idxB = options.indexOf("-b");
        let idxN = options.indexOf("-n");
        finalOption = idxB < idxN ? "-b" : "-n";
    }else{
        finalOption = "-n";
    }

}else if(isB == true){
    finalOption = "-b";

}





if(finalOption == "-n"){
    let count = 1;
    let outputArr = totalContent.split("\r\n");
    for(let i = 0; i < outputArr.length; i++){
     //   let isElementvalid = outputArr[i] !== "";
         outputArr[i] = count +". " + outputArr[i];
         count++; 
    }
    totalContent = outputArr.join("\r\n");
}
////////////apply the -n option on f1.txt, f2.txt data 




if(finalOption == "-b"){
    let outputArr = totalContent.split("\r\n");
    //let temArr = [];
    let count = 1;
    for(let i= 0 ; i<outputArr.length; i++){
    if(outputArr[i] !== ""){
        outputArr[i] = count +". " + outputArr[i];
         count++; 
    }
    
}
totalContent = outputArr.join("\r\n");
}
////////////apply the -b  option on f1.txt, f2.txt data 

console.log(totalContent);


//output
//



 