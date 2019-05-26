"use strict";
const express = require("express");
const app = express();
const cors = require('cors');
const api = require("./server/api/api.js");
const multer = require("multer");
const fs = require("fs");
const port = 3000;

// ----- Middleware -----
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

var uploadFolder = "./static/upload/";
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
// and respective image to ./static/upload directory
app.put("/write", upload.single("file"), function (req, res) {
  api.addPost("../../" + req.file.path, req.body.title, req.body.author, req.body.text);
  res.send("Review Added!");
});

// Add a like to a review
app.post("/thread", function (req, res) {
  api.updatePostLike(req.body.id, req.body.like);
  res.send("Review liked!");
});

// Delete a review in database along with the image 
// stored in ./static/upload directory
app.delete("/thread", function (req, res) {
  api.getImage(req.body.id, callbackImage);
  function callbackImage(img) {
    let path = img.image;
    let modPath = path.slice(4);
    fs.unlink(modPath, (err) => {
      if(err) {
        console.error(err);
      }
      // file removed
    });
  }
  api.removePost(req.body.id);
  res.send("Review deleted!");
});

app.listen(port, function () {
  console.log(`Anikey app listening on port ${port}!`);
});
