"use strict";
const express = require("express");
const http = require("http");
const app = express();
const cors = require('cors');
const api = require("./server/api/api.js");
const multer = require("multer");
const fs = require("fs");
var router = express.Router();

app.use(express.json());
app.use(cors());

var createFolder = function(folder) {
  try {
    fs.accessSync(folder);
  } catch (err) {
    fs.mkdirSync(folder);
  }
};

var uploadFolder = "./static/upload/";
createFolder(uploadFolder);

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, uploadFolder);
  },
  filename: function (req, file, callback) {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    console.log(extension);
    callback(null, file.fieldname + '-' + Date.now() + '.' + extension);
  }
});

var upload = multer({ storage: storage });

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

app.put("/write", upload.single("file"), function (req, res) {
  console.log(req.file.destination);
  console.log(req.file.filename);
  console.log(req.file.path);
  api.addPost("../../" + req.file.path, req.body.title, req.body.author, req.body.text);
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
