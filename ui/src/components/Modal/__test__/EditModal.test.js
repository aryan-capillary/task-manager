import '@testing-library/jest-dom';
import  Modal  from '../Modal';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from '../../../configureStore';
import {initialState} from "../../../components/page/taskManager/reducers"
import { render, fireEvent, waitFor,screen } from '@testing-library/react';
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
    it('should have basic form label', () => {
        render(
            <Provider store ={store}>
            <Modal>Edit</Modal>
            </Provider>
         )
        const button =  screen.getByText(/Edit/i)
        expect(button).toBeInTheDocument();
        const editTask = screen.getByRole('button', {
            name: /edit/i
          })
          fireEvent.click(editTask);
        const descriptation =  screen.getByText(/Descriptation/i)
        expect(descriptation).toBeInTheDocument();
        const status =  screen.getByText(/status/i)
        expect(status).toBeInTheDocument();
        
     });
  });


