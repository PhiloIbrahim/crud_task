const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        minlength: 3
    },
    _taskListId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
        required: true
    }
});
// create an instance of schema
const task = mongoose.model('task', taskSchema);
// export module
module.exports = task;