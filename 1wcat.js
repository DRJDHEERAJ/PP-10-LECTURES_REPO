//input
//giving input
///check the difference between in options and filepaths
//show to check this is options(-s,-n,-b) or filepaths(f1.txt,f2.txt) 
//in this not taking fs file
let input = process.argv.slice(2);
console.log("input",input);
let options = [];
let filepaths = [];
for(let i = 0; i< input.length; i++){
   /// how to check this is options(-s,-n,-b) or filepaths(f1.txt,f2.txt)
    if(input[i] == "-s" || input[i] == "-b" || input[i] == "-n" ){
    options.push(input[i]);
}
else{
    filepaths.push(input[i]);
}
}
console.log("options" , options);
console.log("filepath" , filepaths);








//output
//D:\DEV\javascript3>node 2wcat.js -s -b -n "f1.txt" "f2.txt
// input [ '-s', '-b', '-n', 'f1.txt', 'f2.txt' ]
// options [ '-s', '-b', '-n' ]
// filepath [ 'f1.txt', 'f2.txt' ]