import { screen } from "@testing-library/dom";
import user from "@testing-library/user-event";

import { ActionProps } from "@src/entities/props";

import { Action } from "@src/components/Action/Action";

type RenderComponent = {
  container: HTMLButtonElement;
  props: ActionProps;
};

const renderComponent = (custom?: Partial<ActionProps>): RenderComponent => {
  const props: ActionProps = {
    id: "action-id",
    ariaLabel: "action button",
    className: "primary",
    children: "<span>Click me</span>",
    onClick: jest.fn(),
    ...custom,
  };

  const container = Action(props);
  document.body.appendChild(container);

  return { container: container, props: props };
};

describe("Action.ts", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    jest.clearAllMocks();
  });

  describe("General Tests.", () => {
    test("It should render a button element with correct id, class, and aria-label", () => {
      const { container, props } = renderComponent();

      expect(container).toBeInstanceOf(HTMLButtonElement);
      expect(container.id).toBe(props.id);
      expect(container.getAttribute("aria-label")).toBe(props.ariaLabel);
      expect(container.className).toContain("action");
      expect(container.className).toContain(props.className);
    });

    test("It should render innerHTML correctly from children", () => {
      const { props } = renderComponent();
      const button = screen.getByRole("button", { name: props.ariaLabel });
      expect(button.innerHTML).toBe(props.children);
    });

    test("It should render empty innerHTML if children is not provided", () => {
      const { container } = renderComponent({ children: undefined });
      expect(container.innerHTML).toBe("");
    });
  });

  describe("ClassName & Styling Tests.", () => {
    test("It should include the base class even if className is not provided", () => {
      const { container } = renderComponent({ className: undefined });
      expect(container.classList.contains("action")).toBe(true);
    });

    test("It should not have extra spaces if no className provided", () => {
      const { container } = renderComponent({ className: undefined });
      expect(container.className.trim()).toBe("action");
    });
  });

  describe("Interaction Tests.", () => {
    test("It should call onClick when clicked", async () => {
      const { props } = renderComponent();
      const button = screen.getByRole("button", { name: props.ariaLabel });

      await user.click(button);

      expect(props.onClick).toHaveBeenCalledTimes(1);
    });

    test("It should not throw if onClick is not provided", async () => {
      const { container } = renderComponent({ onClick: undefined });
      const button = screen.getByRole("button", { name: /action button/i });

      await expect(user.click(button)).resolves.not.toThrow();
      expect(container).toBeInTheDocument();
    });
  });

  describe("Accessibility Tests.", () => {
    test("It should have a valid aria-label for accessibility", () => {
      const { container, props } = renderComponent();
      expect(container.getAttribute("aria-label")).toBe(props.ariaLabel);
    });

    test("It should have type='button' to prevent form submission", () => {
      const { container } = renderComponent();
      expect(container.getAttribute("type")).toBe("button");
    });
  });
});
