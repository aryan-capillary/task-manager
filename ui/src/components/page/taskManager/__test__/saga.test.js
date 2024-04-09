import { call, put,takeEvery } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import {
  getTask,
  addTask,
  updateTask,
  deleteTask,
  mySaga,
} from './mySaga';
import {
  getAllTask,
  addTaskService,
  updateTaskService,
  deleteTaskService,
} from '../../../../services/api';

// Mock API service functions
jest.mock('../../../../services/api', () => ({
  getAllTask: jest.fn(),
  addTaskService: jest.fn(),
  updateTaskService: jest.fn(),
  deleteTaskService: jest.fn(),
}));

describe('Sagas', () => {
  describe('getTask Saga', () => {
    const generator = cloneableGenerator(getTask)();

    it('should dispatch loading start, fetch tasks, and dispatch success actions', () => {
      const mockTasks = [{ id: 1, title: 'Task 1' }, { id: 2, title: 'Task 2' }];
      expect(generator.next().value).toEqual(put({ type: 'LOADING_START' }));
      expect(generator.next().value).toEqual(call(getAllTask));
      expect(generator.next(mockTasks).value).toEqual(
        put({ type: 'ADD_INITIAL_TASK', tasks: mockTasks })
      );
      expect(generator.next().value).toEqual(put({ type: 'LOADING_COMPLETED' }));
      expect(generator.next().done).toBe(true);
    });
   
  });

  describe('addTask Saga', () => {
    const action = { task: { title: 'New Task' } };
    const generator = cloneableGenerator(addTask)(action);

    it('should dispatch loading start, add new task, and dispatch success actions', () => {
      const newTask = { id: 3, title: 'New Task' };
      expect(generator.next().value).toEqual(put({ type: 'LOADING_START' }));
      expect(generator.next().value).toEqual(call(addTaskService, action.task));
      expect(generator.next(newTask).value).toEqual(
        put({ type: 'ADD_TASK_NEW', task: newTask })
      );
      expect(generator.next().value).toEqual(put({ type: 'LOADING_COMPLETED' }));
      expect(generator.next().done).toBe(true);
    });
  });
  describe('update Saga', () => {
    const action = { task: { title: 'New Task',id:'1' } };
    const generator = cloneableGenerator(updateTask)(action);

    it('should dispatch loading start, add new task, and dispatch success actions', () => {
      const newTask = { id: 3, title: 'New Task' };
      expect(generator.next().value).toEqual(put({ type: 'LOADING_START' }));
      expect(generator.next().value).toEqual(call(updateTaskService, action.task.id,action.task));
      expect(generator.next(newTask).value).toEqual(
        put({ type: 'EDIT_TASK', task: newTask })
      );
      expect(generator.next().value).toEqual(put({ type: 'LOADING_COMPLETED' }));
      expect(generator.next().done).toBe(true);
    });
  });
  describe('delete Saga', () => {
    const action = { task: { title: 'New Task',id:'1' } };
    const generator = cloneableGenerator(deleteTask)(action);

    it('should dispatch loading start, add new task, and dispatch success actions', () => {
      const newTask = { id: 4, title: 'New Task' };
      expect(generator.next().value).toEqual(put({ type: 'LOADING_START' }));
      expect(generator.next().value).toEqual(call(deleteTaskService, action.task.id));
      expect(generator.next(newTask).value).toEqual(
        put({ type: 'DELETE_TASK', task: newTask })
      );
      expect(generator.next().value).toEqual(put({ type: 'LOADING_COMPLETED' }));
      expect(generator.next().done).toBe(true);
    });
  });

  // Similar test cases for updateTask and deleteTask sagas...

  describe('mySaga Root Saga', () => {
    const rootSaga = mySaga();

    it('should take every GET_TASK action and call getTask saga', () => {
      expect(rootSaga.next().value).toEqual(
        takeEvery('GET_TASK', getTask)
      );
    });

    it('should take every ADD_TASK action and call addTask saga', () => {
      expect(rootSaga.next().value).toEqual(
        takeEvery('ADD_TASK', addTask)
      );
    });

    it('should take every UPDATE_TASK action and call updateTask saga', () => {
      expect(rootSaga.next().value).toEqual(
        takeEvery('UPDATE_TASK', updateTask)
      );
    });

    it('should take every DELETE_TASK action and call deleteTask saga', () => {
      expect(rootSaga.next().value).toEqual(
        takeEvery('DELETE', deleteTask)
      );
    });

    it('should be done', () => {
      expect(rootSaga.next().done).toBe(true);
    });
  });
});
