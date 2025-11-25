import type { Level, Size } from "../types";
import { random } from "../seededRandom";
import { fillTile } from "./fillTile";

type Props = {
  context: CanvasRenderingContext2D;
  tileSize: Size;
  level: Level;
};

const boxColors = ["#8B4513", "#A0522D", "#CD853F"];

export function drawItems({ context, tileSize, level }: Props) {
  const inset = {
    width: tileSize.width * 0.15,
    height: tileSize.height * 0.15,
  };

  // Draw boxes
  for (const box of level.boxes) {
    const randomIndex = random.nextInt(boxColors.length);
    const color = boxColors[randomIndex];
    fillTile({
      context,
      tileSize,
      gridPosition: { x: box.x, y: box.y },
      color,
      inset,
    });
  }
}
