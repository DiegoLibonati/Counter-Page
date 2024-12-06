import { getElements } from "./helpers/getElements";

let count: number;

const Colors = (): void => {
  const { numberCounter } = getElements();

  if (count > 0) numberCounter.style.color = "green";
  else if (count < 0) numberCounter.style.color = "red";
  else numberCounter.style.color = "black";
};

const handleClickIncrease = () => {
  const { numberCounter } = getElements();

  count++;

  numberCounter.textContent = String(count);

  Colors();
};

const handleClickDecrease = () => {
  const { numberCounter } = getElements();

  count--;

  numberCounter.textContent = String(count);

  Colors();
};

const handleClickReset = () => {
  const { numberCounter } = getElements();

  count = 0;

  numberCounter.textContent = String(count);

  Colors();
};

const setInitialValues = () => {
  count = 0;
};

const onInit = () => {
  const { btnIncrease, btnReset, btnDecrease } = getElements();

  setInitialValues();

  btnIncrease.addEventListener("click", handleClickIncrease);
  btnReset.addEventListener("click", handleClickReset);
  btnDecrease.addEventListener("click", handleClickDecrease);
};

document.addEventListener("DOMContentLoaded", onInit);
