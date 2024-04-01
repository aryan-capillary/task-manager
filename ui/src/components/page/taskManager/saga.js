import { call, put, takeEvery } from 'redux-saga/effects'
import { getAllTask,addTaskService,updateTaskService,deleteTaskService } from '../../../services/api'


function* getTask(action){
  try {
    yield put({type:'LOADING_START'})
    const task = yield call(getAllTask)
    yield put({type:'ADD_INITIAL_TASK',tasks:task})
    yield put({type:'LOADING_COMPLETED'})
  } catch (e) {
    yield put({type:'LOADING_COMPLETED'})
    console.log("error while fetching",e)
  }
}

function* addTask(action) {
  try {
    yield put({type:'LOADING_START'})
    const newtask = yield call(addTaskService,action?.task)
    console.log("added task",newtask)
    yield put({type:'ADD_TASK_NEW',task:newtask})
    yield put({type:'LOADING_COMPLETED'})
  } catch (e) {
    yield put({type:'LOADING_COMPLETED'})
    console.log("error while fetching",e)
  }
}
function* updateTask(action) {
    try {
      yield put({type:'LOADING_START'})
      const updatedTask = yield call(updateTaskService,action?.task?.id,action?.task)
      console.log("updated task",updatedTask)
      yield put({type:'EDIT_TASK',task:updatedTask})
      yield put({type:'LOADING_COMPLETED'})
    } catch (e) {
      console.log("error while fetching",e)
      yield put({type:'LOADING_COMPLETED'})
    }
  }

  function* deleteTask(action) {
    try {
      yield put({type:'LOADING_START'})
      const udeletedTask = yield call(deleteTaskService,action?.task?.id)
      yield put({type:'DELETE_TASK',task:udeletedTask})
      yield put({type:'LOADING_COMPLETED'})
    } catch (e) {
      yield put({type:'LOADING_COMPLETED'})
      console.log("error while fetching",e)
    }
  }

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery('GET_TASK', getTask)
  yield takeEvery('ADD_TASK', addTask)
  yield takeEvery('UPDATE_TASK', updateTask)
  yield takeEvery('DELETE', deleteTask)
}


export default mySaga