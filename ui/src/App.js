import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import TaskManager from './components/page/taskManager/TaskManager';
import TaskDetails from './components/page/TaskDetails/TaskDetails';
function App() {
  return (
    <div>
     {/* <BrowserRouter basename="/app"> */}
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element = {<TaskManager/>} /> 
        <Route exact path="/task-details/:id" element = {<TaskDetails/>} /> 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
