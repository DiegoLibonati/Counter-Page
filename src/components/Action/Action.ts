import { ActionProps } from "@src/entities/props";

import "@src/components/Action/Action.css";

export const Action = ({
  id,
  ariaLabel,
  className,
  children,
  onClick,
}: ActionProps): HTMLButtonElement => {
  const button = document.createElement("button");
  button.id = id;
  button.setAttribute("aria-label", ariaLabel);
  button.className = `action ${className ?? ""}`;
  button.type = "button";

  button.innerHTML = children ?? "";

  button.addEventListener("click", onClick);

  return button;
};
