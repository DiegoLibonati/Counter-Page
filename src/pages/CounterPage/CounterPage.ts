import type { Page } from "@/types/pages";

import { Action } from "@/components/Action/Action";

import "@/pages/CounterPage/CounterPage.css";

export const CounterPage = (): Page => {
  const main = document.createElement("main") as Page;
  main.className = "counter-page";

  main.innerHTML = `
    <section class="counter">
        <h2 class="counter__title">Counter</h2>

        <h1 class="counter__number">0</h1>

        <article class="counter__actions"></article>
    </section>
  `;

  const actions = main.querySelector<HTMLElement>(".counter__actions");

  let count = 0;

  const updateColors = (): void => {
    const numberCounter =
      main.querySelector<HTMLHeadingElement>(".counter__number");

    if (!numberCounter) return;

    if (count > 0) {
      numberCounter.style.color = "var(--color-green)";
    } else if (count < 0) {
      numberCounter.style.color = "var(--color-red)";
    } else {
      numberCounter.style.color = "var(--color-black)";
    }
  };

  const handleClickIncrease = (): void => {
    const numberCounter =
      main.querySelector<HTMLHeadingElement>(".counter__number");

    if (!numberCounter) return;

    count++;
    numberCounter.textContent = String(count);
    updateColors();
  };

  const handleClickDecrease = (): void => {
    const numberCounter =
      main.querySelector<HTMLHeadingElement>(".counter__number");

    if (!numberCounter) return;

    count--;
    numberCounter.textContent = String(count);
    updateColors();
  };

  const handleClickReset = (): void => {
    const numberCounter =
      main.querySelector<HTMLHeadingElement>(".counter__number");

    if (!numberCounter) return;

    count = 0;
    numberCounter.textContent = String(count);
    updateColors();
  };

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
    className: "counter__btn-increase",
    children: "Increase",
    onClick: handleClickIncrease,
  });

  actions?.append(actionDecrease, actionReset, actionIncrease);

  main.cleanup = (): void => {
    actionDecrease.cleanup?.();
    actionReset.cleanup?.();
    actionIncrease.cleanup?.();
  };

  return main;
};
