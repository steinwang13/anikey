"use strict";
const express = require("express");
const app = express();
const cors = require('cors');
const api = require("./server/api/api.js");
const multer = require("multer");
const fs = require("fs");
const port = process.env.PORT || 3000;

// ----- Middleware -----
app.use(express.static(__dirname + "/dist"));
app.use(express.json());
app.use(cors());

// ----- Prepare upload image destination folder and rename image -----
var createFolder = function(folder) {
  try {
    fs.accessSync(folder);
  } catch (err) {
    fs.mkdirSync(folder);
  }
};

var uploadFolder = "./dist/static/upload/";
// In Dev Mode: Use the line below to replace the line above
// var uplaodFolder = "./static/upload/";
createFolder(uploadFolder);

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, uploadFolder);
  },
  filename: function (req, file, callback) {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    callback(null, file.fieldname + '-' + Date.now() + '.' + extension);
  }
});

var upload = multer({ storage: storage });

// ----- Handle requests -----
// Get all posts for Thread page
app.get("/thread", function (req, res) {
  api.getAllPosts(callbackAllPostsData);
  function callbackAllPostsData(rows) {
    res.send(rows);
    console.log("All posts retrieved successfully!");
  }
});

// Add a new review to database
// and image file to ./static/upload directory in Build
// (./dist/static/upload)
app.put("/write", upload.single("file"), function (req, res) {
  let path = req.file.path;
  path = path.slice(4);
  // In Dev Mode: Use the line below to replace the line above
  // path = "../../" + path;
  api.addPost(path, req.body.title, req.body.author, req.body.text);
  res.send("Review Added!");
});

// Add a like to a review
app.post("/thread", function (req, res) {
  api.updatePostLike(req.body.id, req.body.like);
  res.send("Review liked!");
});

// Delete a review in database along with the image
// stored in ./dist/static/upload directory in Build,
// stored in ./static/upload in Dev Mode
app.delete("/thread", function (req, res) {
  api.getImage(req.body.id, callbackImage);
  function callbackImage(img) {
    let path = img.image;
    path = "./dist" + path;
    // In Dev Mode: Use the line below to replace the line above
    // path = path.slice(4);
    fs.unlink(path, (err) => {
      if(err) {
        console.error(err);
      }
      // file removed
    });
  }
  api.removePost(req.body.id);
  res.send("Review deleted!");
});

// The server can only be accessed form localhost
app.listen(port, 'localhost', function () {
  console.log(`Anikey app listening on port ${port}!`);
});
