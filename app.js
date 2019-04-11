var express = require("express");
var app = express();
var post = require("./server/model/post");

post.db.serialize(() => {
  post.create();
  post.insertexample();
  post.insert("../../src/assets/logo.png", "X", "X", "CCC");
  post.queryall();
  post.query(1);
  post.remove(3);
  post.updateLike(1, 2);
  post.updateLike(2, 3);
  post.queryall();
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
