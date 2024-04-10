import "@testing-library/jest-dom";
import Table from "../Table";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import configureStore from "../../../configureStore";
import { initialState } from "../../../components/page/taskManager/reducers";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
const store = configureStore(initialState);
describe("Create Form Component", () => {
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
  it("should have basic Table", () => {
    render(
      <Provider store={store}>
        <Table />
      </Provider>
    );
    expect(screen.getByText("Loading....")).toBeInTheDocument();
  });
});
