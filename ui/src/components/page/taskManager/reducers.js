/*
 *
 * LanguageProvider reducer
 *
 */
import { fromJS } from "immutable";
import * as types from "./constant";

export const initialState = fromJS({
  taskList: [],
  taskLoading: false,
});

const taskListReducers = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.ADD_INITIAL_TASK: {
      return state.set("taskList", fromJS(action.tasks));
    }
    case types.ADD_TASK_NEW: {
      return state.update("taskList", (taskList) =>
        taskList.push(fromJS(action.task))
      );
    }
    case types.EDIT_TASK:
      const updatedTask = fromJS(action.task);
      return state.update("taskList", (taskList) =>
        taskList.map((task) =>
          task.get("id") === updatedTask.get("id") ? updatedTask : task
        )
      );
    case types.DELETE_TASK:
      return state.update("taskList", (taskList) =>
        taskList.filter(
          (task) => task.get("id") !== fromJS(action.task).get("id")
        )
      );
    case types.LOADING_START:
      return state.set("taskLoading", true);
    case types.LOADING_COMPLETED:
      return state.set("taskLoading", false);
    default:
      return state;
  }
};

export default taskListReducers;
