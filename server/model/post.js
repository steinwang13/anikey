"use strict";
const sqlite = require("sqlite3").verbose();
let db = new sqlite.Database("./server/db/postdb.sqlite3", (err) => {
  if (err) {
    return console.log(err.message);
  }
  console.log("Database connected successfully.");
});

function createTable() {
  this.db.run("DROP TABLE IF EXISTS post");
  this.db.run("CREATE TABLE IF NOT EXISTS post \
    (id    INTEGER      NOT NULL PRIMARY KEY AUTOINCREMENT , \
    like   INTEGER      NOT NULL DEFAULT 0, \
    image  VARCHAR(255) NOT NULL, \
    title  VARCHAR(255) NOT NULL, \
    author VARCHAR(255) NOT NULL, \
    text   TEXT         NOT NULL)", (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Table post created successfully.");
  });
}

function insertExamplePosts() {
  let stmt = this.db.prepare("INSERT INTO post \
    (image, title, author, text) VALUES (?, ?, ?, ?)");
  stmt.run("../../static/kaori.jpg", "TTT", "TT", "TKTKTKTKTKT");
  stmt.run("../../static/suzumiya.jpg", "T", "T", "TKTKTKTKTK");
  stmt.finalize();
}

function addPost(image, title, author, text) {
  let stmt = this.db.prepare("INSERT INTO post \
    (image, title, author, text) VALUES (?, ?, ?, ?)");
  stmt.run(image, title, author, text, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Record inserted successfully.");
  });
  stmt.finalize();
}

function getAllPosts() {
  let stmt = this.db.prepare("SELECT * FROM post");
  stmt.each((err, row) => {
    if (err) {
      return console.log(err.message);
    }
    console.log(row.id + ": " + row.like + " " + row.image + " " +
    row.title + " " + row.author + " " + row.text);
  });
  stmt.finalize();
}

function getPost(id) {
  let stmt = this.db.prepare("SELECT * FROM post WHERE id = ?");
  stmt.get(id, (err, row) => {
    if (err) {
      return console.log(err.message);
    }
    console.log(row.id + ": " + row.like + " " + row.image + " " +
    row.title + " " + row.author + " " + row.text);
  });
  stmt.finalize();
}

function removePost(id) {
  let stmt = this.db.prepare("DELETE FROM post WHERE id = ?");
  stmt.run(id, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Record deleted successfully.");
  });
  stmt.finalize();
}

function updatePostLike(id, like) {
  let stmt = this.db.prepare("UPDATE post SET like = ? WHERE id = ?");
  stmt.run(like, id, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Updated like count successfully.")
  });
  stmt.finalize();
}

module.exports = {
  db,
  createTable,
  insertExamplePosts,
  getAllPosts,
  addPost,
  getPost,
  removePost,
  updatePostLike
}
