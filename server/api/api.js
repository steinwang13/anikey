"use strict";
const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database("./server/db/postdb.sqlite3", function (err)  {
  if (err) {
    return console.log(err.message);
  }
  console.log("Database connected successfully.");
});
createTable();

function createTable() {
  // db.run("DROP TABLE IF EXISTS post");
  db.run("CREATE TABLE IF NOT EXISTS post \
    (id    INTEGER      NOT NULL PRIMARY KEY AUTOINCREMENT, \
    like   INTEGER      NOT NULL DEFAULT 0, \
    image  VARCHAR(255) NOT NULL, \
    title  VARCHAR(255) NOT NULL, \
    author VARCHAR(255) NOT NULL, \
    text   TEXT         NOT NULL)", function (err) {
    if (err) {
      return console.log(err.message);
    }
    console.log("Table post has been built successfully.");
  });
}

function insertExamplePosts() {
  let stmt = db.prepare("INSERT INTO post \
    (image, title, author, text) VALUES (?, ?, ?, ?)");
  stmt.run("../../static/kaori.jpg", "TTT", "TT", "TKTKTKTKTKT");
  stmt.run("../../static/suzumiya.jpg", "T", "T", "TKTKTKTKTK");
  stmt.finalize();
}

function addPost(image, title, author, text) {
  let stmt = db.prepare("INSERT INTO post \
    (image, title, author, text) VALUES (?, ?, ?, ?)");
  stmt.run(image, title, author, text, function (err) {
    if (err) {
      return console.log(err.message);
    }
    console.log("Record inserted successfully.");
  });
  stmt.finalize();
}

function getAllPosts(callback) {
  let stmt = db.prepare("SELECT * FROM post");
  stmt.all(ready);
  stmt.finalize();
  function ready(err, rows) {
    if (err) {
      return console.log(err.message);
    }
    getAllPosts2(callback, rows);
  }
}

function getAllPosts2(callback, rows) {
  callback(rows);
}

// function getPost(id, callback) {
//   let stmt = db.prepare("SELECT * FROM post WHERE id = ?");
//   stmt.get(id, ready);
//   stmt.finalize();
//   function ready(err, row) {
//     if (err) {
//       return console.log(err.message);
//     }
//     getPost2(callback, row);
//   }
// }

// function getPost2(callback, row) {
//   callback(row);
// }

function removePost(id) {
  let stmt = db.prepare("DELETE FROM post WHERE id = ?");
  stmt.run(id, function (err) {
    if (err) {
      return console.log(err.message);
    }
    console.log("Record deleted successfully.");
  });
  stmt.finalize();
}

function updatePostLike(id, like) {
  let stmt = db.prepare("UPDATE post SET like = ? WHERE id = ?");
  stmt.run(like, id, function (err) {
    if (err) {
      return console.log(err.message);
    }
    console.log("Updated like count successfully.")
  });
  stmt.finalize();
}

module.exports = {
  insertExamplePosts,
  getAllPosts,
  addPost,
  // getPost,
  removePost,
  updatePostLike
}
