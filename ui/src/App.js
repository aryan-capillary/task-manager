import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import TaskManager from './components/page/taskManager/TaskManager';
function App() {
  return (
    <div>
     {/* <BrowserRouter basename="/app"> */}
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element = {<TaskManager/>} /> 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
