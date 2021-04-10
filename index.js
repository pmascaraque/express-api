import express from "express";

const server = express();
server.get("/api/users", (req, res) => {
  res.json({ user: { name: "Pablo" } });
});

server.listen(8080, () => {
  console.log("Listening on http://localhost:8080");
});
