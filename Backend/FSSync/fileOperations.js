
const fs = require('fs');
function writeData(){
    try{
        fs.writeFileSync("data.txt","Welcome to node.js file system");
        console.log("data is written successfully");
    }catch(err){

        console.log(err);
    }
}

function readData(){
    try{
        const frd = fs.readFileSync("data.txt" , {encoding: "utf-8"});
        console.log(frd);
    }
    catch(err){
        console.log(err);
    }
}
fs.appendFileSync("data.txt"," Hello World");   
console.log("done!!") 

module.exports ={
    writeData,
    readData
}