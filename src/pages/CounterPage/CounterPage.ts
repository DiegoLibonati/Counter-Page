import { Action } from "@src/components/Action/Action";

import { theme } from "@src/styles/theme";

import "@src/pages/CounterPage/CounterPage.css";

let count: number = 0;

const Colors = (): void => {
  const numberCounter =
    document.querySelector<HTMLHeadingElement>(".counter__number");

  if (count > 0) numberCounter!.style.color = theme.colors.green;
  else if (count < 0) numberCounter!.style.color = theme.colors.red;
  else numberCounter!.style.color = theme.colors.black;
};

const handleClickIncrease = () => {
  const numberCounter =
    document.querySelector<HTMLHeadingElement>(".counter__number");

  count++;

  numberCounter!.textContent = String(count);

  Colors();
};

const handleClickDecrease = () => {
  const numberCounter =
    document.querySelector<HTMLHeadingElement>(".counter__number");

  count--;

  numberCounter!.textContent = String(count);

  Colors();
};

const handleClickReset = () => {
  const numberCounter =
    document.querySelector<HTMLHeadingElement>(".counter__number");

  count = 0;

  numberCounter!.textContent = String(count);

  Colors();
};

export const CounterPage = () => {
  const main = document.createElement("main");
  main.className = "counter-page";

  main.innerHTML = `
    <section class="counter">
        <h2 class="counter__title">Counter</h2>

        <h1 class="counter__number">0</h1>

        <article class="counter__actions"></article>
    </section>
  `;

  const actions = main.querySelector<HTMLElement>(".counter__actions");

  const actionDecrease = Action({
    id: "btndecrease",
    ariaLabel: "decrease",
    className: "counter__btn-decrease",
    children: "Decrease",
    onClick: handleClickDecrease,
  });
  const actionReset = Action({
    id: "btnreset",
    ariaLabel: "reset",
    className: "counter__btn-reset",
    children: "Reset",
    onClick: handleClickReset,
  });
  const actionIncrease = Action({
    id: "btnincrease",
    ariaLabel: "increase",
    className: "counter__btn-reset",
    children: "Increase",
    onClick: handleClickIncrease,
  });

  actions?.append(actionDecrease, actionReset, actionIncrease);

  return main;
};
