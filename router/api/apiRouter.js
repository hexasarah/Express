const apiRouter = require("express").Router();
const jsonData = require("../../db/db.json");
const fs = require("fs");
const { v4: uuid } = require('uuid');

apiRouter.get("/notes", (req, res) => {
  res.json(jsonData);
});

apiRouter.post("/notes", (req, res) => {
  const { title, text } = req.body;
  const newTask = {
    title, 
    text,
    id: uuid(),
  };
  jsonData.push(newTask);
  fs.writeFile("./db/db.json", JSON.stringify(jsonData), (err) => {
    if (err) {
      console.log(err);
      res.status(500).json({ msg: "Try again later" });
    } else {
      console.log("Write successful");
      res.status(201).json({ msg: "Success!" });
    }
  });
});

module.exports = apiRouter;
