import '@testing-library/jest-dom';
import  DeleteModal  from '../DeleteModal';
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
            <DeleteModal>Delete</DeleteModal>
            </Provider>
         )
        const button =  screen.getByText(/Delete/i)
        expect(button).toBeInTheDocument();
        const deleteTask = screen.getByRole('button', {
            name: /Delete/i
          })
          fireEvent.click(deleteTask);
        const descriptation =  screen.getByText(/Do you want to delete this Task/i)
        expect(descriptation).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        const cancel = screen.getByRole('button', {
            name: /cancel/i
          })
          expect(cancel).toBeInTheDocument();
          const ok = screen.getByRole('button', {
              name: /ok/i
            })
            expect(ok).toBeInTheDocument();
     });
  });


