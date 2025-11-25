import type { Size, Vector } from "../types";

export function gridToPixelPosition(
  gridX: number,
  gridY: number,
  tileSize: Size
): Vector {
  return {
    x: gridX * tileSize.width,
    y: gridY * tileSize.height,
  };
}
