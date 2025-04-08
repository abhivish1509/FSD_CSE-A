const http = require("http");
const fs = require("fs").promises;
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-method','GET,POST,DELETE,PUT,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');

    if(req.method=="OPTIONS"){
        res.statusCode=200;
        return res.end();
    }

  if (req.url === "/register" && req.method === "POST") {
    try {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", async () => {
        try {
          const { name, email, password } = JSON.parse(body);
          console.log("Name=" + name);

          const data1 = await fs.readFile("student.json", { encoding: "utf-8" });
          const arr = JSON.parse(data1);

          console.log("Data from file:", arr);

          if (arr.find((ele) => ele.email === email)) {
            console.log("Email already registered");
            res.setHeader("Content-Type", "application/json");
            return res.end(JSON.stringify({ msg: "Email is already registered" }));
          }

          arr.push({ name, email, password });
          console.log(arr);

          await fs.writeFile("student.json", JSON.stringify(arr, null, 2));
          res.setHeader("Content-Type", "application/json");
          return res.end(JSON.stringify({ msg: "User successfully registered" }));
        } catch (error) {
          res.writeHead(500, { "Content-Type": "application/json" });
          return res.end(JSON.stringify({ msg: "Error in registration", error: error.message }));
        }
      });
    } catch (e) {
      res.writeHead(500, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ msg: "Server error", error: e.message }));
    }
  }

  if (req.url === "/login" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", async () => {
      try {
        console.log("Request body:", body);
        const { email, password } = JSON.parse(body);
        console.log(email+password);

        const data1 = await fs.readFile("student.json", { encoding: "utf-8" });
        const arr = JSON.parse(data1);

        const result = arr.find((ele) => ele.email === email && ele.password === password);

        res.setHeader("Content-Type", "application/json");
        if (result) {
          return res.end(JSON.stringify({ msg: "Login success" }));
        } else {
          return res.end(JSON.stringify({ msg: "Login failed" }));
        }
      } catch (error) {
        res.writeHead(500, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ msg: "Error in login", error: error.message }));
      }
    });
  }
});

server.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
