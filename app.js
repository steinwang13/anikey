"use strict";
const express = require("express");
const http = require("http");
const app = express();
const cors = require('cors');
const api = require("./server/api/api.js");
let router = express.Router();


app.use(express.json());
app.use(cors());

// api.db.serialize(() => {
//   api.createTable();
//   api.insertExamplePosts();
//   api.addPost("../../static/anikeylogo.png", "X", "X", "CCC");
//   api.getAllPosts();
//   api.getPost(1);
//   api.removePost(3);
//   api.updatePostLike(1, 2);
//   api.updatePostLike(2, 3);
//   api.getAllPosts();
// });

app.get("/thread", function (req, res) {
  api.getAllPosts(callbackAllPostsData);
  function callbackAllPostsData(rows) {
    res.send(rows);
    console.log("appget success");
  }
});

app.put("/write", function (req, res) {
  api.addPost(req.body.image, req.body.title, req.body.author, req.body.text);
  res.send("Review Added!");
});

app.post("/thread", function (req, res) {
  api.updatePostLike(req.body.id, req.body.like);
  res.send("Review liked!");
});

app.delete("/thread", function (req, res) {
  api.removePost(req.body.id);
  res.send("Review deleted!");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
