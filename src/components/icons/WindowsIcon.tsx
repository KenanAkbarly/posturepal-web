interface WindowsIconProps {
  className?: string
  strokeWidth?: number
}

export function WindowsIcon({
  className,
  strokeWidth = 1.5
}: WindowsIconProps): React.JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M3 5h8v8H3z" />
      <path d="M13 5h8v8h-8z" />
      <path d="M3 13h8v8H3z" />
      <path d="M13 13h8v8h-8z" />
    </svg>
  )
}
