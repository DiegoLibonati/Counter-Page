import "@/index.css";
import TallyPage from "@/pages/TallyPage/TallyPage";

const onInit = (): void => {
  const app = document.querySelector<HTMLDivElement>("#app");

  if (!app) throw new Error(`You must render a container to mount the app.`);

  const tallyPage = TallyPage();
  app.appendChild(tallyPage);
};

document.addEventListener("DOMContentLoaded", onInit);
