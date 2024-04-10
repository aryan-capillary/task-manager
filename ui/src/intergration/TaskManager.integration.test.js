import "@testing-library/jest-dom";
import { screen, render, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import configureStore from "../configureStore";
import { initialState } from "../components/page/taskManager/reducers";
import App from "../App";
const store = configureStore(initialState);

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));
describe("Task Manager Component", () => {
  if (typeof window !== "undefined") {
    const matchMediaPolyfill = function matchMediaPolyfill() {
      return {
        matches: false,
        addListener() {},
        removeListener() {},
      };
    };
    window.matchMedia = window.matchMedia || matchMediaPolyfill;
  }
  it("Renders without crashing", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
  it("should have heading", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const heading1 = screen.getByText(/Task Manager/i);
    expect(heading1).toBeInTheDocument();
    const heading2 = screen.getByText(/Create Task/i);
    expect(heading2).toBeInTheDocument();
  });

  it("should able to open create task modal", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await delay(1000);
    const heading2 = screen.getByText(/Create Task/i);
    expect(heading2).toBeInTheDocument();
    const createButton = screen.getByRole("button", {
      name: /create task/i,
    });

    fireEvent.click(createButton);
    const createTaskForm = screen.getByText(/create task form/i);
    expect(createTaskForm).toBeInTheDocument();
  });

  it("should have all heading column", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await delay(1000);
    const columnTask = screen.getByText("Task");
    expect(columnTask).toBeInTheDocument();
    const columnDescription = screen.getByText(/Description/i);
    expect(columnDescription).toBeInTheDocument();
    const columnStatus = screen.getByText(/Status/i);
    expect(columnStatus).toBeInTheDocument();
    const columnAction = screen.getByText(/Action/i);
    expect(columnAction).toBeInTheDocument();
  });

  it("should have first row", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    await delay(1000);
    const columnTask = screen.getByText("go to swwim");
    expect(columnTask).toBeInTheDocument();
    const columnDescription = screen.getByText(
      /go to swimming class every Saturday and Sunday/i
    );
    expect(columnDescription).toBeInTheDocument();
    const columnStatus = screen.getAllByText(/INCOMPLETE/i);
    expect(columnStatus[0]).toBeInTheDocument();
  });

  it("Edit Modal Should be working", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    await delay(1000);
    const row = screen.getByRole("row", {
      name: /go to swimming class every Saturday and Sunday/i,
    });

    const editButton = within(row).getByRole("button", {
      name: /edit/i,
    });
    fireEvent.click(editButton);
    const editModal = screen.getByText(/edit form/i);
    expect(editModal).toBeInTheDocument();

    const radioInput = screen.getByRole("radio", { name: "Complete" });
    fireEvent.change(radioInput, { target: { value: "Complete" } });

    expect(radioInput).toBeInTheDocument();
    const updateTask = screen.getByRole("button", {
      name: /update task/i,
    });
    expect(updateTask).toBeInTheDocument();
    fireEvent.click(updateTask);
  });

  it("Delete Modal Should be working", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    await delay(1000);
    const row = screen.getByRole("row", {
      name: /go to swimming class every Saturday and Sunday/i,
    });

    const deleteButton = within(row).getByRole("button", {
      name: /delete/i,
    });
    fireEvent.click(deleteButton);
    const editModal = screen.getByText(/Delete Task/i);
    expect(editModal).toBeInTheDocument();

    const ok = screen.getByRole("button", {
      name: /ok/i,
    });
    expect(ok).toBeInTheDocument();

    const cancel = screen.getByRole("button", {
      name: /cancel/i,
    });
    expect(cancel).toBeInTheDocument();
  });
});
