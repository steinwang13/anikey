"use strict";
const express = require("express");
const http = require("http");
const app = express();
const api = require("./server/api/api.js");
let router = express.Router();

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

app.get("/", function (req, res) {
  req = 0; // some switch. finally I can go to sleep!
  if (req == 0) {
    api.getAllPosts(callbackAllPostsData);
    function callbackAllPostsData(rows) {
      res.send(rows);
    }
  } else {
    api.getPost(2, callbackPostData);
    function callbackPostData(row) {
      res.send(row);
    }
  }
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
