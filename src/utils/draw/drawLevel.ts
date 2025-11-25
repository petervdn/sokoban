import type { Level, Size } from "../types";
import { drawItems } from "./drawItems";
import { drawLayer } from "./drawLayer";

type DrawLevelProps = {
  context: CanvasRenderingContext2D;
  tileSize: Size;
  level: Level;
};

export function drawLevel({ context, level, tileSize }: DrawLevelProps) {
  drawLayer({ context, layerType: "floor", level, tileSize });
  drawLayer({ context, layerType: "walls", level, tileSize });
  drawItems({ context, level, tileSize });
}
