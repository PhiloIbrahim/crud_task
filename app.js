const express = require("express");
const app = express();
const mongoose = require("./database/mongoose");
const taskList = require("./database/models/taskList");
const task = require("./database/models/task");

/*
    CORS -- Cross Origin Request Security
*/
// Add headers before the routes are defined
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  // res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
// to use json bodyParser
app.use(express.json());
/* 
  Routes of REST API endpoints
  taskList --> create, update, readTaskListById, readAllTaskList
  task --> create, update, readTaskById, readAllTask

*/
/* 
  GET all taskLists
  http://localhost:3000/tasklists
*/
app.get("/tasklists", (req, res) => {
  taskList
    .find({})
    .then((lists) => res.status(200).send(lists))
    .catch((error) => {
      console.log(error);
      res.status(500);
    });
});
// endpoint to get taskList by id
app.get("/tasklists/:id", (req, res) => {
  let tasklistId = req.params.id;
  taskList
    .find({ _id: tasklistId })
    .then((lists) => res.status(200).send(lists))
    .catch((error) => {
      console.log(error);
      res.status(500);
    });
});
// endpoint for creating taskList
app.post("/tasklists", (req, res) => {
  let taskListObj = { title: req.body.title };
  taskList(taskListObj)
    .save()
    .then((lists) => res.status(201).send(lists))
    .catch((error) => {
      console.log(error);
      res.status(500);
    });
});
/* 
  // endpoint for updating tasklist by id
  // put is full update of object
  // patch is partial update of one field of an object
 */
app.put("/tasklists/:id", (req, res) => {
  taskList
    .findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
    .then((lists) => res.status(200).send(lists))
    .catch((error) => {
      console.log(error);
      res.status(500);
    });
});
app.patch("/tasklists/:id", (req, res) => {
  taskList
    .findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
    .then((lists) => res.status(200).send(lists))
    .catch((error) => {
      console.log(error);
      res.status(500);
    });
});
// endpoint for deleting tasklist by id
app.delete("/tasklists/:id", (req, res) => {
  taskList
    .findByIdAndDelete(req.params.id)
    .then((lists) => res.status(200).send(lists))
    .catch((error) => {
      console.log(error);
      res.status(500);
    });
});
app.listen(3000, () => console.log("server is running at port: 3000"));
