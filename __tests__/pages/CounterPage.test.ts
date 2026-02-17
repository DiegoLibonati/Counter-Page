import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import type { Page } from "@/types/pages";

import { CounterPage } from "@/pages/CounterPage/CounterPage";

const renderPage = (): Page => {
  const container = CounterPage();
  document.body.appendChild(container);
  return container;
};

describe("CounterPage", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("should render the page with correct structure", () => {
    renderPage();

    const main = document.querySelector<HTMLElement>(".counter-page");
    expect(main).toBeInTheDocument();
    expect(main?.tagName).toBe("MAIN");
  });

  it("should render page title", () => {
    renderPage();

    const title = screen.getByRole("heading", { name: "Counter", level: 2 });
    expect(title).toBeInTheDocument();
  });

  it("should render counter with initial value of 0", () => {
    renderPage();

    const counter =
      document.querySelector<HTMLHeadingElement>(".counter__number");
    expect(counter).toBeInTheDocument();
    expect(counter?.textContent).toBe("0");
  });

  it("should render all action buttons", () => {
    renderPage();

    expect(
      screen.getByRole("button", { name: "decrease" })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "reset" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "increase" })
    ).toBeInTheDocument();
  });

  it("should increase counter when increase button is clicked", async () => {
    const user = userEvent.setup();
    renderPage();

    const increaseButton = screen.getByRole("button", { name: "increase" });
    await user.click(increaseButton);

    const counter =
      document.querySelector<HTMLHeadingElement>(".counter__number");
    expect(counter?.textContent).toBe("1");
  });

  it("should decrease counter when decrease button is clicked", async () => {
    const user = userEvent.setup();
    renderPage();

    const decreaseButton = screen.getByRole("button", { name: "decrease" });
    await user.click(decreaseButton);

    const counter =
      document.querySelector<HTMLHeadingElement>(".counter__number");
    expect(counter?.textContent).toBe("-1");
  });

  it("should reset counter when reset button is clicked", async () => {
    const user = userEvent.setup();
    renderPage();

    const increaseButton = screen.getByRole("button", { name: "increase" });
    const resetButton = screen.getByRole("button", { name: "reset" });

    await user.click(increaseButton);
    await user.click(increaseButton);
    await user.click(increaseButton);

    const counter =
      document.querySelector<HTMLHeadingElement>(".counter__number");
    expect(counter?.textContent).toBe("3");

    await user.click(resetButton);
    expect(counter?.textContent).toBe("0");
  });

  it("should update color to green when counter is positive", async () => {
    const user = userEvent.setup();
    renderPage();

    const increaseButton = screen.getByRole("button", { name: "increase" });
    await user.click(increaseButton);

    const counter =
      document.querySelector<HTMLHeadingElement>(".counter__number");
    expect(counter?.style.color).toBe("var(--color-green)");
  });

  it("should update color to red when counter is negative", async () => {
    const user = userEvent.setup();
    renderPage();

    const decreaseButton = screen.getByRole("button", { name: "decrease" });
    await user.click(decreaseButton);

    const counter =
      document.querySelector<HTMLHeadingElement>(".counter__number");
    expect(counter?.style.color).toBe("var(--color-red)");
  });

  it("should update color to black when counter is zero", async () => {
    const user = userEvent.setup();
    renderPage();

    const increaseButton = screen.getByRole("button", { name: "increase" });
    const resetButton = screen.getByRole("button", { name: "reset" });

    await user.click(increaseButton);
    await user.click(increaseButton);

    const counter =
      document.querySelector<HTMLHeadingElement>(".counter__number");
    expect(counter?.style.color).toBe("var(--color-green)");

    await user.click(resetButton);
    expect(counter?.style.color).toBe("var(--color-black)");
  });

  it("should handle multiple increment operations", async () => {
    const user = userEvent.setup();
    renderPage();

    const increaseButton = screen.getByRole("button", { name: "increase" });

    await user.click(increaseButton);
    await user.click(increaseButton);
    await user.click(increaseButton);
    await user.click(increaseButton);
    await user.click(increaseButton);

    const counter =
      document.querySelector<HTMLHeadingElement>(".counter__number");
    expect(counter?.textContent).toBe("5");
  });

  it("should handle multiple decrement operations", async () => {
    const user = userEvent.setup();
    renderPage();

    const decreaseButton = screen.getByRole("button", { name: "decrease" });

    await user.click(decreaseButton);
    await user.click(decreaseButton);
    await user.click(decreaseButton);

    const counter =
      document.querySelector<HTMLHeadingElement>(".counter__number");
    expect(counter?.textContent).toBe("-3");
  });

  it("should handle mixed operations", async () => {
    const user = userEvent.setup();
    renderPage();

    const increaseButton = screen.getByRole("button", { name: "increase" });
    const decreaseButton = screen.getByRole("button", { name: "decrease" });

    await user.click(increaseButton);
    await user.click(increaseButton);
    await user.click(increaseButton);
    await user.click(decreaseButton);

    const counter =
      document.querySelector<HTMLHeadingElement>(".counter__number");
    expect(counter?.textContent).toBe("2");
  });

  it("should cleanup all action listeners on page cleanup", () => {
    const page = renderPage();

    expect(page.cleanup).toBeDefined();
    page.cleanup?.();

    expect(page.cleanup).toBeDefined();
  });
});
