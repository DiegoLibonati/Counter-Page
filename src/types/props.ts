interface DefaultProps {
  className?: string;
  children?: string;
}

export interface ActionProps extends DefaultProps {
  id: string;
  ariaLabel: string;
  onClick: (e: MouseEvent) => void;
}
