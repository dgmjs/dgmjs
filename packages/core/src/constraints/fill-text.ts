import { z } from "zod";
import { Shape, constraintManager, Box, Page, Group } from "../shapes";
import { Canvas } from "../graphics/graphics";
import { Transaction } from "../core/transaction";
import {
  convertStringToTextNode,
  convertTextNodeToString,
  measureText,
} from "../utils/text-utils";

const schema = z.object({
  text: z.string().default(""),
});

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada et tellus vel porttitor. Pellentesque non tincidunt tellus. Nam malesuada accumsan ipsum a volutpat. Mauris est felis, vulputate nec lorem at, ultrices mollis felis. Duis orci justo, ornare laoreet pharetra a, sodales a velit. Aliquam vitae tempus lacus, eget ullamcorper lorem. Nulla facilisi. In rhoncus eros lorem, euismod faucibus turpis hendrerit id. Aenean id tempor est, at faucibus justo. Integer lectus dui, convallis eu mauris sit amet, pretium faucibus augue. Duis auctor tortor sit amet mattis posuere. Aenean a sem ipsum. Sed eget hendrerit libero. Cras ut dolor nec lacus vestibulum sagittis. Proin ut risus et est consequat ultricies iaculis in magna. Duis odio lorem, elementum sed ligula consequat, finibus volutpat turpis. Mauris ut odio eget enim lobortis rhoncus lobortis vitae elit. Sed commodo sed erat nec sagittis. Quisque tempor, augue ut faucibus sollicitudin, nunc felis scelerisque justo, vel vehicula nunc lorem et dui. Integer a varius quam. Nunc tempor mauris posuere turpis dignissim, a porttitor tortor fringilla. Maecenas vulputate tincidunt venenatis. Suspendisse porta, purus a ullamcorper auctor, lorem erat facilisis lectus, eu semper nulla ligula nec quam. Donec lobortis nec odio ut pharetra. Pellentesque tincidunt nisi eu felis vulputate, nec semper magna placerat. Cras facilisis fermentum hendrerit. Suspendisse lectus augue, interdum quis quam sit amet, pulvinar porta leo. Aliquam erat volutpat. Pellentesque et laoreet nibh. Vestibulum leo elit, rutrum sit amet lorem vel, pretium pharetra lectus. Aliquam vitae efficitur tortor. Donec ac elementum sem. Donec quam velit, imperdiet sed libero vitae, dictum egestas ipsum. Nam pellentesque metus fermentum porttitor facilisis. Pellentesque mattis tempus leo, vitae sagittis purus placerat a. Curabitur id lorem nec turpis congue aliquet quis quis quam. Mauris sed mattis est. Cras sed tellus at leo laoreet luctus faucibus ac quam. Vivamus volutpat et massa eget ultricies. Donec nec arcu dignissim, pharetra mi in, dignissim turpis. Morbi iaculis nulla vestibulum ipsum volutpat tempus quis in diam. Nunc ipsum felis, ornare eget mauris et, mattis mollis lectus. Integer sit amet pretium magna, ac congue nibh. Etiam porta, velit eget ultricies pharetra, ipsum urna efficitur sapien, non hendrerit arcu nisi eget quam. Integer ullamcorper nisl ipsum, nec auctor lectus cursus nec. Suspendisse interdum blandit purus, ut bibendum dolor fermentum a. Praesent laoreet est eros, quis volutpat ligula aliquet blandit. Nulla ultricies lacus vitae dictum maximus. Mauris at vestibulum arcu. Curabitur ac rutrum sapien. Curabitur tempor nec lacus eget feugiat. Sed volutpat ex tincidunt velit tincidunt vestibulum. Vestibulum efficitur ac sapien ut porta. Phasellus et enim eu mauris ornare ultricies hendrerit in libero. Mauris commodo, sapien ut placerat sodales, leo elit posuere lectus, in tincidunt mi orci ac lorem. Quisque et mauris nibh. Pellentesque sed porttitor diam. Suspendisse interdum odio dictum tellus sagittis, id auctor ex tincidunt. Praesent faucibus odio sit amet justo mollis, a interdum turpis tempor. Sed scelerisque ligula lorem, ut eleifend libero egestas luctus. Phasellus eu libero elit. Vestibulum non elit vel purus sollicitudin blandit.`;
const loremIpsumChunks = loremIpsum.split(" ");

function getTextChunk(index: number = 0, fillText: string): string {
  if (fillText && fillText.trim().length > 0) {
    const chunks = fillText.trim().split(" ");
    return chunks[index % chunks.length];
  }
  return loremIpsumChunks[index % loremIpsumChunks.length];
}

function findTextFitToShape(
  canvas: Canvas,
  textShape: Box,
  fillText: string
): any {
  const width = textShape.width;
  const height = textShape.height;
  let newText = "";
  let currentIndex = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const word = getTextChunk(currentIndex, fillText);
    const testText = newText ? newText + " " + word : word;
    const textNode = convertStringToTextNode(
      testText.trim(),
      textShape?.horzAlign
    );
    const m = measureText(canvas, textShape, textNode);
    if (m.minWidth > width || m.height > height) {
      break;
    }
    newText += " " + word;
    currentIndex++;
  }
  return convertStringToTextNode(newText.trim(), textShape?.horzAlign);
}

/**
 * Fill text
 */
function constraint(
  tx: Transaction,
  page: Page,
  shape: Shape,
  canvas: Canvas,
  args: z.infer<typeof schema>
) {
  let changed = false;
  if (shape instanceof Box) {
    const fillText = args.text || "";
    const oldText = convertTextNodeToString(shape.text).trim();
    const newTextNode = findTextFitToShape(canvas, shape, fillText);
    const newText = convertTextNodeToString(newTextNode).trim();
    if (oldText !== newText) {
      tx.assign(shape!, "text", newTextNode);
      changed = true;
    }
  }
  return changed;
}

constraintManager.define("fill-text", constraint, schema);
