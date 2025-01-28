export const getElements = () => ({
  btnDecrease: document.getElementById("btndecrease") as HTMLButtonElement,
  btnReset: document.getElementById("btnreset") as HTMLButtonElement,
  btnIncrease: document.getElementById("btnincrease") as HTMLButtonElement,
  numberCounter: document.querySelector(
    ".counter-section__number"
  ) as HTMLHeadingElement,
});
