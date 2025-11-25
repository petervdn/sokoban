import { getLayerSize } from "../getLayerSize";
import type { Level, LevelLayerType, Size } from "../types";
import { drawTile } from "./drawTile";

type DrawLayerProps = {
  context: CanvasRenderingContext2D;
  tileSize: Size;
  level: Level;
  layerType: LevelLayerType;
};

export function drawLayer({
  context,
  level,
  layerType,
  tileSize,
}: DrawLayerProps) {
  const { width, height } = getLayerSize(level[layerType]);
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const identifier = level[layerType][y][x];

      if (identifier) {
        drawTile({ context, x, y, identifier, tileSize, layerType });
      }
    }
  }
}
