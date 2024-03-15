import { tv } from "tailwind-variants";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ItemProps {
  name: string;
  path: string;
  order: number;
}

export function Item({ name, path, order }: ItemProps) {
  const variants: { [key: number]: string } = {
    0: "",
    1: "",
    2: "col-start-2 row-start-2",
    3: "col-start-3 row-start-1",
    4: "col-start-3 row-start-2",
    5: "col-start-3 row-start-3",
  };

  return (
    <Link
      href={path}
      target="_blank"
      data-order={order}
      className={cn(
        "flex flex-row hover:text-[#b667f3] underline text-base font-semibold font-title",
        variants[order]
      )}
    >
      {name}
    </Link>
  );
}
