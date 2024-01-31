interface IShowWhen {
  show: React.ReactNode;
  when: boolean | string | number | null | undefined;
  otherwise?: React.ReactNode;
}

export function ShowWhen({ show, when, otherwise }: IShowWhen) {
  otherwise ||= <></>;
  if (when) return <>{show}</>;
  return <>{otherwise}</>;
}
