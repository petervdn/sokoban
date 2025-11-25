import type { Size, Vector } from "../types";
import { gridToPixelPosition } from "./gridToPixelPosition";

type FillTileProps = {
  context: CanvasRenderingContext2D;
  tileSize: Size;
  gridPosition: Vector;
  color: string;
  inset?: Size;
};

export function fillTile({
  context,
  tileSize,
  gridPosition,
  color,
  inset = { width: 0, height: 0 },
}: FillTileProps) {
  const position = gridToPixelPosition(
    gridPosition.x,
    gridPosition.y,
    tileSize
  );
  context.fillStyle = color;
  context.fillRect(
    position.x + inset.width,
    position.y + inset.height,
    tileSize.width - inset.width * 2,
    tileSize.height - inset.height * 2
  );
}
