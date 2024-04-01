const path = 'http://localhost:3005'
const taskURL = `${path}/tasks`
export const getAllTask = () => {
    return fetch(taskURL).then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }
      return response.json();
    });
  };

  export const addTaskService = (task) => {
    return fetch(taskURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to add task');
      }
      return response.json();
    });
  };

  export const updateTaskService = (taskId, updatedTask) => {
    const url = `${taskURL}/${taskId}`;
    return fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTask), 
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update task');
        }
        return response.json();
      });
  };

  export const deleteTaskService = (taskId) => {
    const url = `${taskURL}/${taskId}`; 
    return fetch(url, {
      method: 'DELETE', 
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete task'); 
        }
        return response.json(); 
      });
  };