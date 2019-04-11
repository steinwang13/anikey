var express = require("express");
var app = express();
var post = require("./server/model/post");

post.db.serialize(() => {
  post.createTable();
  post.insertExamplePosts();
  post.addPost("../../static/anikeylogo.png", "X", "X", "CCC");
  post.getAllPosts();
  post.getPost(1);
  post.removePost(3);
  post.updatePostLike(1, 2);
  post.updatePostLike(2, 3);
  post.getAllPosts();
});
post.db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Database connection closed.');
});

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
