import type { LevelLayerType, Size } from "../types";
import { fillTile } from "./fillTile";
import { getColorForChar } from "./getColorForChar";

type DrawTileProps = {
  context: CanvasRenderingContext2D;
  tileSize: Size;
  x: number;
  y: number;
  identifier: string;
  layerType: LevelLayerType;
};

export function drawTile({
  identifier,
  context,
  tileSize,
  x,
  y,
  layerType,
}: DrawTileProps) {
  if (layerType === "floor") {
    const color = getColorForChar(identifier, layerType);
    if (color) {
      fillTile({ color, context, tileSize, gridPosition: { x, y } });
    }
  }
  if (layerType === "walls") {
    if (identifier === ".") return;
    const color = getColorForChar(identifier, layerType);
    if (color) {
      fillTile({ color, context, tileSize, gridPosition: { x, y } });
    }
  }
}
