/*
 *
 * LanguageProvider reducer
 *
 */
import { fromJS } from 'immutable';
import * as types from './constant';

export const initialState = fromJS({
    taskList: [
      {
        key: '1',
        title: 'Learn Guitar',
        discriptation: 'Have to learn guitar daily 1 hour',
        status: 'incomplete',
      },
      {
        key: '2',
        title: 'Study Stock Market',
        discriptation: 'study stock market for latest copany',
        status: 'completed',
      },
      {
        key: '3',
        title: 'Buy Food',
        discriptation: 'buy food for myself',
        status: 'completed',
    
      },
    ],
    taskModal: false,
  });
  
  const taskListReducers = (state = initialState, action = {}) => {
    switch (action.type) {
      case types.ADD_TASK:
        return state.update('taskList', taskList => taskList.push(fromJS(action.task)));
        case types.UPDATE_TASK:
          const updatedTask = fromJS(action.task);
          return state.update('taskList', taskList =>
            taskList.map(task =>
              task.get('key') === updatedTask.get('key') ? updatedTask : task
            )
          );
      case types.DELETE_TASK:
        return state.update('taskList', taskList => taskList.filter(task => task.id !== action.id));
      default:
        return state;
    }
  };
  
  export default taskListReducers;
