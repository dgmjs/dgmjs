import "@tiptap/extension-text-style";
import { Extension } from "@tiptap/core";
import { toCssColor } from "../graphics/utils";

export const ExtendedColor = Extension.create({
  name: "color",

  addOptions() {
    return {
      types: ["textStyle"],
    };
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          color: {
            default: null,
            parseHTML: (element) => {
              return element.style.color?.replace(/['"]+/g, "");
            },
            renderHTML: (attributes) => {
              if (!attributes.color) {
                return {};
              }

              return {
                style: `color: ${toCssColor(attributes.color)}`,
              };
            },
          },
        },
      },
    ];
  },

  addCommands(): any {
    return {
      setColor:
        (color: any) =>
        ({ chain }: { chain: any }) => {
          return chain().setMark("textStyle", { color }).run();
        },
      unsetColor:
        () =>
        ({ chain }: { chain: any }) => {
          return chain()
            .setMark("textStyle", { color: null })
            .removeEmptyTextStyle()
            .run();
        },
    };
  },
});
