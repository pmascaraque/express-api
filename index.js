import express from "express";

const server = express();
server.get("/api/users", (req, res) => {
  res.send("Hello World");
});

server.listen(9000, () =>{
    console.log("Listening on http://localhost:9000")
})
