import { SVGProps } from "react";

interface FormCheckIconProps extends SVGProps<SVGSVGElement> {}

export function FormCheckIcon({ ...props }: FormCheckIconProps) {
  return (
    <svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={31.9997} cy={32} r={26.6667} fill="#FCFCFC" />
      <path
        d="M43.707 24.395a2.05 2.05 0 010 2.902l-14.359 14.36a2.052 2.052 0 01-2.902 0l-6.154-6.154a2.052 2.052 0 012.903-2.903l4.702 4.705 12.908-12.91a2.052 2.052 0 012.902 0zM58.667 32A26.666 26.666 0 1132 5.333 26.695 26.695 0 0158.666 32zm-4.103 0A22.564 22.564 0 1032 54.564 22.59 22.59 0 0054.564 32z"
        fill="#252525"
      />
    </svg>
  );
}
