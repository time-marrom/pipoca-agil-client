import { SVGProps } from "react";

interface StepOneIconProps extends SVGProps<SVGSVGElement> {
  title?: string;
}

export function StepOneIcon({ title, ...props }: StepOneIconProps) {
  return (
    <svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={32.0002} cy={32} r={26.6667} fill="#FCFCFC" />
      <path
        d="M32 5.333A26.667 26.667 0 1058.667 32 26.694 26.694 0 0032 5.333zm0 49.231A22.565 22.565 0 1154.564 32 22.59 22.59 0 0132 54.564zm3.077-34.872v24.616a2.051 2.051 0 01-4.102 0v-20.77l-2.965 1.977a2.052 2.052 0 11-2.277-3.415l6.154-4.103a2.052 2.052 0 013.19 1.695z"
        fill="#252525"
      />
    </svg>
  );
}
