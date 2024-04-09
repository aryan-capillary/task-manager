import '@testing-library/jest-dom';
import  EditTaskForm  from '../EditTaskForm';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from '../../../configureStore';
import {initialState} from "../../../components/page/taskManager/reducers"
import { render, fireEvent, waitFor,screen } from '@testing-library/react';
const store = configureStore(initialState);
describe('Create Form Component', () => {
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
    it('should have basic form label', () => {
        render(
            <Provider store ={store}>
            <EditTaskForm/>
            </Provider>
         )
        const button =  screen.getByText(/Update Task/i)
        expect(button).toBeInTheDocument();
        const status =  screen.getByText(/status/i)
        expect(status).toBeInTheDocument();

        const incomplete =  screen.getByText(/Incomplete/i)
        expect(incomplete).toBeInTheDocument();
        
     });
  });


