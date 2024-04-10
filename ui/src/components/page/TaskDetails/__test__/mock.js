import { fromJS } from "immutable";
export const initialState = fromJS({
  taskList: [
    { id: "1", title: "Task 1", description: "Description for Task 1" },
    { id: "2", title: "Task 2", description: "Description for Task 2" },
  ],
  taskLoading: false,
});
