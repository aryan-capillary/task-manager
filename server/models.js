const mongoose = require('mongoose');

// Define the schema
const taskSchema = new mongoose.Schema({
  id: {
    type: String, // Assuming the ID is a string
    required: true,
    unique: true, // Assuming IDs are unique
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['incomplete', 'completed'], // Assuming status can be either 'incomplete' or 'completed'
  },
});

// Create the Mongoose model
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
