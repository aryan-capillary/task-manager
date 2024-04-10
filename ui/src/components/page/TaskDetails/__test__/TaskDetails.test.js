import React from "react";
import { render, screen } from "@testing-library/react";
import TaskDetails from "../TaskDetails";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  MemoryRouter,
} from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "../../../../configureStore";
import { initialState } from "./mock";
const store = configureStore(initialState);
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    id: "2",
  }),
}));
describe("TaskDetails component", () => {
  test("renders task details correctly", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/task-details/2"]}>
          <TaskDetails />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText("Task 2")).toBeInTheDocument();
    expect(screen.getByText("Description for Task 2")).toBeInTheDocument();
  });

  test("renders link to Task Manager", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <TaskDetails />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText("Task manager")).toBeInTheDocument();
  });
});
