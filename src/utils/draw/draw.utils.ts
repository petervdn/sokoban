import { getLayerSize } from "../getLayerSize";
import type { Level, LevelLayerType, Size } from "../types";

type SharedProps = {
  context: CanvasRenderingContext2D;
  tileSize: Size;
};

function getColorForChar(
  char: string,
  layerType: LevelLayerType
): string | null {
  if (layerType === "floor") {
    const floorColors = ["#005500", "#007700", "#009900", "#00aa00"];
    const colorIndex = char.charCodeAt(0) - 49;
    return floorColors[colorIndex] ?? null;
  }
  if (layerType === "walls") {
    const colors = ["#333366", "#444488", "#555599", "#6666aa"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  return null;
}

type DrawLevelProps = SharedProps & {
  level: Level;
};
export function drawLevel({ context, level, tileSize }: DrawLevelProps) {
  drawLayer({ context, layerType: "floor", level, tileSize });
  drawLayer({ context, layerType: "walls", level, tileSize });
}

type DrawLayerProps = SharedProps & {
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
type DrawTileProps = SharedProps & {
  x: number;
  y: number;
  identifier: string;
  layerType: LevelLayerType;
};
function drawTile({
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
      fillTile({ color, context, tileSize, x, y });
    }
  }
  if (layerType === "walls") {
    if (identifier === ".") return;
    const color = getColorForChar(identifier, layerType);
    if (color) {
      fillTile({ color, context, tileSize, x, y });
    }
  }
}

type FillTileProps = SharedProps & {
  x: number;
  y: number;
  color: string;
};

function fillTile({ context, tileSize, x, y, color }: FillTileProps) {
  context.fillStyle = color;
  context.fillRect(
    x * tileSize.width,
    y * tileSize.height,
    tileSize.width,
    tileSize.height
  );
}
