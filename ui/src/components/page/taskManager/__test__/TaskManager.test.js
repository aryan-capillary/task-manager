import '@testing-library/jest-dom';
import { screen,render } from '@testing-library/react';
import  TaskManager  from '../TaskManager';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from '../../../../configureStore';
import {initialState} from "../../../../components/page/taskManager/reducers"
const store = configureStore(initialState);
describe('Task Manager Component', () => {
      if (typeof window !== 'undefined') { 
        const matchMediaPolyfill = function matchMediaPolyfill() { 
          return { 
            matches: false, 
            addListener() { 
            }, 
            removeListener() { 
            }, 
          }; 
        }; 
        window.matchMedia = window.matchMedia || matchMediaPolyfill; 
      } 
    it('Renders without crashing', () => {
       render(
         <Provider store ={store}>
           <TaskManager/>
         </Provider>
        )
    });
    it('should have heading', () => {
        render(
          <Provider store ={store}>
            <TaskManager/>
          </Provider>
         )
        const heading1 =  screen.getByText(/Task Manager/i)
        expect(heading1).toBeInTheDocument();
        const heading2 =  screen.getByText(/Create Task/i)
        expect(heading2).toBeInTheDocument();
     });

  });