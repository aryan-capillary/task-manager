function* taskSaga() {
    yield takeEvery(actions.FETCH_TASKS_REQUESTED, fetchTasksSaga);
    yield takeEvery(actions.CREATE_TASK_REQUESTED, createTaskSaga);
    yield takeEvery(actions.UPDATE_TASK_REQUESTED, updateTaskSaga);
    yield takeEvery(actions.DELETE_TASK_REQUESTED, deleteTaskSaga);
  }