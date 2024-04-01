import { PortableTextReactComponents } from "@portabletext/react";

export const sanityComponents: Partial<PortableTextReactComponents> = {
  types: {},
  block: {
    h3: (props) => (
      <h3 className="font-title font-medium text-4xl text-black">
        {props.children}
      </h3>
    ),
    h4: (props) => (
      <h4 className="font-sans font-normal text-[24px] text-black">
        {props.children}
      </h4>
    ),
  },
  marks: {},
  list: {
    number: (props) => (
      <ol className="font-sans font-normal text-base list-decimal list-inside space-y-1 text-black">
        {props.children}
      </ol>
    ),
  },
};
