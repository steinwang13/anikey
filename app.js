let express = require("express");
let app = express();
let model = require("./server/model/post.js");

// model.db.serialize(() => {
//   model.createTable();
//   model.insertExamplePosts();
//   model.addPost("../../static/anikeylogo.png", "X", "X", "CCC");
//   model.getAllPosts();
//   model.getPost(1);
//   model.removePost(3);
//   model.updatePostLike(1, 2);
//   model.updatePostLike(2, 3);
//   model.getAllPosts();
// });

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
