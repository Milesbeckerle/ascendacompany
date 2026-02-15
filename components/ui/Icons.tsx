type IconProps = {
  className?: string;
};

export function IconFlame({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 2C9.5 5.2 14 7.5 11 10.5C9.5 12 7 13.5 7 17A5 5 0 0 0 17 17C17 12 13.5 10.5 13.8 7.3C13.9 6 14.6 4.6 12 2Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12.2 11.6C10.7 13 10.1 13.9 10.1 15.3A1.9 1.9 0 0 0 14 15.3C14 13.8 13.2 12.8 12.2 11.6Z" fill="currentColor"/>
    </svg>
  );
}

export function IconCircle({ className }: IconProps) {
  return <span className={className} aria-hidden="true">✦</span>;
}
