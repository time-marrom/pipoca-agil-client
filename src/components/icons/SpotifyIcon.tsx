import { SVGProps } from "react";

interface SpotifyIconProps extends SVGProps<SVGSVGElement> {
  title?: string;
}

export function SpotifyIcon({ title, ...props }: SpotifyIconProps) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title && <title>{title}</title>}
      <path
        d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM14.9128 15.9131C14.8198 16.0889 14.6608 16.2205 14.4707 16.279C14.2807 16.3376 14.0752 16.3183 13.8994 16.2253C13.3155 15.9114 12.6629 15.7472 12 15.7472C11.3371 15.7472 10.6845 15.9114 10.1006 16.2253C9.92532 16.3135 9.72245 16.3294 9.53553 16.2697C9.34862 16.21 9.19254 16.0794 9.10079 15.9059C9.00904 15.7325 8.98891 15.53 9.04473 15.3419C9.10055 15.1538 9.22787 14.995 9.39938 14.8997C10.2007 14.4758 11.0935 14.2543 12 14.2543C12.9065 14.2543 13.7993 14.4758 14.6006 14.8997C14.7764 14.9927 14.908 15.1517 14.9665 15.3418C15.0251 15.5318 15.0058 15.7373 14.9128 15.9131ZM16.4128 13.2881C16.3193 13.4636 16.1599 13.5948 15.9697 13.6529C15.7795 13.7109 15.574 13.691 15.3984 13.5975C14.3527 13.0403 13.1859 12.7489 12.0009 12.7489C10.816 12.7489 9.64922 13.0403 8.60344 13.5975C8.42828 13.687 8.22499 13.704 8.03735 13.6451C7.84972 13.5861 7.69277 13.4557 7.60032 13.2821C7.50786 13.1085 7.4873 12.9056 7.54306 12.7169C7.59883 12.5283 7.72645 12.3692 7.89844 12.2738C9.16107 11.6004 10.57 11.2483 12.0009 11.2483C13.4319 11.2483 14.8408 11.6004 16.1034 12.2738C16.1905 12.3201 16.2676 12.3832 16.3302 12.4594C16.3929 12.5357 16.4399 12.6235 16.4685 12.7179C16.4972 12.8123 16.5069 12.9114 16.4972 13.0096C16.4875 13.1078 16.4585 13.203 16.4119 13.29L16.4128 13.2881ZM17.9128 10.6631C17.8664 10.7501 17.8034 10.827 17.7272 10.8896C17.6511 10.9522 17.5634 10.9991 17.4691 11.0278C17.3748 11.0564 17.2758 11.0662 17.1777 11.0565C17.0796 11.0469 16.9844 11.018 16.8975 10.9716C15.3914 10.1649 13.7094 9.74279 12.0009 9.74279C10.2925 9.74279 8.61043 10.1649 7.10438 10.9716C6.92884 11.0653 6.72325 11.0855 6.53284 11.0276C6.34244 10.9698 6.1828 10.8387 6.08907 10.6631C5.99533 10.4876 5.97516 10.282 6.03301 10.0916C6.09085 9.90118 6.22196 9.74155 6.3975 9.64781C8.12118 8.72533 10.0459 8.24267 12.0009 8.24267C13.9559 8.24267 15.8807 8.72533 17.6044 9.64781C17.6915 9.69427 17.7686 9.75747 17.8312 9.83379C17.8938 9.91011 17.9408 9.99805 17.9694 10.0926C17.9979 10.1871 18.0076 10.2863 17.9977 10.3845C17.9878 10.4827 17.9587 10.5781 17.9119 10.665L17.9128 10.6631Z"
      />
    </svg>
  );
}
