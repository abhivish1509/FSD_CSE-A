const fs = require("fs");

async function write() {
    fs.writeFile("example.pdf", "Data is written using FS module", (err) => {
        if (err) {
            console.log("error aa raha hai", err);
        } else {
            console.log("Data is written successfully");
            read();
        }
    });
}

async function read() {
    fs.readFile('example.pdf', { encoding: "utf-8" }, (err, data) => {
        if (err) {
            console.log("error aa raha ", err);
        } else {
            console.log(data);
        }
    });
}


module.exports = { write, read };