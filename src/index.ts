import { CounterPage } from "@src/pages/CounterPage/CounterPage";

const onInit = () => {
  const app = document.querySelector<HTMLDivElement>("#app")!;
  const counterPage = CounterPage();
  app.appendChild(counterPage);
};

document.addEventListener("DOMContentLoaded", onInit);
