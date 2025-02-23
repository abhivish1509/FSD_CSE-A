const fs = require('fs').promises;
const pd = fs.writeFile('student.pdf', "CSE_B students data");

// console.log(pd);

pd.then(()=>{
    console.log("data is written successfully");
})
.catch((err)=>{
    console.log("error aa raha hai", err);
})
.finally(()=>{
    console.log("resources closed!!");
})

async function readFilePromise(){
    try{
        const data = await fs.readFile("student.pdf", {encoding: "utf-8"});
        console.log(data);
    }catch(err){
        console.log("error aa raha hai", err);
    }
}

readFilePromise();