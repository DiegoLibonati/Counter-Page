import { getElements } from "./getElements";

import { OFFICIAL_BODY } from "../tests/jest.constants";

describe("getElements.ts", () => {
  describe("General Tests.", () => {
    beforeEach(() => {
      document.body.innerHTML = OFFICIAL_BODY;
    });

    afterEach(() => {
      document.body.innerHTML = "";
    });

    test("It must render the elements of the document that the 'getElements' function exports.", () => {
      const { btnDecrease, btnIncrease, btnReset, numberCounter } =
        getElements();

      expect(btnDecrease).toBeInTheDocument();
      expect(btnIncrease).toBeInTheDocument();
      expect(btnReset).toBeInTheDocument();
      expect(numberCounter).toBeInTheDocument();
    });
  });
});
