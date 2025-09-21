import { screen } from "@testing-library/dom";
import user from "@testing-library/user-event";

import { OFFICIAL_BODY } from "@tests/jest.constants";

describe("index.ts", () => {
  describe("General Tests.", () => {
    beforeEach(() => {
      document.body.innerHTML = OFFICIAL_BODY;

      require("./index.ts");
      document.dispatchEvent(new Event("DOMContentLoaded"));
    });

    afterEach(() => {
      document.body.innerHTML = "";
    });

    test("It need to render the page title, counter and action buttons.", () => {
      const title = screen.getByRole("heading", { name: /counter/i });
      const counter = screen.getByRole("heading", { name: /0/i });
      const btnDecrease = screen.getByRole("button", { name: /decrease/ });
      const btnReset = screen.getByRole("button", { name: /reset/ });
      const btnIncrease = screen.getByRole("button", { name: /increase/ });

      expect(title).toBeInTheDocument();
      expect(counter).toBeInTheDocument();
      expect(btnDecrease).toBeInTheDocument();
      expect(btnReset).toBeInTheDocument();
      expect(btnIncrease).toBeInTheDocument();
    });

    test("It must increment the counter by 1 when you click Increase.", async () => {
      const btnIncrease = screen.getByRole("button", { name: /increase/ });
      const counter = screen.getByRole("heading", { name: /0/i });

      expect(counter).toBeInTheDocument();
      expect(counter).toHaveTextContent("0");
      expect(btnIncrease).toBeInTheDocument();

      await user.click(btnIncrease);

      expect(counter).toHaveTextContent("1");
    });

    test("It must decrement the counter by 1 when you click Decrement.", async () => {
      const btnDecrease = screen.getByRole("button", { name: /decrease/ });
      const counter = screen.getByRole("heading", { name: /0/i });

      expect(counter).toBeInTheDocument();
      expect(counter).toHaveTextContent("0");
      expect(btnDecrease).toBeInTheDocument();

      await user.click(btnDecrease);

      expect(counter).toHaveTextContent("-1");
    });

    test("It must reset the counter to 0 when you click Reset.", async () => {
      const btnDecrease = screen.getByRole("button", { name: /decrease/ });
      const btnReset = screen.getByRole("button", { name: /reset/ });
      const counter = screen.getByRole("heading", { name: /0/i });

      expect(counter).toBeInTheDocument();
      expect(counter).toHaveTextContent("0");
      expect(btnReset).toBeInTheDocument();
      expect(btnDecrease).toBeInTheDocument();

      await user.click(btnDecrease);

      expect(counter).toHaveTextContent("-1");

      await user.click(btnReset);

      expect(counter).toHaveTextContent("0");
    });
  });
});
