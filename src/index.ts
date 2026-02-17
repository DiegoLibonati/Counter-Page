import "@/index.css";
import { CounterPage } from "@/pages/CounterPage/CounterPage";

const onInit = (): void => {
  const app = document.querySelector<HTMLDivElement>("#app");

  if (!app) throw new Error(`You must render a container to mount the app.`);

  const counterPage = CounterPage();
  app.appendChild(counterPage);
};

document.addEventListener("DOMContentLoaded", onInit);
