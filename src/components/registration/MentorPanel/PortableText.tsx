import { PortableTextReactComponents } from "@portabletext/react";

export const sanityComponents: Partial<PortableTextReactComponents> = {
  types: {},
  block: {
    h3: (props) => (
      <h3 className="font-title font-medium text-[32px] text-black mt-16 mb-4 bg-red-500">
        {props.children}
      </h3>
    ),
  },
  marks: {},
};
