const btnDecrease = document.getElementById("btndecrease") as HTMLButtonElement;
const btnReset = document.getElementById("btnreset") as HTMLButtonElement;
const btnIncrease = document.getElementById("btnincrease") as HTMLButtonElement;

const numberCounter = document.querySelector(
  ".number_counter"
) as HTMLHeadingElement;

let count: number = 0;

const Colors = (): void => {
  if (count > 0) {
    numberCounter.style.color = "green";
    return;
  } else if (count < 0) {
    numberCounter.style.color = "red";
    return;
  }

  numberCounter.style.color = "black";
  return;
};

btnIncrease.addEventListener("click", () => {
  count++;

  numberCounter.textContent = String(count);

  Colors();
});

btnReset.addEventListener("click", () => {
  count = 0;

  numberCounter.textContent = String(count);

  Colors();
});

btnDecrease.addEventListener("click", () => {
  count--;

  numberCounter.textContent = String(count);

  Colors();
});
