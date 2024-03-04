import { SVGProps } from "react";

interface WarningIconProps extends SVGProps<SVGSVGElement> {
  title?: string;
}

export function WarningIcon({ title, ...props }: WarningIconProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {title && <title>{title}</title>}
      <path
        d="M22.201 17.884L14.003 3.646a2.322 2.322 0 00-4.004 0L1.801 17.884a2.204 2.204 0 000 2.223 2.282 2.282 0 002.002 1.143h16.396a2.284 2.284 0 002-1.143 2.205 2.205 0 00.002-2.223zM11.251 10a.75.75 0 111.5 0v3.75a.75.75 0 01-1.5 0V10zm.75 8.25a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25z"
        fill="#FBBB18"
      />
    </svg>
  );
}
