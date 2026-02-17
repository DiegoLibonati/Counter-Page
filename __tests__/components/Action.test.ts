import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import type { ActionProps } from "@/types/props";
import type { ActionComponent } from "@/types/components";

import { Action } from "@/components/Action/Action";

const renderComponent = (props: ActionProps): ActionComponent => {
  const container = Action(props);
  document.body.appendChild(container);
  return container;
};

describe("Action Component", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  const mockOnClick = jest.fn();

  const defaultProps: ActionProps = {
    id: "test-action",
    ariaLabel: "Test action",
    children: "Click Me",
    onClick: mockOnClick,
  };

  it("should render action button with correct attributes", () => {
    renderComponent(defaultProps);

    const button = screen.getByRole("button", { name: "Test action" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("id", "test-action");
    expect(button).toHaveAttribute("type", "button");
    expect(button.innerHTML).toBe("Click Me");
    expect(button).toHaveClass("action");
  });

  it("should call onClick handler when clicked", async () => {
    const user = userEvent.setup();
    renderComponent(defaultProps);

    const button = screen.getByRole("button", { name: "Test action" });
    await user.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("should apply additional className when provided", () => {
    const propsWithClass: ActionProps = {
      ...defaultProps,
      className: "custom-action",
    };

    renderComponent(propsWithClass);

    const button = screen.getByRole("button", { name: "Test action" });
    expect(button).toHaveClass("action", "custom-action");
  });

  it("should cleanup event listener", async () => {
    const user = userEvent.setup();
    const action = renderComponent(defaultProps);

    action.cleanup?.();

    const button = screen.getByRole("button", { name: "Test action" });
    await user.click(button);

    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
