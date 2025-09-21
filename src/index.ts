import { rootCss } from "@src/constants/configCss";
import { getElements } from "@src/helpers/getElements";

let count: number;

const Colors = (): void => {
  const { numberCounter } = getElements();

  if (count > 0) numberCounter.style.color = rootCss.colors.green;
  else if (count < 0) numberCounter.style.color = rootCss.colors.red;
  else numberCounter.style.color = rootCss.colors.black;
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
