const mongoose = require("mongoose");
// to use promises
mongoose.Promise = global.Promise;
// connecting to DB
mongoose
  .connect("mongodb://127.0.0.1:27017/taskManagerDB")
  .then(() => console.log("DB connected successfully!!!"))
  .catch((error) => console.log(error));

// export DB
module.exports = mongoose;