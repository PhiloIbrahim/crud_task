const mongoose = require('mongoose');
const taskListSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        minlength: 3
    }
});
// create an instance of schema
const taskList = mongoose.model('taskList', taskListSchema);
// export module
module.exports = taskList;