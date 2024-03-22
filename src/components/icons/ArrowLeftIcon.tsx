import { SVGProps } from "react";

interface ArrobaIconProps extends SVGProps<SVGSVGElement> {
  title?: string;
}

export function ArrowLeftIcon({ title, ...props }: ArrobaIconProps) {
  return (
    <svg
      {...props}
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title && <title>{title}</title>}
      <path
        d="M25.042 29.626a1 1 0 01-1.415 1.415l-10-10a1 1 0 010-1.415l10-10a1 1 0 111.415 1.415l-9.294 9.293 9.294 9.292z"
        fill="#252525"
      />
    </svg>
  );
}
