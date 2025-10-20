import { screen } from "@testing-library/dom";
import user from "@testing-library/user-event";

import { theme } from "@src/styles/theme";

type RenderComponent = {
  container: HTMLElement;
};

const renderComponent = (): RenderComponent => {
  jest.resetModules();

  const { CounterPage } = require("@src/pages/CounterPage/CounterPage");

  const container = CounterPage();
  document.body.appendChild(container);
  return { container: container };
};

jest.mock("@src/styles/theme", () => ({
  theme: {
    colors: {
      green: "green",
      red: "red",
      black: "black",
    },
  },
}));

describe("CounterPage.ts", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    jest.clearAllMocks();
  });

  describe("General Tests.", () => {
    test("It should render the main structure with correct sections", () => {
      const { container } = renderComponent();

      expect(container).toBeInstanceOf(HTMLElement);
      expect(container.className).toBe("counter-page");

      const title = screen.getByText("Counter");
      const number = screen.getByText("0");
      const actions = container.querySelector(".counter__actions");

      expect(title).toBeInTheDocument();
      expect(number).toBeInTheDocument();
      expect(actions).toBeInTheDocument();
    });

    test("It should render all 3 action buttons", () => {
      renderComponent();

      const buttons = document.querySelectorAll("button");
      expect(buttons).toHaveLength(3);

      expect(
        screen.getByRole("button", { name: /decrease/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /reset/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /increase/i })
      ).toBeInTheDocument();
    });
  });

  describe("Behavior Tests.", () => {
    test("It should increase the counter and set color to green", async () => {
      renderComponent();

      const btnIncrease = screen.getByRole("button", { name: /increase/i });
      const number = document.querySelector(".counter__number") as HTMLElement;

      await user.click(btnIncrease);

      expect(number.textContent).toBe("1");
      expect(number.style.color).toBe(theme.colors.green);
    });

    test("It should decrease the counter and set color to red", async () => {
      renderComponent();

      const btnDecrease = screen.getByRole("button", { name: /decrease/i });
      const number = document.querySelector(".counter__number") as HTMLElement;

      await user.click(btnDecrease);

      expect(number.textContent).toBe("-1");
      expect(number.style.color).toBe(theme.colors.red);
    });

    test("It should reset the counter and set color to black", async () => {
      renderComponent();

      const btnIncrease = screen.getByRole("button", { name: /increase/i });
      const btnReset = screen.getByRole("button", { name: /reset/i });
      const number = document.querySelector(".counter__number") as HTMLElement;

      await user.click(btnIncrease);
      expect(number.textContent).toBe("1");

      await user.click(btnReset);
      expect(number.textContent).toBe("0");
      expect(number.style.color).toBe(theme.colors.black);
    });
  });

  describe("Integration & Consistency Tests.", () => {
    test("It should call Action for each control with correct props", () => {
      const ActionMock = jest.fn(({ id, ariaLabel, children, onClick }) => {
        const btn = document.createElement("button");
        btn.id = id;
        btn.setAttribute("aria-label", ariaLabel);
        btn.textContent = children;
        btn.addEventListener("click", onClick);
        return btn;
      });

      jest.doMock("@src/components/Action/Action", () => ({
        Action: ActionMock,
      }));

      renderComponent();

      expect(ActionMock).toHaveBeenCalledTimes(3);

      expect(ActionMock).toHaveBeenCalledWith(
        expect.objectContaining({
          id: "btndecrease",
          ariaLabel: "decrease",
          children: "Decrease",
        })
      );

      expect(ActionMock).toHaveBeenCalledWith(
        expect.objectContaining({
          id: "btnreset",
          ariaLabel: "reset",
          children: "Reset",
        })
      );

      expect(ActionMock).toHaveBeenCalledWith(
        expect.objectContaining({
          id: "btnincrease",
          ariaLabel: "increase",
          children: "Increase",
        })
      );
    });

    test("It should maintain the color logic consistency", async () => {
      renderComponent();

      const btnIncrease = screen.getByRole("button", { name: /increase/i });
      const btnDecrease = screen.getByRole("button", { name: /decrease/i });
      const btnReset = screen.getByRole("button", { name: /reset/i });
      const number = document.querySelector(".counter__number") as HTMLElement;

      await user.click(btnIncrease);
      expect(number.style.color).toBe(theme.colors.green);

      await user.click(btnReset);
      expect(number.style.color).toBe(theme.colors.black);

      await user.click(btnDecrease);
      expect(number.style.color).toBe(theme.colors.red);
    });
  });
});
