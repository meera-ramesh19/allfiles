const mongoose = require('mongoose');
const todoTaskSchema = new mongoose.Schema({
    id: {
        type: Number,
        index: true,
        required: true,
    },
    name: {
        type: String,
        index: true,
        required: true
    },
    category: {
        type: String,
        index: true,
        required: true
    },
    description: {
        type: String,
        index: true,
        required: true
    },
    deadline: {
        type: Number,
        min: -5000,
        max: (new Date.now)

    },
    completed: {
        type: Boolean,
        default: false
    }
});
const Task = mongoose.model('TodoTask', todoTaskSchema);
module.exports = Task;