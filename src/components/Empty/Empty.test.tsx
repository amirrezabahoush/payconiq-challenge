import { render, screen } from "@testing-library/react";
import Empty from "./index";

describe("Empty component unit tests", () => {
  it("should render the Empty correctly", () => {
    render(<Empty text="There is no data" />);
    const emptyText = screen.getByText("There is no data");
    expect(emptyText).toBeInTheDocument();
    expect(emptyText).toBeVisible();
  });

  it("should be match with the snapshot", () => {
    render(<Empty text="There is no data" />);
    const emptyText = screen.getByText("There is no data");
    expect(emptyText).toMatchSnapshot();
  });
});
