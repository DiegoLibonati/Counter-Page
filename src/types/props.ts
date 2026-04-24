interface DefaultProps {
  className?: string | undefined;
  children?: string | undefined;
}

export interface ActionProps extends DefaultProps {
  id: string;
  ariaLabel: string;
  onClick: (e: MouseEvent) => void;
}
