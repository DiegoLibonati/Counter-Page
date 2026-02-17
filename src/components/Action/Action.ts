import type { ActionProps } from "@/types/props";
import type { ActionComponent } from "@/types/components";

import "@/components/Action/Action.css";

export const Action = ({
  id,
  ariaLabel,
  className,
  children,
  onClick,
}: ActionProps): ActionComponent => {
  const button = document.createElement("button") as ActionComponent;
  button.id = id;
  button.setAttribute("aria-label", ariaLabel);
  button.className = `action ${className ?? ""}`;
  button.type = "button";

  button.innerHTML = children ?? "";

  button.addEventListener("click", onClick);

  button.cleanup = (): void => {
    button.removeEventListener("click", onClick);
  };

  return button;
};
