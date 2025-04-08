const express = require("express")
const app = express();
const PORT = 3000;

app.get("/" , (req, res) => {
    res.send("Hello World!");
});

app.post("/msg" , (req, res) => {
    res.send("you are on POST method!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
