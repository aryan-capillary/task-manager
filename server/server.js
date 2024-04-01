const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Task = require('./models');
const app = express();
app.use(cors()); 
app.use(bodyParser.json());

app.get('/tasks', async (req, res) => {
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  });
  
app.post('/tasks', (req, res) => {
  const newTask = req.body; 
  Task.create(newTask)
    .then(createdTask => {
      res.status(201).json(createdTask); 
    })
    .catch(error => {
      console.error('Error creating task:', error);
      res.status(500).json({ message: 'Internal server error' }); 
    });
});


// POST a new task
app.post('/tasks', (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    const updatedTask = req.body;
    Task.findOneAndUpdate({ id:taskId }, updatedTask, { new: true })
      .then(updatedTask => {
        if (!updatedTask) {
          return res.status(404).json({ message: 'Task not found' });
        }
        res.json(updatedTask);
      })
      .catch(error => {
        console.error('Error updating task:', error);
        res.status(500).json({ message: 'Internal server error' });
      });
  });

app.delete('/tasks/:id', (req, res) => {
    const taskId = req.params.id; 
    Task.findOneAndDelete({ id:taskId })
      .then(deletedTask => {
        if (!deletedTask) {
          return res.status(404).json({ message: 'Task not found' }); 
        }
        res.json(deletedTask); 
      })
      .catch(error => {
        console.error('Error deleting task:', error);
        res.status(500).json({ message: 'Internal server error' }); 
      });
  });

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/task-manager', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});

// Start the server
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
